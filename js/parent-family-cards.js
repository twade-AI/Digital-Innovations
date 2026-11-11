/* Optional conversations for the three parent units. No responses are collected. */
(function (root) {
  'use strict';
  var cards = [
    {title:'What did you choose for yourself?', lead:'Ask your child to talk you through a recommendation or an AI suggestion. Start with what they noticed, then compare the tool’s suggestion with their own decision.', ages:[
      ['11–13','“What keeps appearing in this feed? What would you choose to look for yourself?”'],
      ['14–16','“If the feed keeps showing this topic, what might you miss? How could you widen what you see?”'],
      ['16–18','“Whose interests does this recommendation serve? What evidence would help you judge whether it is useful to you?”']
    ], task:'Try a round of the design challenge together. Compare the supplied suggestions, test one and choose a change. Finish by naming the decision you made that improved it.', button:'Open the design challenge', lesson:304, type:'parent-design-lab'},
    {title:'What can you explain after the help?', lead:'Choose a small learning problem. Ask your child to explain their starting point, use a useful hint, then change one detail and see how their reasoning holds up. Keep agreed access support in place.', ages:[
      ['11–13','“Which part did the hint help with? Can you explain what happens when we change this detail?”'],
      ['14–16','“Which step can you now do yourself? What would make the next question a fair test of that understanding?”'],
      ['16–18','“What assumption does your answer depend on? Would your reasoning still work if that assumption changed?”']
    ], task:'Use the fictional club-booking cases in lesson 8. Take turns explaining whether the two conditions have been met, then compare the explanations on screen. Choose the next question that would reveal understanding.', button:'Try the learning check', lesson:308, marker:'family-booking'},
    {title:'What would make you change your mind?', lead:'Discuss a useful AI activity and a boundary that would keep it useful. Ask what evidence would tell you to continue, adjust or pause. Let the young person explain their reasons before offering yours.', ages:[
      ['11–13','“If an app keeps asking you to stay, how would you decide when to stop? Who could help?”'],
      ['14–16','“What is this activity helping with, and what is it taking time away from? What boundary could we try?”'],
      ['16–18','“What would persuade you that this arrangement is working? What would make a pause the sensible decision?”']
    ], task:'Read Alex’s presentation-practice case together. Each choose a starting response, then open both explanations. Agree what you would need to find out and when you would review the decision.', button:'Explore the boundary decision', lesson:313, titleMatch:'Continue with a boundary, or pause?'}
  ];
  function esc(value) { return String(value).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];}); }
  function markup(card,i) {
    return '<details class="parent-family-card" data-family-unit="'+i+'"><summary><span>At home · optional · Unit '+(i+1)+'</span><strong>'+esc(card.title)+'</strong></summary><div class="parent-family-card-body"><p>'+esc(card.lead)+'</p><p class="parent-source-note">Choose a question that fits your child. Talk it through; there is nothing to submit.</p><dl>'+card.ages.map(function(age){return '<dt>Ages '+esc(age[0])+'</dt><dd>'+esc(age[1])+'</dd>';}).join('')+'</dl><h3>Try it together · optional</h3><p>'+esc(card.task)+'</p><button type="button" class="btn btn-secondary" data-family-activity="'+i+'">'+esc(card.button)+' →</button></div></details>';
  }
  function mount() {
    var track=root.document.getElementById('gsTrack'); if(!track)return;
    track.querySelectorAll('.parent-family-card').forEach(function(node){node.remove();});
    cards.forEach(function(card,i){
      var next=track.querySelector('#gs-unit-'+(i+2));
      if(next)next.insertAdjacentHTML('beforebegin',markup(card,i));else track.insertAdjacentHTML('beforeend',markup(card,i));
    });
  }
  function open(index) {
    var card=cards[index];if(!card)return;
    root.gsOpenLesson(card.lesson);
    var slides=root.gsSlides||[],position=slides.findIndex(function(slide){return (card.type&&slide.type===card.type)||(card.marker&&slide.familyActivity===card.marker)||(card.titleMatch&&slide.title===card.titleMatch);});
    if(position>=0)root.gsJumpSlide(position);
  }
  root.DI_PARENT_FAMILY={mount:mount,cards:cards};
  if(root.document)root.document.addEventListener('click',function(event){var button=event.target.closest&&event.target.closest('[data-family-activity]');if(button)open(Number(button.dataset.familyActivity));});
})(window);
