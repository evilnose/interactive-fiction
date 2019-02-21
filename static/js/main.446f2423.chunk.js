(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,o){},13:function(e,t,o){e.exports=o(24)},19:function(e,t,o){},24:function(e,t,o){"use strict";o.r(t);var r=o(0),n=o.n(r),i=o(12),a=o.n(i),s=(o(19),o(3)),h=o(4),l=o(8),u=o(6),d=o(9),c=function(){function e(t){Object(s.a)(this,e),this.sceneText="",this.choices=[],this.oldText=[],this.changeTitleFn=t,this._entry()}return Object(h.a)(e,[{key:"clear",value:function(){this.oldText.push(this.sceneText),this.sceneText="",this.choices=[]}},{key:"title",value:function(e){this.sceneTitle=e,this.changeTitleFn(e)}},{key:"text",value:function(e){this.sceneText+=e}},{key:"allow",value:function(e,t,o){var r=this;this.choices.push({handler:function(){o||r.clear(),e.call(r)},text:t})}},{key:"_restart",value:function(){this.clear(),this.oldText=[],this.lookedAtMirror=!1,this.ropesCast=!1,this.bookRead=!1,this.noteRead=!1,this.curtainsOpened=!1,this.touchDiscovered=!1,this.suicideAttempted=!1,this.relocated=!1,this.dumbleMet=!1,this.drawWandTooLate=!1,this.glovesRemoved=!1,this.beenToDark=!1,this.beenToOffice=!1,this.defied=!1,this._entry()}},{key:"_entry",value:function(){this.title("Diagon Alley"),this.text("\n        You walk along the bustling Diagon Alley. This is not your first time here, but due to the current\n        circumstances, you can't help but be nervous. Why? Someone is after you, but you cannot remember who.\n        <br/><br/>\n        Your eyes meet the dark windows of the Leaky Cauldron. You suddenly feel very thirsty.\n        "),this.allow(this._walkAlong,"Walk along. It is too risky to stay."),this.allow(this._getDrink,"Go inside the Leaky Cauldron. You need a drink.")}},{key:"_walkAlong",value:function(){this.title("Diagon Alley"),this.text("\n        A voice at the back of your head tells you that you deserve some rest, and that you should be\n        expecting a certain someone. You nod in agreement, though you have no idea who that someone is.\n        "),this.allow(this._getDrink,"You turn and walk into the pub."),this.allow(this._getDrink,"You can't help but turn and walk into the pub.")}},{key:"_getDrink",value:function(){this.title("The Leaky Cauldron"),this.text("\n        You are inside the Leaky Cauldron. The light is dim in here, and people are chattering. Nobody seems to notice\n        you.\n        <br/><br/>\n        You walk up to the old bartender.        \n        "),this.allow(this._order.bind(this,"beer"),"Order beer"),this.allow(this._order.bind(this,"cola"),"Order Coca-Cola"),this.allow(this._order.bind(this,"Sherry"),"Order Sherry"),this.allow(this._order.bind(this,"milk"),"Order warm milk")}},{key:"_order",value:function(e){var t;switch(e){case"cola":t='"...What?" The bartender does not seem to understand your request.';break;case"milk":t="The bartender is a bit surprised by your request. But after a while, he hands you a warm glass\n                    of milk. You remove your gloves as you drink it and feel warmer.\n                ",this.glovesRemoved=!0;break;default:t="The bartender hands you a glass of ".concat(e,". You take a few gulps and are no longer thirsty.")}this.text("\n        ".concat(t,"\n        <br/>You suddenly hear a commotion behind you.\n        ")),this.allow(this._ignoreCommotion,"Ignore"),this.allow(this._investigateCommotion,"Investigate")}},{key:"_investigateCommotion",value:function(){this.text("\n        Against your better judgements, you walk toward the source of the commotion, where a small\n        crowd has already gathered. You raise your head and see a giant of a man who you recognize as Hagrid.\n        You look down and see a boy with a lightning-shaped scar on his forehead... Harry Potter! You \n        involuntarily recoil in fear.\n        <br/><br/>\n        But everyone is distracted. This is a great opportunity.\n        "),this.allow(this._fleeFromPotter,"Flee"),this.allow(this._greetPotter,"Greet Potter"),this.allow(this._drawWand,"Draw wand")}},{key:"_ignoreCommotion",value:function(){this.text("\n        You sit still. But soon your ears catch a name -- but it can't be... You turn around and see him, the\n        Boy Who Lived. You shiver.\n        <br/><br/>\n        You need to make a choice.\n        "),this.allow(this._fleeFromPotter,"Flee"),this.allow(this._greetPotter,"Greet Potter"),this.allow(this._drawWand,"Draw wand")}},{key:"_fleeFromPotter",value:function(){this.text('\n        You haste to leave as fast as possible. But Hagrid catches you. Curse that giant halfwit! Should have finished\n        the job years before.\n        <br/><br/>\n        "Professor Quirrell!" Hagrid says. "Harry, Professor Quirrell will be one of your teachers at Hogwarts."\n        '),this._greetPotter()}},{key:"_greetPotter",value:function(){this.text("\n           You stutter to tell Potter how pleased you are to meet him. Potter asks you a few questions, and you make\n           up a reason for why you are here.\n           <br/><br/>\n           Something in the back of your head tells you that this is an opportunity you cannot afford to lose.\n        "),this.drawWandTooLate=!0,this.allow(this._shakeHands,"Shake hands"),this.allow(this._drawWand,"Draw wand")}},{key:"_drawWand",value:function(){this.drawWandTooLate?(this.text("\n            But it is too late. Guests rush around you to greet Potter and your wand is knocked out of\n            your hand. You pick up your wand, but Potter is already surrounded by people. You think to yourself\n            that you should have decided sooner.\n            <br/><br/>\n            "),this._fleeForReal()):(this.title("Ending #1"),this.text('\n                You draw out your wand, and a frenzy of thoughts assault you. You want to back down, but it is too late.\n                Voldemort\'s will completely overcomes yours. You raise your wand.\n                <br/><br/>\n                A raspy voice shouts out "Avada Kedavra!". A green light emerges from the tip of\n                your wand and connects with Potter. He drops to the ground and dies with his eyes open.\n                <br/><br/>\n                You are quickly subdued by the crowd. Though you are sentenced\n                to die months later, your destiny has been fulfilled. Doom and despair descends upon the wizarding world.\n                <br/><br/>\n                But does it really matter? You rot six feet below the ground.\n            '),this.allow(this._restart,"Restart"))}},{key:"_shakeHands",value:function(){this.text("You take a step forward to shake Potter's hand.<br/><br/>"),this.glovesRemoved?(this.touchDiscovered=!0,this.text("\n                To your horror, you feel as if your flesh on your hands is melted away as you touch Potter's\n                hands. You shriek and jump back.\n                <br/><br/>\n                Potter and Hagrid are startled, but they are soon overwhelmed by the people swarming to greet them.\n                As people rush over you, you see smoke rising from your right hand. You quickly put on your gloves,\n                and the pain subsides slightly.\n            ")):this.text("\n            You are soon pushed out of the way by enthusiastic drinkers who want to meet Potter.\n            "),this.text("<br/><br/>"),this._fleeForReal()}},{key:"_fleeForReal",value:function(){this.title("Diagon Alley"),this.text("You walk out of the Leaky Cauldron and regain your breath. You quickly exit the area."),this.allow(this._theOffice,"Continue")}},{key:"_theOffice",value:function(){var e=this;this.title("Professor Quirrell's office"),this.beenToOffice||(this.beenToOffice=!0,this.text("<strong>A few weeks later later...</strong>"),this.touchDiscovered&&this.text("<br/>The blisters on your hands have left a scar."),this.text("<br/><br/>")),this.curtainsOpened?this.text("\n                You are inside a brightly lit office. Books are scattered across the desk and on the ground. Everything\n                is a mess.\n            "):this.text("\n                You are sitting in a dark room, in front of a large desk. You can barely see books scattered across the desk.\n                \n                Today is a big day... for something. You fail to remember, as the presence\n                that grows at the back of your head seems to confuse your mind.\n            "),this.allow(function(){e.curtainsOpened?e.bookRead?e.text("<br/><br/> The room is very messy."):(e.text("<br/><br/> The only thing of note is a large, dirty book sticking out of the bookshelf."),e.allow(e._takeBook,"Take book")):e.text("<br/><br/> You cannot see anything besides your desk, as it is too dark.")},"Look around",!0),this.allow(this._exitOffice,"Exit office"),this.curtainsOpened||this.allow(this._openCurtains,"Open curtains")}},{key:"_openCurtains",value:function(){this.title("Professor Quirrell's office"),this.curtainsOpened=!0,this.text("\n        Sunlight pours into the room. Outside, you see students walking in groups and holding small flags of their\n        houses. You remember now -- it is Quidditch day, and you have a task to perform.\n        <br/><br/>\n        "),this._theOffice()}},{key:"_takeBook",value:function(){this.text("You take the book. The cover reads <i>Deliciously Insidious Spells to use for Covert Purposes</i>.\n            A dirty yellow bookmark sticks out of the pages.\n        "),this.allow(this._readBook,"Read book"),this.allow(this._exitOffice,"Exit office")}},{key:"_readBook",value:function(){this.bookRead=!0,this.text('\n        You flip the book to the location of the bookmark and read it. The page seems to be dedicated to incantations\n        that make magical appliances, such as broomsticks, go out of control.\n        <br/><br/>"Yes. I almost forgot..." The Dark Lord whispers from behind your head.\n        <br/><br/>You memorize the spell again and close the book.\n        '),this.allow(this._exitOffice,"Exit office")}},{key:"_exitOffice",value:function(){this.title("Offices hallway"),this.text("\n        You are inside a dark hallway that runs North-South. Around you are a few offices, all of which are locked\n        except yours.\n        <br/><br/>To the West is your office.\n        <br/><br/>You see some light to the North.\n        "),this.allow(this._roundJunction,"Go North"),this.allow(this._theOffice,"Go West"),this.allow(this._nextToMirror,"Go South")}},{key:"_roundJunction",value:function(){this.title("Round Junction"),this.text("\n            You are at a round junction, ornately decorated.\n            <br/><br/>To the North is an exit of the castle.\n            <br/><br/>A set of stairs leads upward to the West.\n            <br/><br/>To the East is a dark hallway leading god knows where. You seem to see a glint in the dark.\n        "),this.allow(this._darkHallway,"Go East"),this.allow(this._exitOffice,"Go South"),this.allow(this._tower,"Go West"),this.allow(this._pathToQuidditch,"Go North")}},{key:"_darkHallway",value:function(){this.title("Dark Hallway"),this.beenToDark?(this.text("A brick wall stands in front of you. There is nowhere to go but West."),this.allow(this._roundJunction,"Go West")):(this.beenToDark=!0,this.text("\n            As the light behind you fades away, you seem to feel a bit numb. You hear footsteps hurrying away from\n            you into the dark. There is a piece of paper on the ground.\n            "),this.allow(this._readNote,"Read paper"),this.allow(this._roundJunction,"Go West"),this.allow(this._meetDumbledore,"Go East"))}},{key:"_readNote",value:function(){this.noteRead?this.text("\n            A piece of paper lies on the ground, but you do not wish to pick it up.\n            <br/><br/>\n            There is light to the West.\n            <br/><br/>\n            To the East, you cannot see anything.\n            "):(this.noteRead=!0,this.text("\n            In the dark, you barely make out the words on the pristine white paper.<br/><br/>\n            It reads:\n            <h2>Human Observation Ground With Artificially Reproduced Tests, a Simulation</h2>\n            <h3>Dumbledore, Albus. Ph.D.</h3>\n            <h3>September 2033</h3>\n            <p>\n            The simulation had been going smoothly since the opening feast. I do, however, project that the \n            graphical rendering unit to sustain moderate to major strain when Quidditch season begins, as it does\n            require the machine to render up to thousands of living entities. For this reason, I have rented a few\n            stand-by units, graphical and arithmetic (for the AI), from AWS. Adam has also been doing a great job\n            monitoring the activities of the Trojan-inspired virus we so lovingly call Vo...\n            </p>\n            At this point your head starts hurting unbearably, and you drop the paper.\n            <br/><br/>\n            There is light to the West.\n            <br/><br/>\n            To the East, you cannot see anything.\n         ")),this.allow(this._readNote,"Read Note"),this.allow(this._meetDumbledore,"Go East"),this.allow(this._roundJunction,"Go West")}},{key:"_meetDumbledore",value:function(){this.noteRead?(this.dumbleMet=!0,this.text('\n                A face emerges from the dark. It is Albus Dumbledore. You stare at him, unable to move. He smiles\n                and says: "He has corrupted too many of your core files. The only way out now is a clean re-install."\n                Without casting a spell, he vanishes.\n                <br/><br/>\n                You blink, and the dark hallway in front of you turns to a brick wall.\n        ')):(this.text('\n            There is nothing beyond the dark hallway. Nevertheless, you try to move East. You are suddenly transported\n            back.\n            <br/>\n            <h4 style="background-color: black; color: white;"><code>Read Error</code></h4> a line of white text appears in front of you out of thin air.\n            '),this.allow(this._meetDumbledore,"Go East")),this.allow(this._readNote,"Read Note"),this.allow(this._roundJunction,"Go West")}},{key:"_tower",value:function(){var e=this;this.title("Hanging Walkway"),this.suicideAttempted=!0,this.text("\n        You are now high above the ground on an outdoors walkway. To the West is a locked door of a tower.\n        To the East is a stairway leading down.\n         "),this.allow(function(){e.text("The door is locked!<br/><br/>"),e._tower()},"Go West"),this.allow(this._roundJunction,"Go East"),this.allow(this._jumpDown,"Go North")}},{key:"_jumpDown",value:function(){var e=this;this.text('\n            You peer down onto the ground from the walkway, a thirty feet drop.\n           "What are you trying to do?" the voice questions you from the back of your head. "You know that I could see\n           all your intents, and that I would never let you die, right?"\n           <br/>\n           The voice says again: "Get the stone, Quirrell. This will not happen a second time."\n           <br/><br/> \n           You involuntarily take a step back.\n        '),this.allow(function(){e.text("The door is locked!<br/><br/>"),e._tower()},"Go West"),this.allow(this._roundJunction,"Go East"),this.allow(this._jumpDown,"Go North")}},{key:"_nextToMirror",value:function(){this.lookedAtMirror?(this.title("Classroom hallway"),this.text("\n                The Mirror of Erised that was previously here is now gone. You suspect that someone is behind this.\n                <br/><br/>\n                To the South are classrooms. However, going there would be going the opposite direction of where\n                you should be going.\n            ")):(this.title("The Mirror of Erised"),this.text("\n            Astoundingly, a mirror stands in the middle of the hallway. You recognize it as the Mirror of Erised.\n            <br/><br/>\n            There is light to the North.\n            <br/><br/>\n            To the South are classrooms. For some reason, you do not wish to go there.\n        "),this.allow(this._lookAtMirror,"Look at Mirror")),this.allow(this._exitOffice,"Go North")}},{key:"_lookAtMirror",value:function(){this.lookedAtMirror=!0,this.text('\n            "What do you see?" The parasite at the back of your head questions.\n        '),this.allow(this._afterMirror.bind(this,"respect"),'"That I are presenting the Stone to you my Lord, and Harry Potter\n        lies dead beside you."'),this.allow(this._afterMirror.bind(this,"defy"),'"That I am being presented an award for defeating you, my lord."'),this.allow(this._afterMirror.bind(this,"flatter"),'"That you rule over the world, master, and millions,\n        nay, billions of people kneel before you, master. And of course you sit on a golden throne."'),this.allow(this._afterMirror.bind(this,"humor"),'\n        "That, erm... , that I am enjoying a bucket of chicken wings. I do very much enjoy chicken wings my Lord."\n        '),this.dumbleMet&&this.allow(this._afterMirror.bind(this,"code"),"\n            \"A series of words, my lord: 'Buffer Overflow' I know not what that means.\"\n            ")}},{key:"_afterMirror",value:function(e){var t=this;switch(e){case"respect":this.text('"Good, good." the Dark Lord replies. "I am glad with your faith, Quirrell."');break;case"flatter":this.text('"You overdid it, Quirrell. Shut up and get a move on." the Dark Lord says angrily, albeit feebly.');break;case"humor":this.text("The Dark Lord sighs. He seems to be a little fazed."),this.allow(function(){t.text('"Please, Quirrell." The Dark Lord sighs again in defeat. "Just go."'),t.allow(t._roundJunction,"Go North")},"I'm sorry, my lord. Are you a vegan? I never asked...");break;case"defy":this.defied=!0,this.text('\n                "You dare defy me, Quirrell?" The Dark Lord raises his voice. You feel a great deal of pain and drop \n                down onto the ground.\n                <br/><br/>\n                A while later, you wake up in the same place as before. Cold and shivering. The Mirror is now gone.\n                ');break;case"code":this.text('The Dark Lord suddenly jerks in fear. "Leave this forsaken place..." He demands.');break;default:this.text("Oops. Looks like I made an error in my code. I am sorry.")}this.allow(this._roundJunction,"Go North")}},{key:"_pathToQuidditch",value:function(){this.title("Path to Quidditch"),this.text("\n        You are on a North-South path through the grass.<br/><br/>To the North is the Quidditch stadium.\n        <br/><br/>To the South is the castle.\n        "),this.allow(this._stadium,"Go North"),this.allow(this._roundJunction,"Go South")}},{key:"_stadium",value:function(){this.title("Quidditch Stadium"),this.text("You are now at the Quidditch stadium. Hundreds of students have already arrived."),this.allow(this._quidditchStand,"Walk to stand"),this.allow(this._pathToQuidditch,"Go South")}},{key:"_quidditchStand",value:function(){this.title("Quidditch Stand"),this.text('\n                The game has already begun -- it is Slytherin against Gryffindor. You pull down your turban the\n                muffle out the cheers of the crowd around you as you search for Potter.\n                <br/><br/>\n                There! You have found him, hovering high above the other players. "Do it." The voice whispers from\n                behind your head. "Do it now."\n            '),this.allow(this._chant,"Chant curse on Potter"),this.defied&&this.suicideAttempted&&this.bookRead&&this.allow(this._sacrifice,"Chant curse on self"),this.allow(this._refuseToChant,"Refuse to chant"),this.allow(this._relocate,"Relocate elsewhere")}},{key:"_chant",value:function(){this.bookRead?(this.text("\n                You focus your eyes on Potter and start chanting your curse. His broom soon starts to rebel.\n                In a few minutes, the whole crowd has quieted down as Potter's broom starts to lose control.\n                The broom jumps higher and higher and it seems that Potter is about to lose his grip...\n                <br/><br/>\n                "),this.relocated?this.text("\n                And he does. Unfortunately, one of the Weasley twins (you can't tell which) catches Potter on his\n                way down. You concentrate your curse now again to the Weasley's broom...\n                <br/><br/>\n                Your curse, however, is interrupted by a fire. Snape is somehow on fire, and students around him are\n                 running around in hysteria. After you have regained focus, it is already too late. After Potter got\n                 back onto his broom, he soon scored for the Gryffindors by catching the Snith. The game is over.\n                "):this.text("\n                Suddenly, someone runs into you. You recognize the perpetrator as one of your students, Ms. Granger,\n                before you plunge down head-first into the next row.\n                <br/><br/>\n                After you've struggled to get up, it is already too late. The game is over, and Potter stands safely\n                on the ground.\n                "),this.allow(this._finalChapter,"Continue")):(this.text('\n                You lock your eyes onto Potter. You open your mouth to recite the curse but you realize that you have\n                forgotten the spell. You become paralyzed in fear as you recall that you forgot to review it this\n                morning.\n                <br/><br/>\n                "What\'s the matter, Quirrell?" Voldemort demands.\n            '),this.allow(this._wrath.bind(this,"apology"),'"I\'m sorry, my Lord... I have forgotten the curse. I bookmarked it in my\n            textbook but I forgot to review it this morning."\n            '),this.allow(this._wrath.bind(this,"remedy"),'"I\'ve forgotten the curse my Lord. But it is not too late! I\n             will retrieve the book right away."\n            '),this.allow(this._wrath.bind(this,"lie"),"\n            \"No problem, my Lord! Just warming up -- let me see... the curse is 'broomus disruptus...' (lie)\"\n            "))}},{key:"_refuseToChant",value:function(){this.text('\n            "No," you refuse. "I will not murder a young boy just because you are scared of a prophecy."\n            <br/>\n            "Very well." the Dark Lord replies, "Then I will take it from here."\n            <br/>\n            You feel your willpower weaken as the Dark Lord takes gradual control of your mind.\n        '),this.allow(this._chant,"Chant curse on Potter"),this.allow(this._chant,"Chant curse on Potter")}},{key:"_sacrifice",value:function(){this.title("Ending #3"),this.text('\n            You take a deep breath as the Dark Lord urges you on. \n            <br/><br/>\n            "Good, good..." You hear the Dark Lord whisper. "Let the hate flow through you..."\n            <br/><br/>\n            "I will be your servant no longer, master." You speak out loud.\n            A green light flashes as you direct your wand to your chest. Neither you or the Dark Lord\n            had time to shout before life exits your body and you tumble down the stand.\n            <br/><br/>\n            Your act forced Voldemort to find another host while the world is alerted of his presence. The Dark Lord\n            is eventually defeated, with less casualties, thanks to your sacrifice.\n            <br/><br/>\n            Still, some people call you a martyr, while others call you weak. \n        '),this.allow(this._restart,"Restart")}},{key:"_wrath",value:function(e){switch(this.title("Ending #2"),e){case"apology":this.text('\n                "Imbecile!" the Dark Lord curses you from behind. "I have been too lenient with you I see..."\n                ');break;case"remedy":this.text('\n                    "Nonsense!" The Dark Lord retorts. "It is already too late... I should have done this a long time\n                    ago."\n                ');break;case"lie":this.text('The Dark Lord almost chuckles. "Take me as a fool do you..."');break;default:this.text("Oops. Seems like I made a mistake. Sorry.")}this.text("\n            <br/><br/>\n            The Dark Lord has finally had it with you.\n            <br/><br/>\n            You feel as if your body is torn in half as the Dark Lord exits your body. The last thing you see is a\n            trail of black smoke drifting away.\n            <br/><br/>\n            Voldemort finds another host soon later, but he is eventually defeated by Harry Potter and his army.\n        "),this.allow(this._restart,"Restart")}},{key:"_relocate",value:function(){this.relocated=!0,this.text("\n            You move to a higher place in the stands, since you get a eerie feeling that someone will knock you over\n            while you are chanting. You look up again and quickly identify Potter, who is still circling around.\n        "),this.allow(this._chant,"Chant curse on Potter"),this.defied&&this.suicideAttempted&&this.bookRead&&this.allow(this._sacrifice,"Chant curse on self"),this.allow(this._refuseToChant,"refuse to chant")}},{key:"_finalChapter",value:function(){this.title("The Last Chamber"),this.text('\n            Another month has passed.\n            <br/><br/>\n            After weeks and weeks of hard work, you have finally reached the Mirror of Erised, so meticulously \n            protected by the professors, and yet the Dark Lord guided you through the traps. Surprisingly, Potter \n            caught on as well, and he foolishly tried to stop you. You subdued him easily.\n            <br/><br/>\n            You now stare at yourself in the Mirror of Erised. Potter lies next to you, bound by the ropes you casted.\n            <br/><br/>\n            You need to find the Sorcerer\'s Stone, and you know that the Mirror has something to do with it.\n            <br/><br/>\n            "Use the boy... Use the boy..." The Dark Lord whispers.\n        '),this.allow(this._useTheBoy,"Use the boy"),this.allow(this._breakMirror,"Break the Mirror"),this.allow(this._useTheBoy.bind(this,!0),"Kill Potter")}},{key:"_useTheBoy",value:function(e){e&&this.text('\n                The Dark Lord detects your thoughts. "What\'s the matter with you?" Voldemort reproaches. "I need the \n                boy <i>alive</i>."\n                <br/>\n                You have no choice but to comply.\n                <br/><br/>\n            '),this.text('\n            You unwrap the ropes binding Potter and bring him to the Mirror. You ask him what he sees.\n            <br/>\n            "That I have won the House Cup for Gryffindor." The boy replies.\n            <br/>\n            You push him away in frustration, but the Dark Lord demands you to get him back. You are ordered to unwrap\n            your turban and let the Dark Lord speak to Potter. You do so.\n            <br/><br/>\n            As they converse, Potter suddenly springs up and runs for the flame door. "SEIZE HIM!" Voldemort screams.\n        '),this.allow(this._seizeHim,"Seize Potter"),this.touchDiscovered&&this.allow(this._seizeHim.bind(this,!0),"Put on gloves and seize Potter"),this.ropesCast||this.allow(this._castRopes,"Cast ropes",!0),this.allow(this._refuseToSeize,"Refuse")}},{key:"_castRopes",value:function(){this.ropesCast=!0,this.text('<br/>In the heat of the moment, you miss the rope.<br/><br/>"I said, SEIZE HIM, YOU FOOL!" The Dark Lord screams yet again.')}},{key:"_seizeHim",value:function(e){e?(this.text("\n                Remembering the blisters on your hands, you put on your gloves first.\n                <br/><br/>\n                You grab Potter by the neck and brings him to the ground. You hear something heavy hit the ground,\n                and something red and shiny rolls out of Potter's pocket. It is the Sorcerer's Stone.\n                <br/><br/>\n                \"Dumbledore is coming...\" The Dark Lord whispers in your ear.\n            "),this.allow(this._grabStone,"Grab the Stone"),this.allow(this._hide,"Hide"),this.allow(this._imperio,"Cast Imperio on Potter")):(this.title("Ending #4 (Consistent with book)"),this.text('\n                You seize Potter, but your hand immediately starts to blister. You shriek and let go.\n                <br/>\n                You try to seize him again, but you fail as your hands seem to melt away the moment you touch him.\n                <br/>\n                "Kill him, you fool!" Voldemort screeches.\n                <br/>\n                You raise your hand, but before you could cast the deadly curse, Potter lunges toward you and grabs your\n                face.\n                <br/><br/>\n                You fight against the pain and raise your wand again. But Dumbledore arrives just in time, and Voldemort\n                abandons your body. You expire that instant.\n                <br/><br/>\n                What happens later is history (in the particular universe described by J.K. Rowling).\n            '),this.allow(this._restart,"Restart"))}},{key:"_refuseToSeize",value:function(){this.title("Ending #5"),this.text('\n            "I refuse." You say.\n            <br/>\n            "Traitor!" The Dark Lord hisses. Knowing that Dumbledore approaches, he escapes, leaving your body behind.\n            <br/><br/>\n            You die the moment Voldemort exits your body. What happens later is history.\n        '),this.allow(this._restart,"Restart")}},{key:"_breakMirror",value:function(){this.noteRead?(this.title("???"),this.text('\n                The Mirror shatters into a thousand pieces. As the pieces break apart, you see that they start falling\n                more and more slowly to the ground. Your vision begins to get grainy, and you start losing consciousness.\n                The last thing you see is a flashing red text on the top-left corner of your vision which reads:\n                <br/><br/>\n                <code style="color: red;">Warning: dropping below 16 FPS; throttling...</code>\n            ')):(this.title("Ending #6"),this.text('\n                "You fool! What have you done?" The Dark Lord cries in desperation. Knowing that it is impossible now\n                to retrieve the Stone, he escapes, leaving your body behind.\n                <br/><br/>\n                You die the moment Voldemort exits your body. What happens later is history.\n            ')),this.allow(this._restart,"Restart")}},{key:"_grabStone",value:function(){this.title("Ending #7"),this.text("\n            You sit up to grab the Stone, and you successfully do so. However, as you try to stand up, Potter rolls over\n            and grabs your face. Your scream, because your face seems to be melting away like butter.\n            <br/><br/>\n            Dumbledore arrives in time. Voldemort, fearing retribution, flees and leaves your body behind. You die\n            with your hands clutching the Stone. So close...\n        "),this.allow(this._restart,"Restart")}},{key:"_hide",value:function(){this.title("Ending #8"),this.text('\n            You look around and find a pillar. You scurry to hide behind the pillar while you try to figure out what\n            to do.\n            <br/>\n            "Grab the Stone, you moron!" Voldemort hisses. "It was right next to you..."\n            <br/><br/>\n            You hesitate but it is too late. Dumbledore barges in through the flame door. Potter points at your hiding\n            spot. You try to run, but Voldemort is faster. He leaves your body fleeing while you drop to the ground,\n            dead. What happens later is history.\n        '),this.allow(this._restart,"Restart")}},{key:"_imperio",value:function(){this.title("Ending #9"),this.text('\n            "<i>Imperio!</i>" you direct your wand to Potter. He falls under your influence.\n            <br/>\n            "Hand me the Stone." you command Potter. He complies.\n            <br/>\n            "Now, when Dumbledore comes, you will defend me with your life." you direct him again. Potter nods his head.\n            <br/><br/>\n            When Dumbledore arrives, he is greeted by a Potter under your control. In fear of harming Potter, Dumbledore\n            tries to circumvent him in vain. When Dumbledore has broken your spell on Potter, it is too late.\n            <br/><br/>\n            You have "revived" your master, Lord Voldemort while Dumbledore is distracted. Voldemort exits your body\n            and regains a solid form, and you survive thanks to the power of the Sorcerer\'s Stone.\n            <br/><br/>\n            As Dumbledore is distracted, he is seriously injured by the combined forces of the Dark Lord and you.\n            Potter is killed in the fight, and you and Voldemort escape before reinforcements arrive.\n            <br/><br/>\n            Years later, Voldemort defeats Dumbledore and conquers the entire world. Pleased with your quick-thinking,\n            he leaves you a small role in his newly established government.\n        '),this.allow(this._restart,"Restart")}}]),e}(),y=(o(11),function(e){function t(e){var o;return Object(s.a)(this,t),(o=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={ctrl:new c(function(e){document.title=e})},o}return Object(d.a)(t,e),Object(h.a)(t,[{key:"callHandler",value:function(e){e.call(this.state.ctrl),this.setState({ctrl:this.state.ctrl})}},{key:"render",value:function(){var e=this,t=this.state.ctrl.choices.map(function(t,o){return n.a.createElement("li",{onClick:function(){return e.callHandler(t.handler)},key:o,className:"choice"},n.a.createElement("p",null,t.text))});return n.a.createElement("div",null,n.a.createElement("div",{className:"center"},n.a.createElement("h1",null,this.state.ctrl.sceneTitle),n.a.createElement("div",{className:"texts"},n.a.createElement("p",{dangerouslySetInnerHTML:{__html:this.state.ctrl.sceneText}})),n.a.createElement("ul",{className:"choiceList"},t)))}}]),t}(r.Component)),b=function(e){function t(e){var o;return Object(s.a)(this,t),(o=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={started:!1},o}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){document.title="MP2 - Xiao Geng"}},{key:"render",value:function(){var e=this;return this.state.started?n.a.createElement(y,null):n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"center"},n.a.createElement("h1",null,"ENGL 131 Major Project 2"),n.a.createElement("p",null,"Xiao Geng"),n.a.createElement("p",null,"Laura J. Griffith"),n.a.createElement("p",null,"13 February 2019"),n.a.createElement("div",{className:"btn-container"},n.a.createElement("button",{className:"start-btn",onClick:function(){return e.setState({started:!0})}},"Start"))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=o(26);a.a.render(n.a.createElement(f.a,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,2,1]]]);
//# sourceMappingURL=main.446f2423.chunk.js.map