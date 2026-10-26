/* AEP course slots retain their IDs for existing progress. Shared teaching has one source. */
var AEP_SHARED_LESSONS = {
  "1": 101,
  "2": 105,
  "4": 138,
  "5": 125,
  "6": 127,
  "7": 129,
  "9": 113,
  "10": 115,
  "11": 126,
  "12": 107,
  "13": 119,
  "15": 137,
  "16": 128,
  "44": 133,
  "45": 120,
  "46": 122,
  "48": 106,
  "51": 102,
  "58": 131
};
(function(){
  var canonical=GCSE_UNITS.flatMap(function(u){return u.lessons;});
  UNITS.forEach(function(u){u.lessons.forEach(function(l){
    var id=AEP_SHARED_LESSONS[l.id];if(!id)return;
    var source=canonical.find(function(s){return s.id===id;});
    l.previousTitle=l.title;l.title=source.title;l.desc=source.desc;l.time=source.time;
    l.sharedLessonId=id;l.objectives=['Complete the shared lesson and its independent evidence task.'];
  });});
})();
function aepLessonURL(id,evidence){
  var source=AEP_SHARED_LESSONS[id];
  return (source?'removes.html?lesson='+source+'&aep='+id:'index.html?lesson='+id)+(evidence?'&evidence=1':'');
}
