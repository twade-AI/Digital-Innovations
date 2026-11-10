/* Parent lessons have their own IDs and saved work. No pupil deck is modified. */
var PARENT_UNITS = [];
var PARENT_SLIDES = {};
var PARENT_COMPLETION = {};
(function () {
  'use strict';
  var groups = [
    {id:'parent-understand',title:'Understand and try',color:'#68bca4',ailit:'Human judgement first',from:1,to:4},
    {id:'parent-learning',title:'Keep the learning with your child',color:'#a5b7ff',ailit:'Don’t steal the struggle',from:5,to:10},
    {id:'parent-decisions',title:'Make good decisions together',color:'#ff9a83',ailit:'Dignity and care',from:11,to:15}
  ];
  PARENT_LESSONS.sort(function(a,b){return a.n-b.n;});
  groups.forEach(function(group){
    PARENT_UNITS.push(Object.assign({},group,{lessons:PARENT_LESSONS.filter(function(l){return l.n>=group.from&&l.n<=group.to;}).map(function(l){
      PARENT_SLIDES[l.id]=l.slides.concat([{type:'parent-completion',title:'Put it into practice',lessonId:l.id}]);
      PARENT_COMPLETION[l.id]=l.completion;
      return {id:l.id,title:l.title,desc:l.desc||l.goal,icon:'',time:'~'+l.minutes+' min',revision:'r1'};
    })}));
  });
})();
