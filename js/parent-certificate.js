/* A local, lesson-check-gated completion certificate. Brand artwork and fonts are
   Haileybury's supplied originals; no signature or accreditation is implied. */
(function(root) {
  'use strict';
  var IDS = Array.from({length:15},function(_,i){return 301+i;});
  var NAME_KEY = 'di_parent_cert_name', DATE_KEY = 'di_parent_completed_date';
  var busy = false, resources = null, memoryDate = '';
  function get(key) { try{return localStorage.getItem(key)||'';}catch(e){return '';} }
  function put(key,value) { try{localStorage.setItem(key,value);}catch(e){} }
  function eligibility() {
    var saved;
    try{saved=JSON.parse(localStorage.getItem('di_parent_v1'));}catch(e){saved=[];}
    var progress = new Set(Array.isArray(saved)?saved:[]);
    var ready = root.DI_PARENT_COMPLETION && typeof DI_PARENT_COMPLETION.missing === 'function';
    var count = ready ? IDS.filter(function(id){return progress.has(id)&&DI_PARENT_COMPLETION.missing(id).length===0;}).length : 0;
    return {complete:count===15,count:count,total:15};
  }
  function dateFor(state) {
    if(!state.complete){
      memoryDate='';
      try{localStorage.removeItem(DATE_KEY);}catch(e){}
      return '';
    }
    var today=new Date().toISOString().slice(0,10),date=get(DATE_KEY)||memoryDate;
    if(!/^\d{4}-\d{2}-\d{2}$/.test(date)||isNaN(Date.parse(date))||date>today)date=today;
    memoryDate=date;put(DATE_KEY,date);return date;
  }
  function formattedDate(date) {
    return new Date(date+'T12:00:00').toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'});
  }
  function normaliseName(name) {return String(name||'').normalize('NFC').trim().replace(/\s+/g,' ');}
  function previewName() {
    var input=document.getElementById('parentCertificateName'),preview=document.getElementById('parentCertificatePreviewName');
    if(!input||!preview)return;
    var name=normaliseName(input.value);preview.textContent=name||'Your name';
    document.getElementById('gsCertCard').setAttribute('aria-label','Certificate of Completion, presented to '+(name||'your name')+' for the 15-lesson course AI at Home: A Parent’s Guide. Understanding AI, supporting your child’s learning and thoughtful and responsible use. '+document.getElementById('gsCertDate').textContent+'. Haileybury, AI and Digital Innovation.');
    preview.style.fontSize=(name.length>80?'3':name.length>45?'3.8':'5')+'cqw';
  }
  function sync() {
    var state=eligibility(),section=document.getElementById('gsComplete');
    if(!section)return state;
    var date=dateFor(state),input=document.getElementById('parentCertificateName');
    section.classList.toggle('visible',state.complete);
    document.getElementById('parentCertificateLock').textContent=state.complete
      ? 'All 15 lessons complete. Your certificate is unlocked.'
      : state.count+' of 15 lessons complete. Complete each lesson and its interactive checks to unlock your certificate.';
    document.getElementById('parentCertificateUnlocked').hidden=!state.complete;
    input.disabled=!state.complete||busy;
    document.getElementById('parentCertificateDownload').disabled=!state.complete||busy;
    document.getElementById('gsCertDate').textContent=date?formattedDate(date):'';
    if(!state.complete){document.getElementById('parentCertificateStatus').textContent='';}
    previewName();return state;
  }
  function assertEligible() {
    var state=eligibility();
    if(!state.complete){sync();throw new Error('Your certificate is locked. Complete all 15 lessons and their interactive checks before downloading.');}
    return state;
  }
  function script(path,globalName) {
    if(root[globalName])return Promise.resolve();
    return new Promise(function(resolve,reject){
      var element=document.createElement('script');element.src=path;
      element.onload=function(){root[globalName]?resolve():reject(new Error('Certificate tools could not be loaded. Please reconnect and try again.'));};
      element.onerror=function(){element.remove();reject(new Error('Certificate tools are not available offline yet. Connect, reopen this course and try again.'));};
      document.head.appendChild(element);
    });
  }
  async function bytes(path) {
    var response=await fetch(path);
    if(!response.ok)throw new Error('A certificate file could not be loaded. Connect and reopen the course, then try again.');
    return response.arrayBuffer();
  }
  function loadResources() {
    if(!resources)resources=(async function(){
      await Promise.all([script('js/vendor/pdf-lib.min.js','PDFLib'),script('js/vendor/fontkit.umd.min.js','fontkit')]);
      var files=await Promise.all([
        bytes('assets/brand/fonts/CallunaSans-Light.otf'),
        bytes('assets/brand/fonts/CallunaSans-Bold.otf'),
        bytes('assets/brand/logo/haileybury-certificate.png')
      ]);
      return {light:files[0],bold:files[1],logo:files[2]};
    })().catch(function(error){resources=null;throw error;});
    return resources;
  }
  function nameLines(name,font,size,width) {
    var lines=[],line='';
    name.split(' ').forEach(function(word){
      var candidate=line?line+' '+word:word;
      if(font.widthOfTextAtSize(candidate,size)<=width){line=candidate;return;}
      if(line){lines.push(line);line='';}
      // Long uninterrupted names are wrapped without deleting any characters.
      Array.from(word).forEach(function(char){
        if(line&&font.widthOfTextAtSize(line+char,size)>width){lines.push(line);line='';}
        line+=char;
      });
    });
    if(line)lines.push(line);return lines;
  }
  /* These supplied OpenType fonts contain name-keyed CFF, not CID-keyed CFF.
     pdf-lib's generic custom embedder labels them CIDFontType0C and breaks a
     subset in strict readers. Embed the ORIGINAL, unmodified CFF program as
     Type1C with an explicit encoding and Unicode map. No font conversion,
     outline alteration or redistribution of a derivative is involved. */
  function originalCFFFont(doc,page,raw) {
    var lib=root.PDFLib,font=root.fontkit.create(new Uint8Array(raw));
    var table=font.directory.tables['CFF '];
    if(!table)throw new Error('The supplied certificate font could not be read. Please contact the course team.');
    var scale=1000/font.unitsPerEm,chars=[],codes=new Map();
    var ref=doc.context.nextRef(),key=page.node.newFontDictionary('Haileybury',ref);
    function glyph(char){return font.glyphForCodePoint(char.codePointAt(0));}
    function width(text,size){return Array.from(text).reduce(function(sum,char){return sum+glyph(char).advanceWidth;},0)*size/font.unitsPerEm;}
    function encode(text){return Array.from(text).map(function(char){
      if(!codes.has(char)){
        if(chars.length>=255)throw new Error('This name uses more distinct characters than the certificate can print. Please ask the course team for help.');
        chars.push(char);codes.set(char,chars.length);
      }
      return codes.get(char).toString(16).padStart(2,'0');
    }).join('');}
    function unicodeHex(char){return Array.from({length:char.length},function(_,i){return char.charCodeAt(i).toString(16).padStart(4,'0');}).join('');}
    return {
      getCharacterSet:function(){return font.characterSet;},
      widthOfTextAtSize:width,
      draw:function(text,x,y,size,color){page.pushOperators(lib.beginText(),lib.setFillingColor(color),lib.setFontAndSize(key,size),lib.moveText(x,y),lib.showText(lib.PDFHexString.of(encode(text))),lib.endText());},
      embed:function(){
        var cff=new Uint8Array(raw,table.offset,table.length);
        var stream=doc.context.register(doc.context.flateStream(cff,{Subtype:'Type1C'}));
        var descriptor=doc.context.register(doc.context.obj({
          Type:'FontDescriptor',FontName:font.postscriptName,Flags:32,
          FontBBox:[font.bbox.minX,font.bbox.minY,font.bbox.maxX,font.bbox.maxY].map(function(n){return n*scale;}),
          ItalicAngle:font.italicAngle||0,Ascent:font.ascent*scale,Descent:font.descent*scale,
          CapHeight:(font.capHeight||font.ascent)*scale,StemV:80,FontFile3:stream
        }));
        var cmap='/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo << /Registry (Adobe) /Ordering (UCS) /Supplement 0 >> def\n/CMapName /HaileyburyUnicode def\n/CMapType 2 def\n1 begincodespacerange\n<00> <FF>\nendcodespacerange\n';
        // PDF CMap blocks contain at most 100 entries.
        for(var offset=0;offset<chars.length;offset+=100){
          var block=chars.slice(offset,offset+100);
          cmap+=block.length+' beginbfchar\n'+block.map(function(char,i){return '<'+(offset+i+1).toString(16).padStart(2,'0')+'> <'+unicodeHex(char)+'>';}).join('\n')+'\nendbfchar\n';
        }
        cmap+='endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend';
        doc.context.assign(ref,doc.context.obj({
          Type:'Font',Subtype:'Type1',BaseFont:font.postscriptName,FirstChar:1,LastChar:chars.length,
          Widths:chars.map(function(char){return glyph(char).advanceWidth*scale;}),FontDescriptor:descriptor,
          Encoding:{Type:'Encoding',Differences:[1].concat(chars.map(function(char){return lib.PDFName.of(glyph(char).name);}))},
          ToUnicode:doc.context.register(doc.context.flateStream(cmap))
        }));
      }
    };
  }
  async function createPDF(rawName) {
    assertEligible();
    var name=normaliseName(rawName);
    if(!name)throw new Error('Enter the name you would like on your certificate.');
    if(Array.from(name).length>120)throw new Error('Please use a name of 120 characters or fewer.');
    var files=await loadResources();assertEligible();
    var lib=root.PDFLib,doc=await lib.PDFDocument.create();
    var page=doc.addPage([841.89,595.28]),w=page.getWidth();
    var light=originalCFFFont(doc,page,files.light),bold=originalCFFFont(doc,page,files.bold);
    var supported=new Set(light.getCharacterSet());
    var unsupported=Array.from(new Set(Array.from(name).filter(function(char){return !supported.has(char.codePointAt(0));})));
    if(unsupported.length)throw new Error('The certificate typeface cannot print these characters: '+unsupported.join(' ') + '. Your name has not been changed. Please use an alternative spelling you are happy with, or ask the course team for help.');
    var magenta=lib.rgb(155/255,24/255,68/255);
    var tint=lib.rgb((255*.7+155*.3)/255,(255*.7+24*.3)/255,(255*.7+68*.3)/255);
    page.drawRectangle({x:0,y:0,width:w,height:595.28,color:lib.rgb(1,1,1)});
    page.drawRectangle({x:30,y:30,width:w-60,height:535.28,borderColor:magenta,borderWidth:1.2});
    page.drawRectangle({x:37,y:37,width:w-74,height:521.28,borderColor:lib.rgb(216/255,216/255,216/255),borderWidth:.55});
    var logo=await doc.embedPng(files.logo),logoWidth=136.06,logoHeight=logo.height*(logoWidth/logo.width);
    page.drawImage(logo,{x:(w-logoWidth)/2,y:536-logoHeight,width:logoWidth,height:logoHeight});
    function centred(text,y,size,font,color){font.draw(text,(w-font.widthOfTextAtSize(text,size))/2,y,size,color||magenta);}
    centred('Certificate of Completion',414,30,light);
    page.drawLine({start:{x:w/2-80,y:394},end:{x:w/2+80,y:394},thickness:.6,color:tint});
    centred('Presented to',373,12,light,magenta);
    var size=42,lines=nameLines(name,light,size,680);
    while((lines.length>3||lines.length*(size*1.12)>91)&&size>14){size--;lines=nameLines(name,light,size,680);}
    if(lines.length>3)throw new Error('This name is too wide for the certificate. Please use a shorter version you are happy with; your saved spelling has not been changed.');
    var leading=size*1.12,baseline=314+(lines.length-1)*leading/2;
    lines.forEach(function(line,i){centred(line,baseline-i*leading,size,light);});
    centred('has completed the 15-lesson course',254,13,light,magenta);
    centred('AI at Home: A Parent’s Guide',219,29,light);
    centred('Understanding AI · Supporting your child’s learning',181,15,light,magenta);
    centred('Thoughtful and responsible use',160,15,light,magenta);
    var date=dateFor(assertEligible());
    centred(formattedDate(date),120,12,bold,magenta);
    centred('Haileybury · AI and Digital Innovation',94,12,bold);
    centred('Completion of self-paced learning and practical activities',62,9,light,magenta);
    doc.setTitle('AI at Home: A Parent’s Guide — Certificate of Completion');
    doc.setAuthor('Haileybury');doc.setSubject('Completion of the 15-lesson parent AI course');
    doc.setCreator('AI and Digital Innovation');doc.setLanguage('en-GB');
    light.embed();bold.embed();
    var output=await doc.save();assertEligible();return output;
  }
  async function download() {
    if(busy)return false;
    var status=document.getElementById('parentCertificateStatus'),input=document.getElementById('parentCertificateName');
    try {
      assertEligible();
      if(!input.reportValidity())return false;
      busy=true;sync();status.textContent='Preparing your certificate…';
      var output=await createPDF(input.value);assertEligible();
      var url=URL.createObjectURL(new Blob([output],{type:'application/pdf'})),link=document.createElement('a');
      link.href=url;link.download='Haileybury-AI-at-Home-Certificate.pdf';document.body.appendChild(link);link.click();link.remove();
      setTimeout(function(){URL.revokeObjectURL(url);},30000);
      status.textContent='Your certificate PDF is ready. Keep it as a record of your learning.';return true;
    } catch(error) {
      status.textContent=error.message||'The certificate could not be created. Please try again.';return false;
    } finally {busy=false;sync();}
  }
  function init() {
    var input=document.getElementById('parentCertificateName');if(!input)return;
    input.value=get(NAME_KEY);
    input.addEventListener('input',function(){put(NAME_KEY,input.value);previewName();document.getElementById('parentCertificateStatus').textContent='';});
    document.getElementById('parentCertificateForm').addEventListener('submit',function(event){event.preventDefault();download();});
    root.addEventListener('storage',function(event){
      if(event.key===NAME_KEY)input.value=get(NAME_KEY);
      if(event.key===null||/^di_parent_/.test(event.key))sync();
    });
    sync();
  }
  root.DI_PARENT_CERTIFICATE={sync:sync,eligibility:eligibility,createPDF:createPDF,download:download};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})(window);
