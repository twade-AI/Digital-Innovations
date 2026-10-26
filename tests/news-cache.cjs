const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
async function check(mode,stored){
 const handlers={},writes=[];let requestOptions;
 const context={URL,Response,AbortController,setTimeout,clearTimeout,
  self:{location:{origin:'https://example.test'},addEventListener:(name,fn)=>handlers[name]=fn},
  caches:{match:async()=>stored?new Response(stored):undefined,open:async()=>({put:async(_,r)=>{if(mode==='quota')throw Error('full');writes.push(await r.text());}})},
  fetch:async(_,options)=>{requestOptions=options;if(mode==='offline')throw Error('offline');return new Response(mode==='server-error'?'error':'NEW HEADLINES',{status:mode==='server-error'?503:200});}
 };
 vm.runInNewContext(fs.readFileSync('sw.js','utf8'),context);
 let promise;handlers.fetch({request:{method:'GET',url:'https://example.test/course/js/news-live.js'},respondWith:p=>promise=p});
 const response=await promise;return {text:await response.text(),status:response.status,writes,requestOptions};
}
(async()=>{
 const online=await check('online','OLD HEADLINES');assert.equal(online.text,'NEW HEADLINES');assert.deepEqual(online.writes,['NEW HEADLINES']);assert.equal(online.requestOptions.cache,'no-cache');
 assert.equal((await check('offline','OLD HEADLINES')).text,'OLD HEADLINES');
 assert.equal((await check('server-error','OLD HEADLINES')).text,'OLD HEADLINES');
 assert.equal((await check('quota','OLD HEADLINES')).text,'NEW HEADLINES');
 assert.equal((await check('offline',null)).status,503);
 console.log('Fresh news wins over cache; offline, server-error and cache-write fallbacks passed.');
})().catch(e=>{console.error(e);process.exit(1);});
