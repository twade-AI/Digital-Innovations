/* Run with a local preview server; Poppler verifies real PDF text and rendering.
   All names and completion records below are synthetic test data. */
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const crypto=require('node:crypto'),{spawnSync}=require('node:child_process');
const PDF=require('../js/vendor/pdf-lib.min.js');
const BASE=process.env.COURSE_URL||'http://127.0.0.1:8000';
const ART=path.join(process.env.ARTIFACT_DIR||require('node:os').tmpdir(),'parent-certificate');
fs.mkdirSync(ART,{recursive:true});
const IDS=Array.from({length:15},(_,i)=>301+i);
const NAME='José Émilie O’Connor';
function run(command,args){
  const result=spawnSync(command,args,{encoding:'utf8'});
  if(result.error)throw new Error(command+' is required for certificate PDF verification: '+result.error.message);
  assert.equal(result.status,0,result.stderr);
  assert.equal(result.stderr.trim(),'','PDF reader reported a font or rendering warning: '+result.stderr);
  return result.stdout;
}
function originalCFF(weight){
  const bytes=fs.readFileSync(path.join(__dirname,'../assets/brand/fonts/CallunaSans-'+weight+'.otf'));
  for(let i=0;i<bytes.readUInt16BE(4);i++){
    const at=12+i*16;
    if(bytes.toString('ascii',at,at+4)==='CFF '){const offset=bytes.readUInt32BE(at+8),length=bytes.readUInt32BE(at+12);return bytes.subarray(offset,offset+length);}
  }
  throw new Error('Original CFF program not found in '+weight);
}
const hash=bytes=>crypto.createHash('sha256').update(bytes).digest('hex');
async function verifyPDF(file,name){
  const bytes=fs.readFileSync(file),doc=await PDF.PDFDocument.load(bytes);
  assert.equal(doc.getPageCount(),1);
  const size=doc.getPage(0).getSize();assert(Math.abs(size.width-841.89)<.01&&Math.abs(size.height-595.28)<.01,'Landscape A4');
  const embedded=[];
  for(const [,object] of doc.context.enumerateIndirectObjects()){
    if(object.dict?.get(PDF.PDFName.of('Subtype'))?.toString()==='/Type1C')embedded.push(hash(PDF.decodePDFRawStream(object).decode()));
  }
  for(const weight of ['Light','Bold'])assert(embedded.includes(hash(originalCFF(weight))),'Unchanged original '+weight+' CFF must be embedded');
  const text=run('pdftotext',[file,'-']);
  assert(text.replace(/\s/g,'').includes(name.normalize('NFC').replace(/\s/g,'')),'Every name character must survive text extraction');
  for(const phrase of ['Certificate of Completion','15-lesson course','AI at Home: A Parent’s Guide','Haileybury'])assert(text.includes(phrase),phrase);
  run('pdftoppm',['-scale-to','1400','-png','-singlefile',file,file.replace(/\.pdf$/,'')]);
  return {bytes:bytes.length,pages:1,landscapeA4:true,originalFonts:true,unicodeText:true};
}
async function seedChecks(page,progress=IDS){
  await page.evaluate(({ids,progress})=>{
    for(const id of ids){
      const questions=PARENT_COMPLETION[id].questions;
      if(questions.length!==3)throw Error('Expected three authored checks for '+id);
      localStorage.setItem('di_parent_checks_v1_'+id,JSON.stringify({revision:'parent-v2',answers:questions.map(q=>({value:q.correct,submitted:true}))}));
    }
    localStorage.setItem('di_parent_v1',JSON.stringify(progress));
  },{ids:IDS,progress});
}
async function expectLocked(page,count){
  await page.evaluate(()=>DI_PARENT_CERTIFICATE.sync());
  assert.equal(await page.evaluate(()=>DI_PARENT_CERTIFICATE.eligibility().count),count);
  assert(await page.locator('#parentCertificateName').isDisabled());
  assert(await page.locator('#parentCertificateDownload').isDisabled());
  assert(!(await page.locator('#parentCertificateUnlocked').isVisible()));
  assert.match(await page.evaluate(async()=>{try{await DI_PARENT_CERTIFICATE.createPDF('Test Person');return 'UNLOCKED';}catch(error){return error.message;}}),/locked/i);
}
(async()=>{
  const browser=await chromium.launch({...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),args:['--no-sandbox']});
  const accessibility=[];
  async function checkAccessibility(page,label){
    if(!process.env.AXE_PATH)return;
    await page.addScriptTag({path:process.env.AXE_PATH});
    const result=await page.evaluate(async()=>{const report=await axe.run('#gsComplete',{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa','wcag22aa','best-practice']}});return report.violations.map(item=>({id:item.id,nodes:item.nodes.map(node=>({target:node.target,summary:node.failureSummary}))}));});
    assert.deepEqual(result,[],label+' certificate accessibility');accessibility.push({label,violations:result});
  }
  const context=await browser.newContext({viewport:{width:1200,height:1000}}),page=await context.newPage(),errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  try{
    await page.goto(BASE+'/parents.html');
    await expectLocked(page,0);
    // The previous written-evidence course and a forged progress flag cannot unlock it.
    await page.evaluate(ids=>{
      localStorage.setItem('di_gcse_v1','[101]');localStorage.setItem('di_xp','{"total":7}');
      for(const id of ids){
        localStorage.setItem('di_evidence_v1_'+id,JSON.stringify({taskRevision:'parent-v1',response:'Old written work',reasoning:'Old reasoning',transfer:'Old transfer',checks:[true,true,true],updatedAt:new Date().toISOString()}));
        localStorage.setItem('di_feedback_v1_'+id,JSON.stringify({first:'Old first answer',revision:'Old revision',shown:true,updatedAt:new Date().toISOString()}));
      }
      localStorage.setItem('di_parent_v1',JSON.stringify(ids));
    },IDS);
    await expectLocked(page,0);
    await seedChecks(page,IDS.slice(0,14));await expectLocked(page,14);
    await seedChecks(page,[...IDS.slice(0,14),301]);await expectLocked(page,14);
    await seedChecks(page,[...IDS.slice(0,14),999]);await expectLocked(page,14);
    await seedChecks(page);
    // A stored correct:true flag never substitutes for the authored answer.
    await page.evaluate(()=>{
      const id=301,q=PARENT_COMPLETION[id].questions[0],record=JSON.parse(localStorage.getItem('di_parent_checks_v1_'+id));
      record.answers[0]={value:q.kind==='choice'?(q.correct+1)%q.options.length:[],submitted:true,correct:true};
      localStorage.setItem('di_parent_checks_v1_'+id,JSON.stringify(record));
    });
    await expectLocked(page,14);
    await seedChecks(page);
    await page.reload();
    assert(await page.locator('#parentCertificateUnlocked').isVisible());
    await page.locator('#parentCertificateName').fill(NAME);
    assert.equal(await page.evaluate(()=>localStorage.getItem('di_parent_cert_name')),NAME);
    const download=page.waitForEvent('download');await page.locator('#parentCertificateDownload').click();
    const certificate=await download,file=path.join(ART,'certificate-accented.pdf');await certificate.saveAs(file);
    const pdf=await verifyPDF(file,NAME);
    const date=await page.evaluate(()=>localStorage.getItem('di_parent_completed_date'));
    assert.match(date,/^\d{4}-\d{2}-\d{2}$/);
    assert.equal(await page.evaluate(()=>localStorage.getItem('gs_cert_name')),null);
    assert.equal(await page.evaluate(()=>localStorage.getItem('di_gcse_v1')),'[101]');
    assert.equal(await page.evaluate(()=>localStorage.getItem('di_xp')),'{"total":7}');
    await page.locator('#gsComplete').screenshot({path:path.join(ART,'certificate-desktop.png')});
    await checkAccessibility(page,'desktop');
    const sample=await page.evaluate(async()=>Array.from(await DI_PARENT_CERTIFICATE.createPDF('Alex Morgan')));
    fs.writeFileSync(path.join(ART,'Sample-Haileybury-AI-at-Home-Certificate.pdf'),Buffer.from(sample));
    const long='Alexandria-Josephine Amélie Charlotte Catherine Elizabeth Francesca Gabrielle Alexandra Marie O’Connor-Smith';
    for(const [name,filename] of [[long,'certificate-long.pdf'],['W'.repeat(120),'certificate-120-characters.pdf']]){
      const output=await page.evaluate(async name=>Array.from(await DI_PARENT_CERTIFICATE.createPDF(name)),name);
      const outputFile=path.join(ART,filename);fs.writeFileSync(outputFile,Buffer.from(output));await verifyPDF(outputFile,name);
    }
    const unsupported=await page.evaluate(async()=>{try{await DI_PARENT_CERTIFICATE.createPDF('王小明');return 'UNEXPECTED';}catch(error){return error.message;}});
    assert.match(unsupported,/cannot print these characters/);assert(unsupported.includes('王'));
    assert.equal(await page.evaluate(()=>localStorage.getItem('di_parent_cert_name')),NAME);
    assert.equal(await page.evaluate(()=>localStorage.getItem('di_parent_completed_date')),date,'Completion date is stable');
    // Recheck eligibility after async asset/font work, before bytes can be downloaded.
    const race=await page.evaluate(async()=>{
      const pending=DI_PARENT_CERTIFICATE.createPDF('Test Person');
      localStorage.removeItem('di_parent_checks_v1_301');
      try{await pending;return 'UNEXPECTED';}catch(error){return error.message;}
    });
    assert.match(race,/locked/i);await expectLocked(page,14);
    assert.equal(await page.evaluate(()=>localStorage.getItem('di_parent_completed_date')),null,'Revocation clears the completion date');
    await seedChecks(page);await page.reload();
    const other=await context.newPage();await other.goto(BASE+'/parents.html');
    await other.evaluate(()=>localStorage.removeItem('di_parent_checks_v1_302'));
    await page.waitForFunction(()=>document.getElementById('parentCertificateName').disabled);
    await expectLocked(page,14);await other.close();
    await page.reload();await expectLocked(page,14);
    await seedChecks(page);await page.reload();
    await page.setViewportSize({width:390,height:844});
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
    await page.locator('#gsComplete').screenshot({path:path.join(ART,'certificate-phone.png')});
    await checkAccessibility(page,'phone');
    // A fresh offline reload must still load the lazy PDF tools, original fonts and artwork.
    await page.evaluate(()=>navigator.serviceWorker.ready);await page.reload();
    await context.setOffline(true);await page.reload();
    await page.waitForFunction(()=>DI_PARENT_CERTIFICATE.eligibility().complete);
    const offline=page.waitForEvent('download');await page.locator('#parentCertificateDownload').click();
    const offlineFile=path.join(ART,'certificate-offline.pdf');await(await offline).saveAs(offlineFile);await verifyPDF(offlineFile,NAME);
    await context.setOffline(false);
    assert.deepEqual(errors,[]);
    const receipt={pdf,oldWrittenWorkRejected:true,wrongAnswersRejected:true,duplicateAndUnknownIDsRejected:true,asyncRevocation:true,crossTabRevocation:true,reloadRevocation:true,longNames:true,unsupportedGlyphsExplained:true,offline:true,pupilStateUnchanged:true,accessibility,errors,artifacts:ART};
    fs.writeFileSync(path.join(ART,'certificate-validation.json'),JSON.stringify(receipt,null,2)+'\n');
    console.log(JSON.stringify(receipt));
  }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
