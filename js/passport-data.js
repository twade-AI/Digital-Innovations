/* One curriculum source: all Passport lessons are selected from Removes.
   Shared IDs reuse teaching content and evidence; completion has its own key. */
var PASSPORT_IDS = [101,102,104,135,106,107,108,109,111,114,115,136,119,122,125,127,137,138,139,140];
var PASSPORT_TRACK = PASSPORT_IDS.map(function(id,index){
  var lesson=GCSE_UNITS.flatMap(function(u){return u.lessons;}).find(function(l){return l.id===id;});
  if(!lesson)throw new Error('Passport lesson missing from Removes: '+id);
  var section=index<4?'Understand AI':index<9?'Learn with AI':index<12?'Create and decide':index<14?'Check what you see':index<17?'People and consequences':'Test and redesign';
  return Object.assign({},lesson,{section:section});
});
