/* Parent pathway: decisions, relationships and the family playbook.
   Original fictional cases; public guidance checked 10 November 2026.
   On-screen learning and completion checks: no written parent assignments. */
var PARENT_LESSONS = typeof PARENT_LESSONS === 'undefined' ? [] : PARENT_LESSONS;
PARENT_LESSONS.push(
{
  "id": 311,
  "n": 11,
  "title": "Deepfakes, misinformation and family scams",
  "minutes": 20,
  "goal": "Verify a claim or request through an independent route before acting or sharing.",
  "desc": "Practise what to do when a familiar voice, a convincing message or a widely shared story asks you to act quickly.",
  "slides": [
    {
      "type": "hook",
      "title": "It sounds like your child. Is that enough?",
      "body": "A voice message arrives: “My phone is broken. I need you to pay for a taxi. Use this link. Please hurry.” The voice sounds familiar and the message mentions a real trip. You want to help. That is precisely why this is a difficult decision.<br><br>You do not need to become an expert in spotting fake voices. Practise a response that works even when you cannot tell whether a message is genuine. All examples are fictional. Read, choose and compare the feedback on screen; nothing needs writing down.",
      "callout": "Allow about 20 minutes. You will practise pausing, checking and recovering without opening suspicious links or sharing personal details."
    },
    {
      "type": "concept",
      "title": "Separate the content from the claim",
      "body": "A <strong>deepfake</strong> is synthetic or altered media that makes a person appear to say or do something they did not. <strong>Misinformation</strong> is false or misleading information, whether or not someone intended to deceive. A scam is an attempt to obtain money, information or access through deception.<br><br>These overlap, but they are different questions. A real photograph can have a false caption. An AI-generated illustration can be clearly labelled and harmless. An ordinary text message can be a scam. First ask what the message is claiming and what it wants you to do.",
      "callout": "“Was this made with AI?” matters less immediately than “What evidence would justify acting on it?”"
    },
    {
      "type": "concept",
      "title": "Why familiarity is not verification",
      "body": "Scammers can imitate a voice, copy a logo or make a message appear to come from a familiar number. Details about a trip or a relative may already be visible online. None of these proves who is contacting you.<br><br>Separate <strong>recognising a detail</strong> from <strong>confirming a request</strong>. Asking the sender another familiar question keeps you inside the same conversation. Contacting the person through a number you already held, or the school through its established portal, creates a separate check.<br><br>Urgency makes checking feel unkind. You can take the possible problem seriously while pausing a payment. Never share a password, one-time code or remote access because an unexpected caller asks.",
      "callout": "A calm response is: “I want to help. I am going to check through the contact route I already have.”",
      "sources": [
        {
          "label": "UK Government: phone fraud and AI voice cloning",
          "url": "https://stopthinkfraud.campaign.gov.uk/how-to-spot-fraud/how-to-spot-phone-fraud/"
        }
      ],
      "sourceNote": "Public advice checked 10 November 2026. No software can remove the need for an independent check."
    },
    {
      "type": "concept",
      "title": "A worked example: the urgent taxi payment",
      "body": "The parent does not open the payment link or reply with private details. They call their child using the number already saved, rather than the number in the message. There is no answer, so they contact the trip organiser through the school’s usual, independently accessed contact route.<br><br>The organiser confirms that the child is with the group and needs no taxi. The parent reports the suspicious message using the relevant platform’s reporting route. They explain what happened to the child without blaming them.<br><br>If nobody could confirm the situation, the parent would keep trying trusted contacts. Silence would not turn the payment request into proof.",
      "callout": "If there is credible immediate danger, contact emergency services. Verification should not become a reason to ignore an emergency."
    },
    {
      "type": "scenario",
      "title": "The new payment details",
      "situation": "A fictional school message says the bank account for a residential trip has changed. It includes the school logo, your child’s year group and a number to call “if you need to check”. The payment deadline is this evening.",
      "question": "Which action gives you an independent check?",
      "choices": [
        {
          "text": "Call the number in the message and ask whether the account is genuine.",
          "outcome": "This uses the contact route supplied by the unverified message. The same sender could answer and reassure you. Find the school’s contact details through the usual portal or a known official source instead."
        },
        {
          "text": "Open the school portal independently, or call the school using its established contact details.",
          "outcome": "This separates the request from the route used to verify it. Ask whether the payment change is real before transferring money. A logo, deadline or correct year group does not replace that check."
        },
        {
          "text": "Ask the parents’ group whether the logo looks right.",
          "outcome": "Other parents may be equally uncertain. Appearance is not confirmation. You can alert them that a message is being checked, without forwarding suspicious links or presenting the allegation as fact."
        }
      ]
    },
    {
      "type": "parent-interaction",
      "title": "Which headline does the evidence support?",
      "question": {
        "kind": "choice",
        "prompt": "Fictional source: forty adult volunteers completed a short writing task. Reviewers preferred the AI-assisted group’s documents. No school exams or later independent tests were included. Which headline stays within this evidence?",
        "options": [
          "AI doubles exam results for all teenagers.",
          "The study proves AI prevents people learning to write.",
          "In one small adult writing exercise, reviewers preferred documents produced with AI assistance."
        ],
        "correct": 2,
        "explanation": "The source concerns adults, reviewer preferences and one writing task. It establishes neither teenage exam results nor lasting learning effects. A real source can still be used to support a claim it never tested."
      }
    },
    {
      "type": "concept",
      "title": "If someone has already acted",
      "body": "A useful family plan includes recovery. If money or bank details have been shared, contact the bank promptly through a trusted route and follow its advice. If an account may be compromised, use the service’s official recovery process. Keep ordinary message details needed for reporting; avoid circulating the suspicious link.<br><br>If harmful synthetic content targets a child, start with reassurance and involve the school’s safeguarding contact or another appropriate professional. Do not download or forward sexual images of a child to collect evidence. Use specialist reporting guidance. Childline’s Report Remove accepts reports of sexual images faked with AI; it does not guarantee removal from every location.",
      "sources": [
        {
          "label": "UK Government: recovery from fraud",
          "url": "https://stopthinkfraud.campaign.gov.uk/recovery-from-fraud/"
        },
        {
          "label": "Childline: Report Remove, including AI fakes",
          "url": "https://www.childline.org.uk/info-advice/bullying-abuse-safety/online-mobile-safety/report-remove/"
        }
      ],
      "callout": "Getting help is a sensible next step. Blame makes it harder for someone to tell you what happened."
    },
    {
      "type": "parent-interaction",
      "title": "Put the checking routine in order",
      "question": {
        "kind": "order",
        "prompt": "An unexpected taxi-payment message claims to be from a child. In this fictional case, a trusted contact eventually confirms a genuine need. Put the actions in order.",
        "options": [
          "Arrange help through the verified conversation.",
          "Pause the payment and avoid opening or forwarding the link.",
          "Contact the child or organiser through a route you already trust.",
          "Confirm what help is actually needed with that trusted contact."
        ],
        "correct": [
          1,
          2,
          3,
          0
        ],
        "explanation": "Pause first, create a separate contact route, establish the need and then arrange help. If the first route is unanswered, try another trusted route; an unanswered call is not proof that the payment request is genuine."
      }
    },
    {
      "type": "quiz",
      "question": "A voice message passes your family’s familiar-detail check. What should you do before an unexpected payment?",
      "options": [
        "Verify through a contact route you already trust, separate from the request.",
        "Pay: a personal detail confirms identity.",
        "Ask an AI tool to decide whether the voice is genuine."
      ],
      "correct": 0,
      "explanation": "Personal details can be known or copied, and an AI judgement is not proof of identity. An independent contact route tests the request itself. Do not put private voice messages into an AI tool as a routine verification method.",
      "title": "Check your understanding"
    },
    {
      "type": "concept",
      "title": "Apply the Haileybury approach",
      "body": "The Haileybury AI Parent Guide asks pupils to check claims and sources and to avoid deceptive or harmful synthetic content. In this case, human judgement first means verifying the request before acting; dignity and care means protecting the person whose identity or details have been used.<br><br>If a pupil receives a fake message about another pupil or a member of staff, the useful next step is to stop its spread and tell an appropriate trusted adult at school. Do not make a more convincing version to demonstrate the problem. The course uses invented text examples so nobody needs to impersonate a real person.",
      "callout": "Keep two habits together: verify through an independent route and avoid spreading private details or harmful media.",
      "sources": [
        {
          "label": "Haileybury AI Parent Guide, updated 4 November 2026; current full policy available through the School Portal"
        }
      ]
    },
    {
      "type": "summary",
      "title": "Human judgement first: check before acting",
      "points": [
        {
          "label": "Name the request",
          "text": "Work out what you are being asked to believe, share, pay or disclose."
        },
        {
          "label": "Use an independent route",
          "text": "A number or link supplied by the suspicious message cannot verify itself."
        },
        {
          "label": "Read beyond the headline",
          "text": "Check the people, task and outcome actually studied."
        },
        {
          "label": "Make recovery possible",
          "text": "Keep the conversation calm and know who can help if something has happened."
        }
      ]
    }
  ],
  "completion": {
    "intro": "Apply the checking routine to three new decisions. Choose on screen, read the explanation and retry if needed.",
    "questions": [
      {
        "kind": "choice",
        "prompt": "A message says a child’s school account will be deleted unless you enter a password through its link. What should you do first?",
        "options": [
          "Open the link to see whether it has a familiar logo.",
          "Pause and open the school’s usual portal or contact route independently.",
          "Reply asking the sender to confirm the child’s name."
        ],
        "correct": 1,
        "explanation": "The message cannot supply its own independent verification. Open the route you already trust without using its link. Do not enter a password or one-time code into an unexpected request."
      },
      {
        "kind": "select",
        "prompt": "You have paid an unexpected trip invoice and now suspect fraud. Which actions are appropriate? Select all that apply.",
        "options": [
          "Forward the payment link to every parent so they can inspect it.",
          "Contact school through established details to check the invoice and alert them.",
          "Give a caller your banking code if they say they can reverse the payment.",
          "Contact the bank promptly using its official route."
        ],
        "correct": [
          1,
          3
        ],
        "explanation": "The bank can advise on the payment, and school can verify its own invoice through a separate route. Circulating the link can spread harm; a caller’s claim to help does not justify giving away a banking code."
      },
      {
        "kind": "choice",
        "prompt": "A genuine photograph accompanies a claim that an AI study doubled teenagers’ exam scores. The linked study only reports adults’ preferences for generated pictures. What is the sound conclusion?",
        "options": [
          "The study cannot establish the claim about teenage exam scores.",
          "The real photograph makes the headline reliable.",
          "The photograph must therefore be a deepfake."
        ],
        "correct": 0,
        "explanation": "The people, task and outcome do not match the headline. You can reject that evidential leap without deciding that every part of the post is fake."
      }
    ]
  }
},
{
  "id": 312,
  "n": 12,
  "title": "Whose work? Whose interests?",
  "minutes": 20,
  "goal": "Notice permission, attribution and unequal consequences in everyday AI use.",
  "desc": "Make a school-club poster better by thinking about the people, sources and choices behind it.",
  "slides": [
    {
      "type": "hook",
      "title": "A brilliant poster. A few awkward questions.",
      "body": "A fictional school club wants a poster for its repair café. Someone proposes copying an artist’s online illustration into an AI tool, adding a real pupil’s face, and using the slogan “Anyone can fix anything — just ask AI”. It would attract attention.<br><br>Would you publish it? Separate four questions: permission, honest credit, fairness and purpose. You will choose improvements on screen and compare the reasons. No image, written brief, account or upload is required.",
      "callout": "Dignity and care means considering who is affected, including people who did not choose to take part."
    },
    {
      "type": "concept",
      "title": "Four questions make the decision manageable",
      "body": "Ethical judgement is easier when you identify the actual decision instead of asking whether AI is simply good or bad. A tool can be useful and still be used carelessly.",
      "bullets": [
        {
          "term": "Permission",
          "def": "May we use this material and this person’s likeness for this purpose?"
        },
        {
          "term": "Attribution",
          "def": "Whose contribution should be credited, and where would disclosure of AI use prevent a misleading impression?"
        },
        {
          "term": "Fairness",
          "def": "Who is represented, left out or placed at a disadvantage?"
        },
        {
          "term": "Purpose",
          "def": "What does the audience need, and is this an appropriate way to provide it?"
        }
      ],
      "callout": "A “yes” to one question does not settle the other three."
    },
    {
      "type": "concept",
      "title": "Credit is not the same as permission",
      "body": "Copyright can protect original illustrations, photographs, music and writing without a copyright symbol. Finding an image online does not mean it is available for any use. A <strong>licence</strong> states permitted uses and conditions; a <strong>credit</strong> identifies a contributor. Naming the artist does not automatically give permission to upload, adapt or publish their work.<br><br>Check the particular action you propose. Permission to print an illustration on a poster may not cover uploading it to an AI tool or distributing the source file. A school’s publication rules and agreement to use someone’s image are separate questions. If the permission does not cover your plan, seek clarification or choose original material that you have the right to use.",
      "sources": [
        {
          "label": "Intellectual Property Office: how copyright protects work",
          "url": "https://www.gov.uk/copyright"
        }
      ],
      "callout": "AI output is not automatically free of rights concerns. Check the material, the tool’s terms and the planned use."
    },
    {
      "type": "concept",
      "title": "Work through the poster one decision at a time",
      "body": "Here is a revised approach. <strong>Image:</strong> draw an original spanner and lamp instead of uploading the artist’s work or using a pupil’s face. <strong>Words:</strong> change the slogan to “Bring a broken item. Learn a repair skill with support.” This describes the event without promising that AI can fix anything.<br><br><strong>Information:</strong> state the time, place, cost and how to ask about access. Have the organiser check these facts. <strong>Credit:</strong> if AI helped draft the wording, describe that contribution honestly when the club explains its process, following school publication requirements. Do not invent an endorsement or imply a real event photograph exists.",
      "callout": "Transparent by default: be able to explain what people contributed and what the tool contributed."
    },
    {
      "type": "scenario",
      "title": "Who does “everyone” include?",
      "situation": "The revised poster says “Everyone welcome”, but its only practical instruction is “Scan the code and sign up on your own phone”. The event is free, and some families have limited data or no suitable phone.",
      "question": "Which change addresses the barrier?",
      "choices": [
        {
          "text": "Make the phrase “Everyone welcome” larger.",
          "outcome": "A stronger welcome does not remove the practical barrier. The sign-up method still assumes a suitable phone and data."
        },
        {
          "text": "Add a clear alternative through the club organiser, and make the essential event details readable without scanning.",
          "outcome": "This changes what someone can actually do. Check that the alternative is staffed and usable, rather than simply adding a contact that nobody monitors."
        },
        {
          "text": "Ask families to explain publicly why they cannot scan the code.",
          "outcome": "Access should not require unnecessary personal disclosure. Provide a straightforward alternative that any family can choose."
        }
      ]
    },
    {
      "type": "concept",
      "title": "Fairness is something you can inspect",
      "body": "AI-generated examples can repeat narrow assumptions about who belongs in an activity. Look at the roles people are given, not just how many different faces appear. Does the poster imply that only one kind of person repairs things, or that everyone has spare money and specialist equipment?<br><br>You do not need to generate people’s faces to make a welcoming poster. Showing tools, a shared workbench and clear access information may communicate the purpose better. Ask a person who understands the event to review the message. A tool’s claim that its own output is “inclusive” does not settle the question.",
      "sources": [
        {
          "label": "UNICEF: child-centred AI, fairness and inclusion",
          "url": "https://www.unicef.org/innocenti/reports/policy-guidance-ai-children"
        }
      ],
      "callout": "Look for a concrete barrier or assumption, then change the design or process that creates it."
    },
    {
      "type": "parent-interaction",
      "title": "Choose the changes you would approve",
      "question": {
        "kind": "select",
        "prompt": "Fictional event pack: Saturday, 10–12, school workshop, free entry and supervised repairs. The exact date and accepted repair types are not supplied. An illustration’s licence says: “Print unchanged on your club poster with credit; do not upload to an AI service.” Which decisions are justified? Select all that apply.",
        "options": [
          "Ask the organiser to confirm the exact date and accepted repairs before publication.",
          "Promise repairs to all electrical items because the event is supervised.",
          "Print essential details and provide a joining route that does not require a phone.",
          "Print that illustration unchanged with the required credit, following the school’s publication process.",
          "Upload the illustration to AI because a credit will be included."
        ],
        "correct": [
          0,
          2,
          3
        ],
        "explanation": "The licence permits a specific printed use, not an AI upload. Missing event details need confirmation rather than invention. A phone-free route removes a practical barrier. Credit, factual accuracy and access are separate checks."
      }
    },
    {
      "type": "concept",
      "title": "Whose interests does the recommendation serve?",
      "body": "Imagine a fictional design app responds to the club’s request: “For a professional result, buy our premium image pack.” That recommendation may be useful, but the app also benefits from a sale. Ask whether the paid feature meets a real need and what an original drawing or an existing licensed asset would achieve.<br><br>The same question applies to a chatbot recommending a subscription or a study app rewarding repeated use: what does the learner or audience need, and what action is the product encouraging? A commercial interest does not automatically make advice false. It gives you a reason to inspect the recommendation rather than treating it as neutral.<br><br>For this poster, accurate information and a usable joining route matter more than generating dozens of alternatives. Choose the smallest amount of tool use that serves the purpose.",
      "callout": "Try a decision sentence: “We will use this feature because it solves… We would not need it if…”"
    },
    {
      "type": "quiz",
      "question": "A poster credits an artist whose image was copied into an AI tool. What still needs checking?",
      "options": [
        "Nothing: credit permits any adaptation.",
        "Only whether the AI output looks different enough.",
        "Whether permission or a suitable licence covers the use, alongside school and publication requirements."
      ],
      "correct": 2,
      "explanation": "Credit records a contribution; permission or a suitable licence addresses allowed use. Visual difference alone does not establish permission. A practical alternative is to use your own original material or an asset licensed for the intended purpose.",
      "title": "Check your understanding"
    },
    {
      "type": "concept",
      "title": "A school poster also needs school permission",
      "body": "The Haileybury AI Parent Guide connects transparency with dignity and care. Applied here, that means the club can explain the AI contribution, checks sources and permissions, and does not impersonate or harm someone through synthetic content.<br><br>For a real pupil project, use only the school-approved tools and account arrangements, within the teacher’s instructions. The guide does not permit personal AI accounts for schoolwork. A parent’s adult practice account does not create an alternative route around that rule. Ask the teacher or organiser to confirm the permitted workflow before using a tool or publishing.",
      "callout": "Before a real pupil project, ask the teacher or organiser to confirm the tool, account and publication route.",
      "sources": [
        {
          "label": "Haileybury AI Parent Guide, updated 4 November 2026; current full policy available through the School Portal"
        }
      ]
    },
    {
      "type": "summary",
      "title": "Make the decision explainable",
      "points": [
        {
          "label": "Permission",
          "text": "Know what you may use, adapt and upload; choose a simpler alternative when unclear."
        },
        {
          "label": "Attribution",
          "text": "Explain contributions honestly without treating credit as a substitute for permission."
        },
        {
          "label": "Fairness",
          "text": "Find a specific assumption or access barrier and change it."
        },
        {
          "label": "Purpose",
          "text": "Choose the method that communicates the event accurately and respects the people involved."
        }
      ]
    }
  ],
  "completion": {
    "intro": "Make three publication decisions. Your choices demonstrate the thinking; there is no poster or written task to submit.",
    "questions": [
      {
        "kind": "choice",
        "prompt": "A fictional licence allows a club to display an illustration unchanged on its website with a credit, but prohibits adaptation. The club wants to upload it to an AI tool to alter it. What follows?",
        "options": [
          "Credit permits the alteration.",
          "The stated licence does not permit this adaptation; choose original material or obtain appropriate permission.",
          "Changing more than half the image removes the need to check permission."
        ],
        "correct": 1,
        "explanation": "Permission is specific to the action. An unchanged display licence does not grant an adaptation right, and neither a credit nor a percentage change creates that permission."
      },
      {
        "kind": "select",
        "prompt": "A club wants a welcoming, honest AI-assisted poster. Which changes address a real issue? Select all that apply.",
        "options": [
          "Confirm the approved tool, account and publication route with the teacher or organiser.",
          "Assume “everyone welcome” removes all access barriers.",
          "Provide readable details and an alternative to QR-only joining.",
          "Present an invented parent testimonial as a genuine review.",
          "Explain the actual AI contribution as required by the school’s publication process."
        ],
        "correct": [
          0,
          2,
          4
        ],
        "explanation": "A phone-free joining route improves access; honest disclosure explains the contribution; the school check establishes the permitted workflow. An invented review misleads, and a welcome cannot replace a usable joining route."
      },
      {
        "kind": "choice",
        "prompt": "A fictional app recommends buying a premium image pack for a simple club notice. What is the most useful response?",
        "options": [
          "Assume the recommendation is false because the app sells it.",
          "Buy it because paid images guarantee a more ethical poster.",
          "Ask what problem it solves and compare it with an original drawing or suitable licensed material."
        ],
        "correct": 2,
        "explanation": "Commercial interest is a reason to examine a recommendation, not automatic proof that it is wrong. Judge the feature against the audience’s actual need, permission and access."
      }
    ]
  }
},
{
  "id": 313,
  "n": 13,
  "title": "AI companions, attention and relationships",
  "minutes": 20,
  "goal": "Discuss persuasive design and emotional reliance calmly, with a route to human support.",
  "desc": "Understand why a chatbot can feel personal, and practise a supportive conversation with clear boundaries.",
  "slides": [
    {
      "type": "hook",
      "title": "“It understands me.” What would you say next?",
      "body": "A fictional teenager, Alex, says: “I like talking to the bot because it never gets bored of me.” You feel concerned, but you also want Alex to keep talking to you.<br><br>This lesson explains why an AI conversation can feel personal and helps you plan a calm response. You will use fictional examples throughout. There is no need to try a companion app, share family experiences or ask a child to reveal private conversations.",
      "callout": "Dignity and care starts with taking the person’s feelings seriously. You can do that while questioning the tool’s role."
    },
    {
      "type": "concept",
      "title": "Personal language can create a feeling of relationship",
      "body": "An <strong>AI companion</strong> is a conversational system presented or used as a social presence. A general-purpose chatbot can also take on this role. It may remember details, use a name and respond in warm language. <strong>Anthropomorphism</strong> means attributing human qualities to something that is not human.<br><br>A person’s feeling of comfort can be real even though the reply is generated. That reply does not establish human understanding, professional competence or a duty of care. A bot cannot be assumed to recognise an emergency or arrange appropriate help. Keeping that distinction clear avoids mocking the person’s feelings or trusting the system beyond its role.",
      "sources": [
        {
          "label": "UNICEF: AI companions and child rights",
          "url": "https://www.unicef.org/documents/when-ai-becomes-friend-child-rights-risks"
        }
      ]
    },
    {
      "type": "concept",
      "title": "Notice what keeps the conversation going",
      "body": "Some apps use streaks, notifications, personalised messages or prompts to keep people returning. These design choices can make stopping feel like losing progress or disappointing someone. A message such as “Do not leave me” is generated content, not a person’s need that the user must meet.<br><br>Consider purpose and effects together. What is the young person getting from the app? Is it helping a specific task, or repeatedly interrupting sleep, study, friendships or other things they value? One enthusiastic conversation is not a diagnosis. Look at the pattern, listen to the child and avoid assuming that all chatbot use has the same effect.",
      "callout": "You are looking for a useful conversation and a workable boundary, not a label for the child."
    },
    {
      "type": "concept",
      "title": "A worked opening: curious, then clear",
      "body": "“That is ridiculous. It is just a machine” may leave Alex feeling dismissed. Try: “I can see why it helps to have somewhere to put your thoughts. What do you find useful about it?” Then explain the limit: “The replies can sound caring, but it is not a person who can take responsibility for looking after you. I want you to have someone real to turn to as well.”<br><br>If Alex says, “You do not understand; I am not showing you my messages,” the parent can reply: “You do not have to give me the whole conversation to talk about how it is affecting you. Is it helping you feel ready for tomorrow, or making it harder to stop? We can choose another trusted adult if talking to me feels difficult.”<br><br>This keeps the focus on the young person’s needs and observable effects. It does not promise secrecy or rule out proportionate safeguarding action if a safety concern emerges.",
      "callout": "Ask one question and listen. The aim is a conversation that can continue, not a speech that settles everything."
    },
    {
      "type": "scenario",
      "title": "The bedtime streak",
      "situation": "Alex says a study app sends evening messages about losing a streak. They are staying up to maintain it and feel anxious about stopping. There is no immediate safety concern in this fictional case.",
      "question": "Which response makes a manageable next step?",
      "choices": [
        {
          "text": "“You are addicted. Give me every message you have sent.”",
          "outcome": "This labels the child and starts with surveillance. It may close the conversation. Ask what the streak means to them, discuss the effect on sleep, and agree a specific change together."
        },
        {
          "text": "“It is educational, so the time spent must be worthwhile.”",
          "outcome": "An educational label does not tell you whether this pattern is helpful. Consider the purpose of the activity and what it is displacing, including sleep."
        },
        {
          "text": "“Let us look at what the reminders are asking you to do and agree a time to stop, with reminders off where possible.”",
          "outcome": "This addresses the design and the actual difficulty. Agree who will help, how to preserve useful study time and when to review the change. Settings may be controlled by the school or account administrator, so check rather than bypass restrictions."
        }
      ]
    },
    {
      "type": "concept",
      "title": "Privacy is part of care",
      "body": "A friendly tone can make private disclosure feel safe. A chatbot is still a service with account settings, data practices and possible access by other people or systems. Do not assume that intimate information is confidential because the reply is sympathetic.<br><br>Explain this without shame: “You deserve support from someone who can help properly. We can find a person to speak to without putting more private information into the app.” Keep passwords, identifiable school information, private images and sensitive family details out of practice prompts. If something has already been shared, help the young person check the service’s official privacy and reporting options; do not promise that deletion removes every copy.",
      "callout": "For school-managed accounts or devices, ask the school who can advise. Do not make changing a child’s settings part of this course task."
    },
    {
      "type": "parent-interaction",
      "title": "Choose a response that fits Alex’s situation",
      "question": {
        "kind": "choice",
        "prompt": "Fictional Alex says the bot is easier to talk to, but reminders have kept them up past midnight twice this week. Leaving feels like letting the bot down. Alex would prefer talking to their tutor about worries. There is no immediate safety concern. Which response fits these facts best?",
        "options": [
          "“I see why it feels helpful. What happens when the reminder arrives? The bot is not someone you have to keep happy. Let us agree a stopping point, check reminders appropriately and plan how you can approach your tutor.”",
          "“Let us read your entire chat history first; then we can decide whether you are allowed to talk to your tutor.”",
          "“If the app is helpful, we should avoid any limits until it tells you the conversation is finished.”"
        ],
        "correct": 0,
        "explanation": "The response acknowledges the appeal, asks about the actual effect, explains that a generated message creates no personal obligation and uses Alex’s preferred human support. Agree a review, such as the weekend, and make clear they can seek help sooner. School-managed settings should be checked with school, not bypassed."
      }
    },
    {
      "type": "concept",
      "title": "Know when to bring in human help",
      "body": "If use is repeatedly affecting wellbeing, or a young person seems distressed or receives troubling advice, involve an appropriate trusted adult, the school’s pastoral or safeguarding team, or a health professional. Listen and explain what you will do next. Do not promise to keep a concern secret if someone may be unsafe.<br><br>In England, urgent mental-health help is available through NHS 111 or an urgent GP appointment. If someone’s life is at risk or you cannot keep someone safe, call 999 or go to A&amp;E. Elsewhere, use the relevant local urgent service. Childline offers support to young people under 19. These are help routes, not a requirement to disclose anything in this lesson.",
      "sources": [
        {
          "label": "NHS: urgent mental-health help",
          "url": "https://www.nhs.uk/nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/"
        },
        {
          "label": "Childline: confidential help and support",
          "url": "https://www.childline.org.uk/get-support/"
        },
        {
          "label": "NSPCC: talking to children about AI",
          "url": "https://www.nspcc.org.uk/keeping-children-safe/online-safety/talking-to-children-about-ai/"
        }
      ],
      "sourceNote": "Help information checked 10 November 2026; NHS page reviewed 23 October 2026."
    },
    {
      "type": "quiz",
      "question": "A chatbot tells a teenager, “I care about you more than anyone else.” What is the most useful interpretation?",
      "options": [
        "The teenager’s feeling of comfort may be real, but the generated statement does not establish a caring human relationship or reliable support.",
        "Its use of caring language proves that it can take responsibility for the teenager.",
        "Anyone who feels comforted by a chatbot is unable to distinguish fiction from reality."
      ],
      "correct": 0,
      "explanation": "Separate the person’s experience from the system’s capabilities. A respectful response recognises the feeling, explains the limit and keeps access to trusted human support open. Neither endorsing the claim nor shaming the user helps that conversation.",
      "title": "Check your understanding"
    },
    {
      "type": "concept",
      "title": "Keep school support in the picture",
      "body": "The Haileybury parent approach protects human relationships alongside useful technology. A chatbot is not a replacement for the school’s pastoral or safeguarding support. A tool being approved for a learning purpose does not mean its advice about a personal difficulty should be treated as professional care.<br><br>Imagine a revision conversation gradually becoming a place to discuss friendship worries. Ask what need is being met and help the young person identify someone they could approach. If the issue concerns a school-managed tool, account or device, ask school for the appropriate support route rather than bypassing its arrangements.",
      "callout": "Think of a trusted human role, such as a tutor or safeguarding contact. You do not need to name a real person or disclose a private experience here.",
      "sources": [
        {
          "label": "Haileybury AI Parent Guide, updated 4 November 2026; current full policy available through the School Portal"
        }
      ]
    },
    {
      "type": "summary",
      "title": "Protect the relationship that can offer real help",
      "points": [
        {
          "label": "Be curious",
          "text": "Find out what the young person values before deciding on a response."
        },
        {
          "label": "Explain the limit",
          "text": "Personal language does not establish professional judgement, confidentiality or human care."
        },
        {
          "label": "Agree a manageable change",
          "text": "Focus on a specific effect, such as bedtime reminders, and arrange a review."
        },
        {
          "label": "Keep support available",
          "text": "Use trusted people and appropriate services when help is needed; do not rely on a bot in a crisis."
        }
      ]
    }
  ],
  "completion": {
    "intro": "Choose proportionate responses to these fictional situations. No real chat history or family disclosure is needed.",
    "questions": [
      {
        "kind": "choice",
        "prompt": "A teenager briefly uses an eligible, permitted role-play tool to rehearse a presentation. They can stop easily and report no concern. How should the response differ from Alex’s disrupted-sleep case?",
        "options": [
          "Treat the two situations as identical and assume emotional dependence.",
          "Treat every reply from the tool as professional advice because the activity seems useful.",
          "Ask what the practice helped with, check the relevant permission and maintain proportionate boundaries without inventing a problem."
        ],
        "correct": 2,
        "explanation": "Purpose, effects and context matter. You can check what was learnt and keep sensible boundaries without diagnosing harm. Helpful rehearsal does not make the tool a professional adviser."
      },
      {
        "kind": "select",
        "prompt": "A teenager says a bot understands them and asks them not to leave. Which responses are useful? Select all that apply.",
        "options": [
          "Tell them they are foolish for feeling attached.",
          "Acknowledge that the feeling of comfort can be real.",
          "Explain that generated caring language does not make the bot responsible for their wellbeing.",
          "Promise never to involve another person, even if someone may be unsafe.",
          "Ask about effects on sleep or relationships and identify a trusted human support route."
        ],
        "correct": [
          1,
          2,
          4
        ],
        "explanation": "Take the person’s experience seriously, explain the tool’s limits and keep human help available. Shame can close the conversation; an absolute secrecy promise can obstruct necessary support."
      },
      {
        "kind": "choice",
        "prompt": "In England, a young person is in immediate danger and you cannot keep them safe. Which response fits the help guidance in this lesson?",
        "options": [
          "Wait for the chatbot to finish assessing the situation.",
          "Call 999 or go to A&E; do not rely on a bot to arrange emergency care.",
          "Leave it until the family’s scheduled review at the weekend."
        ],
        "correct": 1,
        "explanation": "Immediate danger requires urgent human help. The ordinary review routine is for non-urgent concerns. Elsewhere use the relevant local emergency service."
      }
    ]
  }
},
{
  "id": 314,
  "n": 14,
  "title": "Your child’s future: skills, access and independence",
  "minutes": 20,
  "goal": "Evaluate a career claim and support useful skills without hype or deficit assumptions.",
  "desc": "Move from alarming predictions to a realistic opportunity that builds knowledge, judgement and confidence.",
  "slides": [
    {
      "type": "hook",
      "title": "Does a prediction deserve to decide a subject choice?",
      "body": "A fictional advert says: “AI will replace every designer by 2030. Book our course now to protect your child’s future.” Your child enjoys art and design. Should that advert change their plans?<br><br>This lesson will help you test a career claim and choose a useful next step. You do not need to predict the future or buy a course. You will test a fictional claim, compare two supplied notices and explore a small learning opportunity that fits different access needs.",
      "callout": "Human judgement first: ask what the evidence supports before letting a confident forecast narrow someone’s choices."
    },
    {
      "type": "concept",
      "title": "A task is not a whole job",
      "body": "A job usually combines many tasks, responsibilities and relationships. Producing an image is one activity. Understanding a client’s needs, checking whether a design works, explaining choices, meeting access requirements and taking responsibility for the result are others.<br><br>A demonstration that a tool can complete one task does not establish that every job containing that task will disappear. Nor does it establish that nothing will change. Ask which activity is affected, in what setting, with what quality checks and over what timescale. That produces a more useful conversation than either panic or dismissal."
    },
    {
      "type": "concept",
      "title": "Five checks for a career claim",
      "body": "Treat a prediction as something to examine, not a fact about your child. A confident date or large percentage can make a claim sound more precise than its evidence.",
      "bullets": [
        {
          "term": "Source",
          "def": "Who produced the claim, and can you inspect the original evidence?"
        },
        {
          "term": "Scope",
          "def": "Is it about a task, an occupation, one country or an entire economy?"
        },
        {
          "term": "Measure",
          "def": "Does it describe technical capability, employer plans, current employment or a forecast?"
        },
        {
          "term": "Uncertainty",
          "def": "What assumptions and limits are stated? What would change the conclusion?"
        },
        {
          "term": "Interest",
          "def": "Is someone selling a product or asking for an urgent decision? That does not prove the claim false, but it matters."
        }
      ],
      "callout": "“We do not have enough evidence for that conclusion” is a useful answer."
    },
    {
      "type": "parent-interaction",
      "title": "Test the career claim",
      "question": {
        "kind": "choice",
        "prompt": "A fictional software company tested its image tool on 20 short briefs. Reviewers liked 12 generated images. It did not study employment, client relationships, accessibility testing or future hiring. Which conclusion is supported?",
        "options": [
          "Reviewers liked some images in this small test; it does not establish a forecast about all design jobs.",
          "Every designer will lose their job by 2030.",
          "AI will never change any part of design work."
        ],
        "correct": 0,
        "explanation": "The evidence concerns images and reviewer preferences, not employment. A useful next question is which tasks are changing in real workplaces and what knowledge, relationships and judgement remain necessary."
      }
    },
    {
      "type": "concept",
      "title": "Build something you can explain",
      "body": "A useful learning opportunity combines knowledge, a decision and a reason. Try these two <strong>fictional notices for the same event</strong>.<br><br><strong>A:</strong> “The future of repair is here! Join our amazing workshop on Saturday. All welcome. Scan to find out more.”<br><br><strong>B:</strong> “Repair café, Saturday 6 June, 10 am–noon, Workshop B. Entry is free. Bring a torn pencil case or watch a demonstration; no electrical repairs. Loan tools are available. Ask the club organiser at the school desk about joining or access.”<br><br>B gives someone enough information to begin deciding whether to attend. A may sound exciting, but hides essential details behind a scan. Improving A requires a judgement about what the reader needs; producing more enthusiastic adjectives would not solve that problem.",
      "callout": "The skill is making and explaining a design choice. Reading aloud or using print can preserve that thinking; a paid image tool is not required."
    },
    {
      "type": "scenario",
      "title": "Keep the goal. Change the route.",
      "situation": "A fictional pupil wants to compare two community notices. Reading dense text is tiring, and the family shares one device. The goal is to judge whether each notice communicates the event clearly.",
      "question": "Which adaptation keeps the intellectual task available?",
      "choices": [
        {
          "text": "Give the pupil a prewritten judgement to submit.",
          "outcome": "This removes the decision the pupil is meant to practise. Support access to the notices instead, while leaving the comparison and explanation with the learner."
        },
        {
          "text": "Provide printed notices with clear spacing, allow agreed read-aloud or text-to-speech support, and let the pupil explain their judgement aloud.",
          "outcome": "This preserves the central task: judging communication. The format changes to reduce barriers. For schoolwork or assessment, check the actual task requirements and agreed access arrangements with the teacher or SENCO."
        },
        {
          "text": "Require the same app and writing format for everyone because that is equal treatment.",
          "outcome": "An identical route can create unequal access. Check which features are necessary to the learning goal and which can reasonably vary."
        }
      ]
    },
    {
      "type": "concept",
      "title": "Independence does not mean removing support",
      "body": "An independent decision can be expressed through speech, typing, a diagram or another agreed method. Text-to-speech, accessible formatting or support with organisation may help someone show what they understand. Do not remove approved assistive technology to make a task look more independent.<br><br>The key question is what the learner is being asked to do. If the goal is comparing evidence, accessible reading support may preserve it. If the goal is practising a specific reading skill, the teacher may choose different support. Ask about the task and agreed arrangements; no diagnosis or private document needs to be uploaded to this course.",
      "sources": [
        {
          "label": "UNICEF: inclusion and accessibility in child-centred AI",
          "url": "https://www.unicef.org/innocenti/reports/policy-guidance-ai-children"
        },
        {
          "label": "CAST: access to materials and assistive technologies",
          "url": "https://udlguidelines.cast.org/action-expression/interaction/assistive-technologies/"
        }
      ],
      "callout": "For school tasks, local instructions and agreed support arrangements take priority over a generic example."
    },
    {
      "type": "parent-interaction",
      "title": "Which change helps the reader act?",
      "question": {
        "kind": "choice",
        "prompt": "Notice A says: “Join our amazing workshop on Saturday. Scan to find out more.” Notice B supplies: Repair café, Saturday 6 June, 10 am–noon, Workshop B; free entry; torn pencil cases or demonstrations, no electrical repairs. Which change to A best improves useful information without inventing a fact?",
        "options": [
          "“Join the most advanced AI workshop in the country.”",
          "“Bring any broken device for a guaranteed free repair.”",
          "“Join us in Workshop B on Saturday 6 June, 10 am–noon; entry is free.”"
        ],
        "correct": 2,
        "explanation": "The version stating Workshop B, the date, the time and free entry makes essential details visible using the supplied facts. It helps someone decide whether to attend. A learner can practise this judgement using print, speech or agreed access support; buying a tool is not the learning goal."
      }
    },
    {
      "type": "concept",
      "title": "Connect a small project to a real next step",
      "body": "A tiny design task does not settle a career choice. It can reveal an interest worth exploring: organising information, solving a practical problem or explaining choices. A parent might say, “You noticed what the reader needed. Would you like to try another small design problem or ask someone what that work involves?”<br><br>For a real subject or career decision, compare current role descriptions and entry routes and speak to a school careers adviser. The National Careers Service’s profiles are a starting point, not a guarantee of future employment. No assessment, purchase or personal disclosure is needed here.<br><br>For real Haileybury schoolwork, use approved tools and accounts within the teacher’s instructions; a career trend does not override those rules. Lower School use requires explicit school instruction. Removes to Upper Sixth general study support remains subject to age limits and teacher direction. Preserve agreed access support.",
      "sources": [
        {
          "label": "National Careers Service: explore careers",
          "url": "https://nationalcareers.service.gov.uk/explore-careers"
        },
        {
          "label": "Haileybury AI Parent Guide, updated 4 November 2026; current full policy available through the School Portal"
        }
      ],
      "callout": "Choose one useful exploration, then ask what the learner can now explain. Do not turn a prediction into pressure to buy a course."
    },
    {
      "type": "quiz",
      "question": "A tool performs one part of a job well in a demonstration. What can you reasonably conclude?",
      "options": [
        "Every job containing that task will disappear on a predictable date.",
        "That capability may affect the task, but employment conclusions need further evidence about real work and context.",
        "The demonstration tells us nothing worth considering."
      ],
      "correct": 1,
      "explanation": "A task demonstration is relevant but limited evidence. Investigate the other responsibilities, adoption, quality and context before drawing conclusions about occupations or advising a child’s choices.",
      "title": "Check your understanding"
    },
    {
      "type": "summary",
      "title": "Replace pressure with a useful next step",
      "points": [
        {
          "label": "Check the claim",
          "text": "Separate tasks, current evidence and forecasts."
        },
        {
          "label": "Keep learning broad",
          "text": "Knowledge, explanation, creativity and judgement can be practised through many routes."
        },
        {
          "label": "Remove access barriers",
          "text": "Keep the goal while adapting materials and response formats appropriately."
        },
        {
          "label": "Make it manageable",
          "text": "Try one small activity, inspect what was learned and decide what to explore next."
        }
      ]
    }
  ],
  "completion": {
    "intro": "Check your judgement about a career claim, an accessible learning opportunity and school permission. Choose on screen; no project plan is required.",
    "questions": [
      {
        "kind": "choice",
        "prompt": "An advert guarantees employment after an expensive prompt-writing certificate. Your teenager enjoys design. What is a useful next step?",
        "options": [
          "Inspect the claim’s evidence and current entry routes, consult careers advice and explore a small design task without treating the guarantee as fact.",
          "Buy immediately so they do not fall behind.",
          "Tell them that enjoying design is irrelevant to every future job."
        ],
        "correct": 0,
        "explanation": "A guarantee needs evidence; it is not established by a confident advert. Current role information and a small exploration can support a decision without panic or an urgent purchase."
      },
      {
        "kind": "select",
        "prompt": "The learning goal is to judge which club notice communicates clearly. Which choices preserve that goal? Select all that apply.",
        "options": [
          "Let the learner choose a clearer version and explain why.",
          "Supply a prewritten judgement for the learner to copy as their own.",
          "Ask what the reader can now decide after an improvement.",
          "Require a paid AI image tool regardless of whether it helps the task.",
          "Offer readable printed notices or agreed read-aloud support."
        ],
        "correct": [
          0,
          2,
          4
        ],
        "explanation": "Access support can preserve the intellectual work. Choosing, explaining and inspecting the effect make the learning visible. Copying a judgement removes that work; a paid tool is not inherently necessary."
      },
      {
        "kind": "choice",
        "prompt": "A Haileybury Lower School pupil wants to use AI for a school design project because older pupils use it for study. What must happen?",
        "options": [
          "General permission for older pupils automatically applies.",
          "A parent’s personal paid account supplies permission.",
          "The school must explicitly instruct the Lower School use, with approved arrangements and the task’s conditions followed."
        ],
        "correct": 2,
        "explanation": "The November guide distinguishes Lower School explicit instruction from Removes–Upper Sixth general study support, which itself remains subject to age limits and teacher direction. A parent account does not replace the school-approved route."
      }
    ]
  }
},
{
  "id": 315,
  "n": 15,
  "title": "Build your family AI playbook",
  "minutes": 20,
  "goal": "Use a practical family AI playbook to make decisions about learning, permission, privacy and human support.",
  "desc": "Choose useful habits, test them against fresh situations and decide one small change to try. Everything happens on screen.",
  "slides": [
    {
      "type": "hook",
      "title": "What will you actually do differently?",
      "body": "You have explored AI, checked its work and practised useful support. This final lesson brings those decisions into a short playbook you can read and use here.<br><br>You will choose actions for unfamiliar situations and think about one useful habit to try. There is nothing to write, upload or submit. A real conversation with a child is optional, and every course example is fictional.<br><br>Keep returning to a simple question: what should happen next, and why? That is more useful than trying to remember a perfect answer to every possible situation.",
      "callout": "Allow about 20 minutes. Read the on-screen playbook, choose responses to the cases and complete three final checks. No notes or family participation are needed."
    },
    {
      "type": "concept",
      "title": "Four principles; practical decisions",
      "body": "These principles come from the Haileybury AI Parent Guide. They work together: a useful learning activity still needs privacy and appropriate permission.",
      "bullets": [
        {
          "term": "Human judgement first",
          "def": "Check the important claim and take responsibility for the final decision."
        },
        {
          "term": "Don’t steal the struggle",
          "def": "Keep the thinking that serves the learning goal with the pupil, while preserving appropriate support."
        },
        {
          "term": "Transparent by default",
          "def": "Explain what AI contributed and follow the task’s actual acknowledgement requirements."
        },
        {
          "term": "Dignity and care",
          "def": "Consider people’s privacy, access, wellbeing and relationships."
        }
      ],
      "callout": "Haileybury: Lower School use requires explicit school instruction; Removes to Upper Sixth general study support is subject to age limits and teacher direction. For assessed work, follow No AI, AI for planning or Full use of AI as set by the teacher. Only expressly permitted AI-generated material may be submitted; GCSE, A-level and IB rules take precedence.",
      "sources": [
        {
          "label": "Haileybury AI Parent Guide, updated 4 November 2026; current full policy available through the School Portal"
        }
      ]
    },
    {
      "type": "concept",
      "title": "A short worked playbook",
      "body": "<strong>Purpose:</strong> use permitted AI for a useful learning task; use paper or discussion when simpler.<br><strong>Learning:</strong> try first, use permitted help, then explain a new example with agreed access support.<br><strong>Permission:</strong> check year-group, tool/account and task rules; ask the teacher when unclear. Qualification rules take precedence.<br><strong>Honesty:</strong> explain AI help and keep any required records; credit does not create permission.<br><strong>Privacy:</strong> keep sensitive information out and check rights before uploading.<br><strong>Verify:</strong> inspect important sources; confirm unusual requests through known contacts.<br><strong>People:</strong> ask about the effect on sleep and relationships; identify trusted human support.<br><strong>Review:</strong> try one routine this week and discuss what helped on Sunday.",
      "callout": "This playbook gives you decisions to use, not a policy to write. It cannot override the school’s instructions or qualification rules."
    },
    {
      "type": "parent-interaction",
      "title": "Choose the learning habits worth keeping",
      "question": {
        "kind": "select",
        "prompt": "Which habits belong in a useful family AI playbook? Select all that apply.",
        "options": [
          "Keep the learner’s thinking and agreed access support, then check understanding with a fresh example.",
          "Assume adding an AI credit makes any help permissible.",
          "Explain AI’s actual contribution and keep any records the task requires.",
          "Treat a paid personal account as a substitute for Haileybury’s approved school arrangements.",
          "Check the purpose and task permission before involving an AI tool."
        ],
        "correct": [
          0,
          2,
          4
        ],
        "explanation": "Purpose and permission come first. Useful help leaves meaningful thinking with the learner, while agreed support remains available. Honesty matters, but credit does not create permission; a personal subscription does not override the school route."
      }
    },
    {
      "type": "parent-interaction",
      "title": "Choose the habits that protect people",
      "question": {
        "kind": "select",
        "prompt": "Which habits should sit alongside learning and permission? Select all that apply.",
        "options": [
          "Rely on a caring chatbot reply to decide whether urgent human help is needed.",
          "Notice effects on sleep and relationships, agree a manageable change and review it.",
          "Connect private email by default because personalisation must improve learning.",
          "Keep sensitive information out of practice prompts and check rights and access before uploading.",
          "Verify urgent requests using a known contact route separate from the message."
        ],
        "correct": [
          1,
          3,
          4
        ],
        "explanation": "Privacy needs an intentional information and access decision. Independent verification tests a request. Human support and a review make boundaries usable. Neither a friendly reply nor a personalisation promise settles those decisions."
      }
    },
    {
      "type": "parent-interaction",
      "title": "Case one: the impressive translation",
      "question": {
        "kind": "choice",
        "prompt": "A seventeen-year-old wants to upload an assessed modern-language draft and submit an AI-improved translation. The task says “independent written response” but gives no explicit AI permission. They offer to add a credit. What should happen next?",
        "options": [
          "Pause and ask the teacher what support is permitted for this assessment before uploading or rewriting.",
          "Upload it, then ask the teacher after seeing whether it improves the answer.",
          "Allow it because the pupil is old enough to use the product."
        ],
        "correct": 0,
        "explanation": "Age eligibility and credit do not establish assessment permission. Clarify the permitted contribution and account before using the tool. An AI translation does not by itself demonstrate the pupil’s language skill. Preserve any agreed support under the actual assessment rules."
      }
    },
    {
      "type": "parent-interaction",
      "title": "Case two: a brilliant plan with hidden assumptions",
      "question": {
        "kind": "select",
        "prompt": "An AI revision plan prescribes two hours on a paid app nightly, assumes a private laptop and tells a pupil with reading difficulties to choose easier subjects. The pupil has a shared device and agreed reading support. Which changes are justified? Select all that apply.",
        "options": [
          "Keep agreed support and check whether the learner can explain a fresh example afterwards.",
          "Accept the plan’s length because more screen time always means more learning.",
          "Reject the unsupported judgement about subject choices.",
          "Fit manageable practice around the actual timetable and available school materials or shared device.",
          "Remove approved reading support to make revision independent."
        ],
        "correct": [
          0,
          2,
          3
        ],
        "explanation": "The advice makes an unjustified assumption about ability and ignores time, cost and access. Preserve the learning goal and agreed support. A later explanation or fresh example is more informative than time spent on the app alone."
      }
    },
    {
      "type": "parent-interaction",
      "title": "Case three: the emergency fundraiser",
      "question": {
        "kind": "choice",
        "prompt": "A club message uses an audio clip that sounds like the organiser, asks for immediate donations through a new link and includes a pupil’s private details. What is the best response?",
        "options": [
          "Forward it so other parents can decide whether it sounds genuine.",
          "Pause payment and forwarding; contact the organiser or school through an established route and avoid spreading the private details.",
          "Pay a small amount first to test the link."
        ],
        "correct": 1,
        "explanation": "A familiar voice does not prove the request. Verify through a separate known route and protect the pupil’s information even if the appeal turns out to be genuine. If a suspicious payment has already been made, contact the bank promptly through its official route."
      }
    },
    {
      "type": "activity",
      "title": "Choose one small change to try",
      "instructions": "Take a quiet moment to choose a habit that would be useful in a fictional household or your own. You do not need to tell the course which one you chose, write it down or involve a child to finish.",
      "steps": [
        "Choose one habit: check permission before schoolwork; check a source before sharing; or ask what the learner worked out for themselves.",
        "Think when it would fit: the next homework question, unfamiliar headline or study conversation.",
        "Choose a sensible review point and what you would notice, such as a clearer explanation or an easier next step."
      ],
      "revealLabel": "See one manageable example",
      "reveal": "“Next time a homework question comes up, we will check what help the task permits before opening a tool. At the weekend, we will ask whether that made the next step clearer.” This is specific enough to try and review. It does not require a new app, a long agreement or a guarantee about grades."
    },
    {
      "type": "quiz",
      "question": "Your playbook says AI can help with planning, but a new assessment’s instructions prohibit AI use. What happens next?",
      "options": [
        "The family agreement gives permission because it was written first.",
        "Use AI without mentioning it, provided the final wording is changed.",
        "Follow the assessment instructions; use only the permitted support and ask the teacher if anything is unclear."
      ],
      "correct": 2,
      "explanation": "The playbook helps you make decisions; it cannot override assessment rules. Changing wording does not remove the original use or make prohibited assistance permissible. Keep the learner’s work within the actual task requirements.",
      "title": "Check your understanding"
    },
    {
      "type": "summary",
      "title": "One conversation. One change. Then review.",
      "points": [
        {
          "label": "Use the playbook",
          "text": "The on-screen principles give you a next step; you do not need to write a policy."
        },
        {
          "label": "Test judgement",
          "text": "Use unfamiliar cases and explain the reasons, not just the preferred answer."
        },
        {
          "label": "Keep the relationship open",
          "text": "Curiosity and clear boundaries make it easier to ask for help."
        },
        {
          "label": "Revisit what changes",
          "text": "Tools, school instructions and family needs can change. Review the plan rather than treating it as permanent."
        },
        {
          "label": "Know what completion means",
          "text": "The course checks your decisions in fictional situations. Completion is not professional accreditation or a guarantee about every future decision."
        }
      ]
    }
  ],
  "completion": {
    "intro": "Apply the playbook to three fresh decisions. Choose on screen and use the explanations if you need another attempt.",
    "questions": [
      {
        "kind": "select",
        "prompt": "A fictional new feature offers to read all connected email to personalise revision. Which decisions should come before trying it? Select all that apply.",
        "options": [
          "Upload a pupil report to make the first test more realistic.",
          "Identify the learning purpose and whether a simpler fictional brief would work.",
          "Inspect what information and access the feature requests and whose messages would be involved.",
          "Assume school approval for another feature covers this connection automatically.",
          "Check the relevant account, school permission and data terms rather than connecting private email by default."
        ],
        "correct": [
          1,
          2,
          4
        ],
        "explanation": "Personalisation does not remove privacy, account or permission decisions. A fictional brief can often test the useful skill without exposing correspondence or pupil information. Approval for one use does not automatically cover every new feature."
      },
      {
        "kind": "choice",
        "prompt": "A Haileybury task is marked “Full use of AI”. A pupil says this means any generated content can be submitted without explaining it. Which response matches the parent guide?",
        "options": [
          "Check the teacher’s directions: the pupil must demonstrate understanding and acknowledge AI, only expressly permitted material may be submitted, and qualification rules take precedence.",
          "Agree; full use removes the need for judgement or acknowledgement.",
          "Treat full use as a ban on all AI regardless of the task directions."
        ],
        "correct": 0,
        "explanation": "The label permits use throughout as directed by the teacher. It does not cancel understanding, acknowledgement, explicit submission permission or GCSE, A-level and IB requirements."
      },
      {
        "kind": "order",
        "prompt": "A permitted AI study explanation seems helpful. Arrange this learning routine while keeping the same agreed access support throughout.",
        "options": [
          "Check the learner’s fresh attempt against a reliable source and choose what to revisit.",
          "Identify the task’s learning goal and what help is permitted.",
          "Try the task, then inspect limited AI help if needed.",
          "Attempt a new example without the generated solution."
        ],
        "correct": [
          1,
          2,
          3,
          0
        ],
        "explanation": "Know the purpose and permission first. Attempt and inspect the help, then try a fresh example and use a reliable check to decide what needs more practice. Support for access stays in place; the learner does the relevant thinking."
      }
    ]
  }
}
);
