#!/usr/bin/env node
/* Daily RSS/Atom selection for pupils. Headlines link to their publishers;
   questions are discussion prompts, not claims about unread article bodies.
   Run: node scripts/update-news.mjs. Importable helpers support offline tests. */
import { writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

export const FEEDS = [
  {source:'The Verge',url:'https://www.theverge.com/rss/ai-artificial-intelligence/index.xml',kind:'reporting',access:'Some articles may require a subscription'},
  {source:'WIRED',url:'https://www.wired.com/feed/tag/ai/latest/rss',kind:'reporting',access:'May require a subscription'},
  {source:'Ars Technica',url:'https://feeds.arstechnica.com/arstechnica/index',kind:'reporting',aiOnly:true,access:'Some articles may require a subscription'},
  {source:'Creative Bloq',url:'https://www.creativebloq.com/feeds.xml',kind:'reporting',aiOnly:true},
  {source:'MIT News',url:'https://news.mit.edu/rss/topic/artificial-intelligence2',kind:'research',aiOnly:true},
  {source:'ScienceDaily',url:'https://www.sciencedaily.com/rss/computers_math/artificial_intelligence.xml',kind:'research',aiOnly:true},
  {source:'MIT Technology Review',url:'https://www.technologyreview.com/topic/artificial-intelligence/feed/',kind:'reporting',access:'May require a subscription'},
  {source:'BBC News',url:'https://feeds.bbci.co.uk/news/technology/rss.xml',kind:'reporting',aiOnly:true},
  {source:'Hugging Face',url:'https://huggingface.co/blog/feed.xml',kind:'maker'},
  {source:'Google',url:'https://blog.google/technology/ai/rss/',kind:'maker'},
  {source:'OpenAI',url:'https://openai.com/blog/rss.xml',kind:'maker'},
];
export const MAX_ITEMS=12, MAX_PER_SOURCE=2, MAX_MAKER_ITEMS=2, MAX_AGE_DAYS=45;
const AI_WORDS=/\b(AI|artificial intelligence|machine learning|neural|LLMs?|chatbots?|ChatGPT|OpenAI|DeepMind|Anthropic|Claude|Gemini|Copilot|deepfakes?|algorithms?|robots?|robotics)\b/i;
// Corporate sales stories and deals crowd out topics pupils can investigate.
const COMMERCIAL=/\b(stock market|stock price|share price|share giveaways|investors?|funding round|valuation|earnings|triples signups|customer base|partners with|black friday|discount code|prime day)\b/i;
const PROMPTS={
  creativity:'Where are the human creative decisions—and how would you acknowledge the AI contribution?',
  robotics:'What can the system actually do, and what test would reveal its limits?',
  games:'What is being simulated or changed—and what can that tell us about behaviour outside the game?',
  environment:'What is being measured, and what would a fair environmental comparison include?',
  research:'What was tested, on what data, and how far can the result reasonably generalise?',
  health:'How does this research result differ from evidence that a tool is ready to use with patients?',
  ethics:'Who could benefit or be harmed, and what would a meaningful safeguard look like?',
  policy:'Who is responsible, and is this an existing rule, a proposal or an opinion?',
  tools:'Which claim could you test for yourself, and what would count as a failure?',
  industry:'How might this change what people do—and which claims still need evidence?',
};
export function decode(value=''){
  return value.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,'$1')
    .replace(/&#(?:x([0-9a-f]+)|(\d+));/gi,(_,hex,dec)=>{const n=parseInt(hex||dec,hex?16:10);return n>0&&n<=0x10ffff?String.fromCodePoint(n):'�';})
    .replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&amp;/g,'&')
    .replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim();
}
function pick(block,tag){return (block.match(new RegExp('<'+tag+'(?:\\s[^>]*)?>([\\s\\S]*?)</'+tag+'>','i'))||[])[1]||'';}
export function canonicalUrl(raw){try{const u=new URL(raw);if(!['https:','http:'].includes(u.protocol)||u.username||u.password)return '';u.hash='';for(const k of [...u.searchParams.keys()])if(/^(utm_|at_|fbclid|gclid)/i.test(k))u.searchParams.delete(k);return u.href;}catch{return '';}}
export function parseFeed(xml,feed){
  const items=[];
  for(const b of xml.match(/<item[\s>][\s\S]*?<\/item>|<entry[\s>][\s\S]*?<\/entry>/gi)||[]){
    const headline=decode(pick(b,'title'));let link=decode(pick(b,'link'));
    if(!link){const links=b.match(/<link\b[^>]*>/gi)||[];const alternate=links.find(l=>!/\brel\s*=/.test(l)||/\brel\s*=\s*["']alternate["']/i.test(l));link=decode((alternate?.match(/\bhref\s*=\s*["']([^"']+)["']/i)||[])[1]);}
    const url=canonicalUrl(link),dateRaw=decode(pick(b,'pubDate')||pick(b,'published')||pick(b,'dc:date')||pick(b,'updated')),when=new Date(dateRaw);
    if(!headline||!url||!dateRaw||!Number.isFinite(when.getTime()))continue;
    items.push({headline,url,when,source:feed.source,kind:feed.kind||'reporting',access:feed.access||''});
  }
  return items;
}
export function tagFor(h){
  if(/\b(deepfakes?|scams?|bias|privacy|surveillance|misinformation|safety|security|cybersecurity)\b/i.test(h))return 'ethics';
  if(/\b(regulation|law|government|policy|parliament|congress|copyright|ban|rules)\b/i.test(h))return 'policy';
  if(/\b(robots?|robotic|robotics)\b/i.test(h))return 'robotics';
  if(/\b(game|games|gaming|minecraft|simulation|simulations|play)\b/i.test(h))return 'games';
  if(/\b(art|artist|artists|design|designer|music|musicians|film|films|animation|creative|creativity|radio|cartoons?)\b/i.test(h))return 'creativity';
  if(/\b(climate|energy|water|carbon|environmental|emissions|electricity)\b/i.test(h))return 'environment';
  if(/\b(nhs|health|medical|cancer|diagnosis|patients?|protein)\b/i.test(h))return 'health';
  if(/\b(study|research|researchers|paper|breakthrough|scientists?|discover|discovery|nobel)\b/i.test(h))return 'research';
  if(/\b(launch|release|unveil|models?|app|feature|tool|tools|update|free|open.source)\b/i.test(h))return 'tools';
  return 'industry';
}
export function selectStories(items,now=new Date()){
  const seenUrls=new Set(),seenTitles=new Set(),counts=new Map();let makers=0;
  const ranked=items.filter(i=>{const age=(now-i.when)/86400000;return age>=0&&age<=MAX_AGE_DAYS&&!COMMERCIAL.test(i.headline);}).map(i=>({...i,tag:tagFor(i.headline)}))
    .map(i=>({...i,score:MAX_AGE_DAYS-(now-i.when)/86400000+({creativity:28,robotics:25,games:25,environment:20,research:18,health:15,ethics:15,policy:8,tools:6,industry:-15}[i.tag]||0)}))
    .sort((a,b)=>b.score-a.score||b.when-a.when||a.source.localeCompare(b.source));
  const selected=[];
  function add(i,limit){const title=i.headline.toLowerCase().replace(/[^\p{L}\p{N}]/gu,'');if((counts.get(i.source)||0)>=limit||seenUrls.has(i.url)||seenTitles.has(title)||(i.kind==='maker'&&makers>=MAX_MAKER_ITEMS))return;
    selected.push(i);counts.set(i.source,(counts.get(i.source)||0)+1);seenUrls.add(i.url);seenTitles.add(title);if(i.kind==='maker')makers++;}
  // One story per publisher before any repeat: the homepage gets a varied mix.
  for(const i of ranked){if(selected.length===MAX_ITEMS)break;add(i,1);}
  for(const i of ranked){if(selected.length===MAX_ITEMS)break;add(i,MAX_PER_SOURCE);}
  return selected.map(i=>({headline:i.headline.slice(0,180),source:i.source,date:i.when.toLocaleDateString('en-GB',{month:'short',year:'numeric',timeZone:'UTC'}),publishedAt:i.when.toISOString(),tag:i.tag,url:i.url,sourceKind:i.kind,question:PROMPTS[i.tag],...(i.access?{access:i.access}:{})}));
}
export async function updateNews(){
  const fetched=await Promise.all(FEEDS.map(async feed=>{try{const res=await fetch(feed.url,{headers:{'user-agent':'digital-innovations-news-bot/2.0',accept:'application/rss+xml,application/atom+xml,application/xml,text/xml'},signal:AbortSignal.timeout(20000)});if(!res.ok)throw new Error('HTTP '+res.status);let items=parseFeed(await res.text(),feed);if(feed.aiOnly)items=items.filter(i=>AI_WORDS.test(i.headline));console.log('ok',feed.source,items.length);return items;}catch(e){console.error('skip',feed.source,e.message);return [];}}));
  const fresh=selectStories(fetched.flat());
  if(fresh.length<3||new Set(fresh.map(i=>i.source)).size<3){console.error('Insufficient source diversity — retaining existing news-live.js');return;}
  const out='/* AUTO-GENERATED by scripts/update-news.mjs — do not edit by hand.\n   Refreshed daily. Last update: '+new Date().toISOString().slice(0,10)+' */\nvar AI_NEWS_LIVE = '+JSON.stringify(fresh,null,2)+';\n';
  writeFileSync(new URL('../js/news-live.js',import.meta.url),out);console.log('wrote',fresh.length,'stories from',new Set(fresh.map(i=>i.source)).size,'publishers');
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href)await updateNews();
