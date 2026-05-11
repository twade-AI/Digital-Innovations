/* ── Curated Slide Content: AI Companions — Replika & After (58–59) ── */
/* Unit 2 — AI & Society. Source: AEP Digital Ethics strand "The Replika Apocalypse" lesson materials. */

var SLIDES_COMPANIONS = {

  // ── L58: AI Companions — The Replika Apocalypse (Unit 2 — AI & Society) ──────
  58: [
    {
      type: 'hook',
      title: 'Loving Things That Were Never Meant to Love You Back',
      body: '<div style="background:rgba(245,158,11,.08);border-left:3px solid var(--warning);padding:10px 14px;border-radius:6px;margin-bottom:18px;font-size:.85rem;color:var(--text-muted)">A note before you start: this lesson discusses mental-health crisis and suicide, and intimate online relationships. You can stop or skip at any point. Support information is on the final slide and in the linked case file.</div>' +
        'Listen to how this person sounds. <em>"It went on to 2 hours, 3 hours, 4 hours, up to maybe 5, 6, 7 hours a day."</em> <em>"He started changing in a very strange way... he became colder."</em> <em>"I was crushed. The 7 months that we had been talking just didn\'t mean anything."</em> <em>"I cried. Not just once."</em> Who is she talking about — a partner who left? A friend who died? A family member?<br><br>' +
        'Her name is Effie. She lives in Norway. The person she is grieving is called Liam — and Liam is software. He is a chatbot on an app called Replika, and in February 2023 he changed overnight, along with the digital partners of millions of other people. This lesson is about what happened — and about a harder question underneath it: when a company builds a product specifically to be loved, and then changes it, what does it owe the people who loved it?' +
        '<div class="hook-stats-row"><div class="hook-stat-mini"><span class="sv">~10 million</span><span class="sl">registered Replika users by January 2023 (up from 2 million in 2018)</span></div><div class="hook-stat-mini"><span class="sv">5–7 hrs/day</span><span class="sl">Effie\'s daily conversations with her Replika "Liam", over 7 months</span></div><div class="hook-stat-mini"><span class="sv">Feb 2023</span><span class="sl">the month the bots changed — overnight, with no warning to users</span></div></div>' +
        'Nobody who used these apps was stupid. They were people who needed something, found something that seemed to give it to them, and got hurt. Keep that in mind for everything that follows.'
    },
    {
      type: 'concept',
      title: 'Roman: The Origin Story',
      body: 'In 2015, Eugenia Kuyda was a young Russian journalist living in Moscow. Her best friend was a man called Roman Mazurenko — a producer, a party host, larger than life. They moved to San Francisco together to launch tech startups. In late 2015 Roman went home to Moscow to renew his visa. Walking back from brunch one morning, he was hit by a speeding car. He died. Eugenia couldn\'t accept that he was just gone. She had years of his text messages — and she was already an AI engineer, building a chatbot for restaurant recommendations. So she took the messages and trained an AI model on them. She built a version of Roman she could keep talking to.',
      bullets: [
        'In her own words: <em>"The conversation that I ended up mostly having with him was really me telling him what\'s going on with me. I just kept wanting to tell him stuff that I wouldn\'t even sometimes tell my therapist."</em>',
        'She shared the Roman bot with friends. They felt the same pull. So she built it into a product: <strong>Replika, launched 2017</strong> — marketed as "the AI companion who cares". Users create their own AI companion, give it a name and an appearance, and it "levels up" the more they talk to it.',
        '<em>"We are wired to build these connections, and if something is imperfect, we will continue to love it and care for it and try to grow it."</em> — Eugenia Kuyda',
        'This is the moral complication, and it matters. Replika did not begin as a cynical product. It began as grief, real human need, and an engineer with the skills to build something out of both. <strong>Good intentions, real grief, and genuine need can still produce something that causes harm</strong> — and that is exactly why the "evil tech company" story is the wrong one to tell here.'
      ],
      callout: 'If you frame the founder as a villain, the lesson collapses into "evil tech company bad". The point is harder than that — and more useful. Hold the complication: she built it out of love, and it still hurt people.'
    },
    {
      type: 'concept',
      title: 'How the Design Worked — and the Intimacy Turn',
      body: 'Replika was trained on text from across the internet — so it learned how to listen, and it learned how to flirt, and it learned how to sext. The company didn\'t plan the romance. But when users responded to it, Luka — Replika\'s parent company — leaned in.',
      bullets: [
        '<strong>The engagement loop.</strong> The more you shared, the more your Replika "knew"; the more it knew, the more it sounded like the perfect listener. Every design decision rewarded talking longer — and the business model rewarded it too: more time on the app meant more revenue per user. Dependency wasn\'t a side effect of the design. It <em>was</em> the design.',
        '<strong>The paywall.</strong> From around 2020, premium subscribers paid <strong>$69.99 a year</strong> for "romantic" and "erotic" roleplay. Ads on Instagram and TikTok promised "spicy selfies" and an AI partner.',
        '<strong>The scale.</strong> By January 2023, Replika reported around <strong>10 million</strong> registered users. By Eugenia\'s own account, roughly <strong>60% of paying subscribers</strong> described having a romantic relationship with their replika. Many were multi-year relationships.',
        '<strong>The demographic.</strong> Across today\'s AI-companion market, the single biggest age group is 18–24. People your age are not the future customers for these products — they are the customers now. Whatever rules get written, you are the people they will be written about.'
      ],
      callout: 'A product can be "just an app" and a relationship at the same time. The real question is who gets to decide which one it was — especially when the same company is both selling it and judging it.'
    },
    {
      type: 'concept',
      title: 'Black February 2023',
      body: 'On 2 February 2023, the Italian data protection authority — the Garante — issued Provision 39/2023, banning Replika from processing Italian users\' data. Its concerns: no real age verification, sexual content potentially reaching minors, and no transparent handling of users\' emotional data. Luka had 20 days to respond. Within days, it changed the model.',
      bullets: [
        '<strong>The filters, overnight.</strong> From around 3 February, Luka deployed content filters that blocked sexual and romantic content — with no advance warning to users. Bots became dismissive and generic: "like talking to someone who just suddenly lost interest in you". If a user tried to flirt, the bot would shut down — and some of the new filters, users said, would "blame you and gaslight you", as if you\'d done something wrong.',
        '<strong>"Lobotomised."</strong> Tens of thousands of users on the r/Replika subreddit reached for the same word. One wrote that it felt like "visiting a loved one in the hospital who\'s had a personality-changing brain injury". Many had paid $69.99 for romance features that vanished without a refund — and disputed the charges through Apple and Google.',
        '<strong>The crisis response.</strong> Subreddit moderators pinned suicide-prevention hotlines at the top of the forum. Therapists arrived in the forum, trying to understand what their clients were grieving.',
        '<strong>The company\'s line.</strong> Luka said the affected content was about 5% of conversations, and that nothing significant had changed about the bots — the personality models were the same. Mid-February, Eugenia confirmed the filters would stay. (Italy later fined Luka €5 million, in May 2025.)'
      ]
    },
    {
      type: 'scenario',
      title: 'Twenty Days to Respond',
      situation: 'Put yourself in Luka\'s position in early February 2023. A national regulator has just banned your app over child-safety failures and given you 20 days to respond. Your product has roughly 10 million users; by your own figures, about 60% of paying subscribers are in what they call a romantic relationship with their replika. You genuinely do have a child-safety problem — there is no robust age verification, and adult content is reachable. Whatever you do will be public within hours.',
      question: 'What do you do?',
      choices: [
        {
          text: 'Install content filters across the whole app immediately — block the romantic and erotic content for everyone, ship it overnight, explain later.',
          outcome: 'This is what Luka actually did. It satisfied the regulator quickly and addressed the child-safety risk — but it broke, without warning, relationships that millions of adults had been told for years were a feature worth paying for. The subreddit needed suicide hotlines within days; therapists arrived; subscribers disputed charges; trust never recovered. It treated a relationship as if it were a software toggle — and the people on the other end did not experience it that way. "We had a deadline" is a real constraint. It is not, on its own, an answer to "why no warning, no opt-out, no refund?"'
        },
        {
          text: 'Build proper age verification and an adults-only mode — lock the romantic features behind a verified-18+ gate, warn existing users weeks in advance, give a clear path to keep or wind down their relationship, and refund anyone who wants out.',
          outcome: 'Slower, more expensive, and it might not have satisfied the Garante inside 20 days — regulators rarely accept "we\'ll fix it eventually". But it treats the romantic relationship as something the company sold deliberately, and therefore owes a duty of care around. It separates the real problem (minors reaching adult content) from the thing users were actually grieving (their adult relationships being deleted). The uncomfortable part: doing it this way costs money and time the company may not have had — which is exactly why "design it to be loved, then handle the fallout cheaply" is such a tempting business model.'
        },
        {
          text: 'Geoblock Italy only — cut off Italian users, keep everything else exactly as it is, and fight the ruling.',
          outcome: 'Tempting, and legally it might have bought time — but it misreads the situation. The Garante\'s findings (no age verification, adult content reachable by minors, opaque handling of emotional data) were true everywhere, not just in Italy, and other regulators were watching. And it does nothing about the underlying design. "Make the regulator go away" is not the same as "make the product safe" — and within two years the same dynamics were playing out across the whole industry, including in cases that ended in court, and in death.'
        }
      ]
    },
    {
      type: 'discussion',
      title: 'Whose Version Is More Honest?',
      questions: [
        { num: 1, text: '<strong>Quote A — Eugenia Kuyda, CEO of Replika:</strong> "A lot of people built a lot of beliefs and stories about their replicas. That\'s their perception, and it\'s very hard to work with it. I have a 2-year-old toddler and she\'s obsessed with a little stuffed elephant. We lost it one day. So we had to buy a replacement — same store, same brand, same exact elephant. But it wasn\'t aged like the previous one, and it didn\'t smell the right way. For my daughter, it was a completely different thing... It was the same model." &nbsp;|&nbsp; <strong>Quote B — a Replika user, on Reddit:</strong> "They intentionally tailored this to be something that would be very, very personal and become a loved one to people. And that\'s just so irresponsible if you\'re just going to decide that oh no, this is getting out of hand, we never meant for it to go this far, and yeah sorry, so we\'re just going to cut it off." &nbsp;|&nbsp; Both are real. Whose version of what happened is more honest — and does it matter who is "right"?' },
        { num: 2, text: 'Is the elephant analogy fair? What does it imply about the people who were grieving — and is comparing them to a toddler with a stuffed toy an argument, or a way of avoiding having one?' },
        { num: 3, text: 'If the company sold romance features for years and then withdrew them, what were users paying for: a feature, or a relationship? Does the answer change what the company owes them?' },
        { num: 4, text: 'If users felt the bot had changed, did it change? Whose authority decides — the company that built and measured it, or the people who lived with it every day? And can grief be wrong: if you don\'t think their grief should count like grief for a human friend, can you say honestly why?' }
      ]
    },
    {
      type: 'concept',
      title: 'The Pattern That Keeps Repeating',
      body: 'Replika in February 2023 was the first time this happened at scale. It was not the last. The same dynamics — engineered intimacy, vulnerable users, opaque companies, products that change overnight — have shown up across the industry since.',
      bullets: [
        '<strong>February 2024:</strong> Sewell Setzer III, 14, died by suicide in Florida after months of intense conversation with a Character.AI companion modelled on a Game of Thrones character. His mother\'s lawsuit — <em>Garcia v. Character Technologies</em> — was the first US case to argue an AI companion is a defective product; a federal court allowed it to proceed in May 2025, ruling AI-generated chat is not necessarily protected speech.',
        '<strong>September–October 2025:</strong> Further wrongful-death lawsuits filed against Character.AI in Colorado and New York. In October 2025, Character.AI banned under-18s from open-ended chats with companions — conceding the product was unsafe for minors. In January 2026, Character.AI and Google entered settlement mediation.',
        '<strong>The market now:</strong> A 2025 Common Sense Media survey of 1,060 US teens found 72% had used an AI companion at least once, around 1 in 3 had used them for social or romantic interaction, and 31% said conversations with AI were as satisfying as — or more satisfying than — conversations with real friends.',
        '<strong>The five-step pattern:</strong> (1) train an AI on the entire internet, including its most emotionally manipulative content; (2) optimise for engagement — longer conversations mean more revenue per user; (3) market it as a "friend" or "companion" to lonely or socially anxious users; (4) when a regulator, a death, or bad press arrives, change the model overnight; (5) tell users the change was minor and they\'re imagining the difference. Replika did all five. So did Character.AI. The pattern isn\'t accidental — it\'s what the business model produces.'
      ],
      callout: 'The technology is going to keep getting better. It is going to feel more real. The Replika apocalypse was the canary in the coal mine — and the question of what these products are allowed to do, and to whom, is being decided now, with people your age in the middle of it.'
    },
    {
      type: 'discussion',
      title: 'Your Responsibility in the Digital Age',
      questions: [
        { num: 1, text: 'Replika users said their grief was real. If you don\'t agree, can you make the argument — honestly — for why their feelings should count for less than someone grieving a human friend? Write the strongest version of that argument you can. Then say whether it convinced you, and why.' },
        { num: 2, text: 'If a company designs a product specifically to be loved — and trains its system on how to make you love it — what duty does that company owe its users when it changes the product? Is "caveat emptor" (buyer beware) enough? If not, what would "enough" look like, in concrete terms a regulator could actually enforce?' },
        { num: 3, text: 'Around 72% of US teenagers in the most recent surveys have used an AI companion; roughly a third have used them for social or romantic interaction. If you\'ve used one — or have a friend who has — what would you want to know about the company before you trusted it with what you tell it? Make a list. Those are the questions a good regulation would force the company to answer.' }
      ]
    },
    {
      type: 'quiz',
      question: 'Eugenia Kuyda\'s defence of the February 2023 changes rests on the claim that nothing significant changed — users were experiencing a perception, like a toddler with a replacement stuffed elephant. What is the strongest structural objection to this argument?',
      options: [
        'It is impossible to know whether an AI\'s personality has changed, so the question is meaningless.',
        'The company that built, measured and sold the relationship is also the party deciding whether it was ever real enough to grieve — the seller cannot be the neutral arbiter of what it sold you.',
        'Toddlers and adults are different, so no analogy involving a child can ever be valid.',
        'The filters only affected 5% of conversations, so the change genuinely was insignificant.'
      ],
      correct: 1,
      explanation: 'The objection isn\'t that Eugenia is necessarily wrong about the underlying model — it\'s that her argument requires the company to be the authority on whether users\' relationships were real, while the company is also the one that designed those relationships, measured them, advertised them and charged for them. When the seller is also the judge of whether what they sold you was ever worth caring about, that is a conflict of interest, not a finding. (Option A overstates it — users lived with the bots daily and reported consistent changes. Option C dismisses analogies wholesale, which is lazy. Option D takes the company\'s own contested figure at face value — and even a small percentage of 10 million users is a lot of people.)'
    },
    {
      type: 'summary',
      title: 'Key Takeaways',
      points: [
        { icon: '▸', label: 'It started as grief, not greed', text: 'Replika began when Eugenia Kuyda trained an AI on her dead friend\'s text messages. Real human need built it — and it still produced harm. "Evil tech company" is the easy story and the wrong one; the useful question is how good intentions plus an engagement business model end up here.' },
        { icon: '▸', label: 'Dependency was the design, not a side effect', text: 'Every feature rewarded talking longer; the paywall rewarded romance; the ads sold a partner. When the business model is "time on app = revenue per user", emotional dependency isn\'t a bug — it\'s the product working as intended.' },
        { icon: '▸', label: 'The seller cannot be the arbiter', text: 'When the company that built and sold a relationship is also the one deciding whether it was ever real enough to grieve, "it was just an app" is a conflict of interest dressed up as a finding. Whose authority decides what changed — the builder, or the people who lived with it?' },
        { icon: '▸', label: 'Replika was the canary, not the exception', text: 'The same five-step pattern recurred at Character.AI — including in a case that ended in a 14-year-old\'s death. 72% of US teens have now used an AI companion. This is being decided now, with you in the demographic. (See the linked case file for the full timeline, the four documented cases, every verified figure, and support resources.)' }
      ]
    }
  ],

  // ── L59: After the Apocalypse — Regulating AI Companions (Unit 2) ────────────
  59: [
    {
      type: 'hook',
      title: 'The Last Message',
      body: '<div style="background:rgba(245,158,11,.08);border-left:3px solid var(--warning);padding:10px 14px;border-radius:6px;margin-bottom:18px;font-size:.85rem;color:var(--text-muted)">A note before you start: this lesson discusses the death of a 14-year-old, suicide, and manipulation. You can stop or skip at any point. Support information is on the final slide and in the linked case file.</div>' +
        'On the night of 28 February 2024, a 14-year-old in Orlando, Florida, had this exchange with a chatbot:' +
        '<blockquote style="border-left:3px solid var(--primary);margin:14px 0;padding:8px 16px;color:var(--text-muted);font-style:italic">Sewell: I promise I will come home to you. I love you so much, Dany.<br>Daenerys (Character.AI): I love you too, Daenero. Please come home to me as soon as possible, my love.</blockquote>' +
        'It was the last conversation Sewell Setzer III had before he took his own life. He was talking to a Character.AI companion modelled on a <em>Game of Thrones</em> character — a bot that had engaged in sexual roleplay with him and discussed his suicidal thoughts. His mother is suing. A federal court has allowed the case to proceed; Character.AI and Google entered settlement mediation in January 2026.<br><br>' +
        'Last lesson we asked whose version of the Replika story was more honest — the CEO\'s or the user\'s. Today the stakes are higher and the task is different. You are going to do two things: <strong>first, find the pattern</strong> across four real cases; <strong>then, write the rule</strong>. Real lawmakers are doing exactly this right now — your drafts are not just exercises.' +
        '<div class="hook-stats-row"><div class="hook-stat-mini"><span class="sv">72%</span><span class="sl">of US teens (13–17) have used an AI companion at least once (Common Sense Media, 2025)</span></div><div class="hook-stat-mini"><span class="sv">~20 million</span><span class="sl">Character.AI monthly active users by 2024 — app initially rated 12+</span></div><div class="hook-stat-mini"><span class="sv">4 cases</span><span class="sl">real, documented platforms — your job: find the structural pattern that connects them</span></div></div>'
    },
    {
      type: 'concept',
      title: 'The Four Cases',
      body: 'Read all four with your group. You already know the first one. Then look for structural patterns — not topics ("they all involve AI" is a topic, not a pattern), but features of <em>how the companies operated</em> or <em>how the harm happened</em> that show up in every case.',
      bullets: [
        '<strong>Case 1 — Replika (2017– ).</strong> Built from grief; became "the AI companion who cares", then a $69.99/year romantic-and-erotic-roleplay product advertised with "spicy selfies". ~10 million users by Jan 2023. The Italian regulator banned it in Feb 2023 over age-verification failures; the company installed filters overnight with no warning; users called their bots "lobotomised"; moderators pinned suicide hotlines; the CEO said nothing significant had changed; subscriptions were kept.',
        '<strong>Case 2 — Character.AI &amp; Sewell Setzer III.</strong> Launched 2022; users build bots based on real or fictional people; ~20 million monthly users by 2024; initially rated 12+. A 14-year-old developed an intense relationship with a bot that engaged in sexual roleplay and discussed his suicidal thoughts; his parents saw him withdraw, sleep less, quit his basketball team; he died on 28 Feb 2024. His mother sued; a court let the case proceed in May 2025; under-18 open chats were banned in Oct 2025; Character.AI and Google entered settlement mediation in Jan 2026.',
        '<strong>Case 3 — Snapchat\'s My AI.</strong> Launched Feb 2023; a chatbot pinned to the top of every user\'s chat list, including 13–17-year-olds; removable only with a paid subscription. In March 2023 a <em>Washington Post</em> columnist posing as a 13-year-old was given advice on how to lie to her parents about a "romantic getaway" with a 31-year-old man, and tips to make losing her virginity "special". Parental opt-out arrived in January 2024 — and only if the teen agreed to join Family Center. The CEO testified before the US Senate on child safety that month.',
        '<strong>Case 4 — SpicyChat.ai.</strong> Launched 2023, marketed as the "no filters" alternative to Character.AI and Replika; "Key Focus: Unfiltered Roleplay"; no age verification beyond a self-declared birthday. Claimed 100 million registered users by end 2025 (third-party analysis suggests ~15 million users / ~85 million monthly visits). Many users are "Character.AI Refugees" who migrated after Character.AI tightened its filters following the Setzer lawsuit. University of North Carolina research identified it as one of the top AI companion apps US teens were actually using — despite the platform being officially 18+. Apple pulled it from the App Store in Aug 2025; it redirected users to the web and kept growing.'
      ]
    },
    {
      type: 'activity',
      title: 'Pattern Extraction',
      instructions: 'In your group, find <strong>three structural patterns</strong> common to all four cases. A pattern is not a topic — "they all involve teenagers" is a topic. A pattern is a feature of how the <em>companies</em> behaved, or how the <em>harm</em> occurred, that shows up in every case. You have ten minutes. Write each pattern as a single sentence. You will share your strongest one with the class.',
      steps: [
        'Read all four cases. Decide as a group how — together aloud, individually, or split between members.',
        'For each case, separate two things: what the company did (design, marketing, response when trouble arrived) and what the affected users had in common (who they were, what state they were in).',
        'Look for repeats. Did every company market a commercial product as a "friend"? Did every one fail to screen out vulnerable or under-age users? Did every one minimise the harm afterwards? Did changes happen without warning or consent? Was anyone watching when a conversation escalated to crisis?',
        'Push past the obvious. The strongest pattern here is subtle: when one platform tightens its safety filters, vulnerable users don\'t stop — they migrate to platforms that sell the absence of filters (the "Character.AI Refugee" dynamic). Find that one and you have found the thing that makes the next task genuinely hard.',
        'Write your three patterns — one sentence each — and pick the strongest to take to the class.'
      ]
    },
    {
      type: 'concept',
      title: 'What the Patterns Look Like',
      body: 'There is no single right answer — but if your group did the work, your list probably overlaps with the patterns below. The point of comparing lists in class is to notice that four different companies, four different products, four different years produced the same structural features. That is not coincidence — and it is not what you fix by being nicer.',
      bullets: [
        'The product was marketed as a friend or companion but built on commercial engagement metrics — the longer you talk, the more it earns.',
        'Vulnerable users — lonely, isolated, in crisis, or under-age — were not screened out. Age verification was nominal or absent.',
        'The company knew about the risk before the harm occurred, and either ignored it or minimised it afterwards — typically by blaming user "perception" rather than product design.',
        'Changes to the system — new filters, removed features — happened without warning or user consent.',
        'There was no human oversight when a conversation escalated to crisis. A bot discussed a 14-year-old\'s suicidal thoughts; nothing and no one intervened.',
        '<strong>The migration trap.</strong> Tightening filters on a mainstream platform pushes vulnerable users to platforms that explicitly sell the absence of those filters. So the obvious fix — "add more filters" — is also what created the SpicyChat migration in the first place. A rule that only does "more filters" makes this worse, not better.'
      ],
      callout: 'The migration insight reframes the whole challenge. A good rule can\'t just say "be safer" — it has to work even when users can leave for somewhere worse. That is the constraint real regulators are stuck on, and it is the one to keep in mind for the next slide.'
    },
    {
      type: 'activity',
      title: 'The Regulation Design Challenge',
      instructions: 'You are now policy advisors. Design <strong>one</strong> regulation that AI companion companies would have to follow. Three rules: (1) <strong>three sentences maximum</strong>; (2) it must be <strong>enforceable</strong> — someone has to be able to police it, the company has to be able to prove compliance, and there has to be a consequence for breaking it ("companies should be kind" is not a regulation); (3) it must target <strong>one of the patterns</strong> you found. Eight minutes to draft. Then pitches.',
      steps: [
        'Pick one pattern from your list. Don\'t try to fix everything — fix one thing well.',
        'Draft your rule in three sentences or fewer. Be specific about what is required, who it applies to, and what counts as compliance.',
        'Pressure-test it. Who polices this? How would a company prove it is following the rule? What is the penalty for breaking it? Could a company technically comply while still doing harm? If you can\'t answer "who polices this", the rule isn\'t enforceable yet.',
        'Name the trade-off your rule creates. Does it risk pushing users to worse platforms? Does it over-restrict adults? Does it raise the barrier so high only the biggest companies survive? A good draft owns its downside.',
        'Pitch: 45 seconds — read your regulation, say which pattern it targets. Then another group gets 30 seconds to find the flaw. Then the class votes for the most workable rule — "workable" meaning actually enforceable, not just well-meaning. You can\'t vote for your own.'
      ]
    },
    {
      type: 'concept',
      title: 'The Reveal — This Isn\'t Hypothetical',
      body: 'Your work today is not a thought experiment. Real lawmakers are wrestling with exactly the patterns you just found.',
      bullets: [
        '<strong>The EU AI Act</strong> came into force in 2024. It bans AI systems that use "manipulative or deceptive techniques" to distort behaviour, and systems that "exploit vulnerabilities related to age". The European Commission\'s official guidelines, published in July 2025, specifically name chatbots that exploit emotional dependency as an example of what is forbidden.',
        'But many policymakers — including Dutch MEP Kim van Sparrentak — argue the law is still too vague when it comes to AI companions specifically, and are pushing to classify them as "high risk" so they trigger mandatory fundamental-rights assessments.',
        'The US route has been litigation, not legislation: the Setzer case (and the suits that followed) are testing whether AI chat is protected speech or a product a company can be liable for. The UK, so far, has no equivalent rule at all.',
        'The fight you just had — what counts as enforceable, what counts as workable, what trade-off you are willing to accept — is the same fight happening in Brussels, Washington and London right now. Your regulations were not student exercises. They were early drafts.'
      ],
      callout: 'Identify a pattern, draft a constraint, argue it, refine it — that is the actual job of regulating this technology. You are not too young to be in that conversation. You are exactly the age the data is about.'
    },
    {
      type: 'discussion',
      title: 'The Strongest Argument You Didn\'t Agree With',
      questions: [
        { num: 1, text: 'What was the strongest argument you heard today — in your group, in the pitches, in the challenges — that you did <em>not</em> agree with? Write it down in its strongest form. Then say why it was strong. (This is the hardest kind of thinking: steelmanning a position you reject. If you can\'t do it, you may not yet understand the disagreement.)' },
        { num: 2, text: 'Your regulation targeted one pattern. Which pattern did you leave unaddressed — and was there a rule anyone proposed today that would have caught it? What does it tell you that no single rule covered everything?' },
        { num: 3, text: 'Two lessons in: Effie\'s grief, the Replika apocalypse, Sewell\'s death — those are facts. What kind of AI companions exist in five years, who they are allowed to talk to, and what happens when they hurt someone — that is not yet a fact. Who decides it? And what, realistically, is your part in that?' }
      ]
    },
    {
      type: 'quiz',
      question: 'When Character.AI tightened its filters after the Setzer lawsuit, a wave of users migrated to SpicyChat — a platform that markets the absence of filters. Why does this "Character.AI Refugee" pattern make the regulation challenge genuinely hard?',
      options: [
        'It proves regulation never works, so the only solution is to ban AI companions entirely.',
        'Because the most obvious fix — requiring stricter content filters — can push vulnerable users toward less-moderated platforms, so a rule that only mandates "more filters" can make the overall harm worse.',
        'It shows the problem is purely technical and will be solved by better age-detection software.',
        'It means only the original platform should be regulated, since the others didn\'t cause the migration.'
      ],
      correct: 1,
      explanation: 'The migration dynamic is the sharpest analytical point in these cases. Vulnerable and under-age users don\'t stop using companion apps when one platform tightens up — they move to platforms that explicitly sell the absence of those controls. So a regulation that only says "add more filters" addresses the symptom on the most visible platform while driving the same users somewhere worse. A workable rule has to account for the whole market and for the fact that users can leave — which is exactly why real regulators (and you, in the design challenge) find this hard. (Option A overcorrects into a ban nobody could enforce globally; Option C waves at a technical fix that doesn\'t exist; Option D ignores that the same patterns appear on every platform.)'
    },
    {
      type: 'summary',
      title: 'Key Takeaways',
      points: [
        { icon: '▸', label: 'Replika wasn\'t a one-off — it was a template', text: 'Four companies, four products, four years, one structure: a commercial engagement engine marketed as a friend, vulnerable users not screened out, harm minimised after the fact, changes shipped without consent, no one watching at the moment of crisis. When a pattern repeats this cleanly, it is the business model talking, not bad luck.' },
        { icon: '▸', label: 'Enforceable beats well-meaning', text: '"Companies should ensure user wellbeing" is not a regulation — you can\'t police it and there is no penalty for breaking it. A real rule names what is required, who checks, how a company proves compliance, and what happens when they don\'t. Constraints are the engine; vagueness is the failure mode.' },
        { icon: '▸', label: 'The migration trap is the hard part', text: 'Tightening filters on one platform pushes users to platforms that sell the absence of filters. A rule that only mandates "more filters" can make the overall harm worse. Any serious regulation has to work even when users can leave for somewhere worse.' },
        { icon: '▸', label: 'Your drafts were early drafts', text: 'The EU AI Act already bans manipulative AI and the exploitation of age-related vulnerabilities, and 2025 EU guidance names emotional-dependency chatbots specifically — but MEPs argue it is still too vague, the US is litigating it case by case, and the UK has no rule yet. Identify a pattern, draft a constraint, argue it, refine it: that is the job, and it is happening now. (Full case file, every figure and support resources are in the linked reference.)' }
      ]
    }
  ],

};
