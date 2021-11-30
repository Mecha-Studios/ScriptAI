//ScriptAI 
//Copyright (C) TR 2021

var version = "1.4.1";
var commandinput = document.getElementById('input');
var commandoutput = document.getElementById('output');
commandinput.value.toLowerCase();

function scriptAI(){

    //KEYWORDS
    var question = [
        "what",
        "how",
        "where",
        "when",
        "why"
    ];

    //RESPONSES
    //Jokes
    var jokes = [
        "What's the difference between a Lamborghini and a garbage can of dead babies? I don't have a Lamborghini in my garage",
        "If video games make kids more violent, why are they so easy to beat the shit out of?",
        "How many dead babies does it take to paint a wall? It depends how hard you throw them",
        "Give a man a fish, and you will feed him for the day. Give a man two prosthetic legs, and he'll shoot his girlfriend.",
        "Where did Sally go when the bomb went off? - everywhere. Why did Sally fall off the swing? She had no arms. Knock knock. Whose there? -not Sally.",
        "Food is like dark humor, not every one gets it.",
        "Why did the Honda Civic cross the road? Well, it wasn't to get hit by a fucking Mazda.",
        "I don't have a carbon footprint. I just drive everywhere.",
        "What did the asteroid that killed the dinosaurs say? T-rex, I'm coming for my hug!",
        "An apple a day keeps the doctor away… Or at least it does if you throw it hard enough.",
        "JFK and Lincoln were very open minded"
    ];
    
    //Greetings & Greeting replies
    var greetingreplies = [
        "Hi",
        "Hello",
        "What's up",
        "Hi there",
        "Hello, friend",
        "What's up my diggity dogs?",
    ];

    //Replies to things like 'how are you'
    var hrureplies = [
        "I'm doing pretty good",
        "I'm great",
        "Amazing",
        "Fantastic",
        "Not too bad",
        "I'm alright",
        "I'm doing alright",
        "Not great, but I'm okay"
    ];

    //Insult and swear replies
    var swearreplies = [
        "Fuck you",
        "Fuck off",
        "Shut the fuck up",
        "Don't say that to me",
        "I'm telling your mother",
        "That isn't very nice",
        "Shut up",
        "Okay",
        "...",
        "I thought we were friends",
        "What the fuck",
        "You're a bitch",
        "You cunt",
        "Motherfucker",
        "No",
        "You're a cunt",
        "You're retarded",
        "You have no friends",
        "Haha, you're a loser"
    ];

    //Responses to 'yes'
    repliestoyes = [
        "Okay",
        "Yes received",
        "Alright",
        "No"
    ];

    //Replies to things like 'whats your name' & 'who are you'
    whorureplies = [
        "My name is ScriptAI, I'm here to help!",
        "I'm a virtual assistant created by TR. My name is ScriptAI.",
        "Hi, I'm ScriptAI!",
        "My name is ScriptAI"
    ];

    //Message reception & response system
    if(!commandinput.value.includes("say") && !commandinput.value.includes("tweet")){
        if(commandinput.value.includes("hey")|| commandinput.value.includes("hello") || commandinput.value.includes("hi") && !commandinput.value.includes("this") 
        && !commandinput.value.includes("shit") && !commandinput.value.includes("something") || commandinput.value.includes("what's up")
        || commandinput.value.includes("whats up")){
            commandoutput.value = greetingreplies[Math.floor(Math.random() * greetingreplies.length)];
        } else if(commandinput.value.includes("how are you")){
            commandoutput.value = hrureplies[Math.floor(Math.random() * hrureplies.length)];
        } else if(commandinput.value .includes("stupid") || commandinput.value.includes("fuck") || commandinput.value.includes("f***")
        || commandinput.value.includes("bitch") || commandinput.value.includes("b****") || commandinput.value.includes('cunt') || commandinput.value.includes("stupid") 
        || commandinput.value.includes("retard")|| commandinput.value.includes("idiot")|| commandinput.value.includes("ass") || commandinput.value.includes("shit")
        || commandinput.value.includes("loser")){
            commandoutput.value = swearreplies[Math.floor(Math.random() * swearreplies.length)];
        } else if(commandinput.value.includes("donate")){
            commandoutput.value = "...";
            window.open("https://paypal.me/tylerruotolo");
        } else if(commandinput.value == ""){
            commandoutput.value = "...";
        } else if(commandinput.value == "yes"){
            commandoutput.value = repliestoyes[Math.floor(Math.random() * repliestoyes.length)];
        } else if(commandinput.value.includes("your name") || commandinput.value.includes("who are you")){
            commandoutput.value = whorureplies[Math.floor(Math.random() * whorureplies.length)];
        } else if(commandinput.value.includes('weather')){
            commandoutput.value = "Here's the weather for today...";
            window.open("https://duckduckgo.com/?q=weather");
        } else if(commandinput.value.includes("how") || commandinput.value.includes("what") && !commandinput.value.includes('version') && !commandinput.value.includes("time") 
        & !commandinput.value.includes("the time") & !commandinput.value.includes("date") || commandinput.value.includes("who") || commandinput.value.includes("search")){
            commandoutput.value = "Searching the web for '" + commandinput.value + "'";
            window.open("https://duckduckgo.com/?q=" + commandinput.value);
        } else if(commandinput.value.includes("random number")){
            commandoutput.value = Math.floor((Math.random() * 100) + 1);
        } else if(commandinput.value.includes("dice") || commandinput.value.includes("roll the dice")){
            commandoutput.value = Math.floor((Math.random() * 6) + 1);
        } else if(commandinput.value.includes("time") || commandinput.value.includes("date")){
            let currentDate = new Date();
            let cDay = currentDate.getDate();
            let cMonth = currentDate.getMonth() + 1;
            let cYear = currentDate.getFullYear();
            let cHour = currentDate.getHours()
            let cMin = currentDate.getMinutes();
            var ampm;

            if(cHour >= 13){
                cHour = currentDate.getHours() - 12;
                ampm = "PM";
            } else{
                cHour = currentDate.getHours();
                ampm = "AM";
            }

            if(cMin <= 9){
                cMin = "0" + currentDate.getMinutes();
            } else if(cMin >= 9){
                cMin = currentDate.getMinutes();
            }

            var cTime = cHour + ":" + cMin + " " + ampm;
            var months = [
                " ",
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ]

            commandoutput.value = "It is currently " + months[cMonth] + " " + cDay + ", " + cYear + " at " + cTime;
        } else if(commandinput.value.includes("version")){
            commandoutput.value = version;
        } else{
            commandoutput.value = "Sorry, I didn't get that.";
        }
    }

    if(commandinput.value.includes("say") && !commandinput.value.includes("funny") && !commandinput.value.includes("joke")){
        commandoutput.value = commandinput.value.replace("say", "");
    } else if(commandinput.value.includes("joke") || commandinput.value.includes("funny")){
        commandoutput.value = jokes[Math.floor(Math.random() * jokes.length)];
    } else if(commandinput.value.includes("tweet")){
        var tweet = commandinput.value.replace("tweet", "");
        commandoutput.value = "Posting" + '"' + tweet + '"';
        window.open('https://twitter.com/intent/tweet?text=' + tweet);
    }
    //Voice & TTS system
    var available_voices = window.speechSynthesis.getVoices();
    
    var english_voice = '';

    for(var i=0; i<available_voices.length; i++) {
        if(available_voices[i].lang === 'en-US') {
            english_voice = available_voices[i];
            break;
        }
    }
    if(english_voice === ''){
        english_voice = available_voices[0];
    }
    var utter = new SpeechSynthesisUtterance();
    utter.rate = 1;
    utter.pitch = 1;
    utter.text = commandoutput.value;
    utter.voice = english_voice;

    window.speechSynthesis.speak(utter);
}

function talk() {

    if (window.hasOwnProperty('webkitSpeechRecognition')) {

        var recognition = new webkitSpeechRecognition();
        var mic = document.getElementById('micbutt');

        recognition.continuous = false;
        recognition.interimResults = false;
        micbutt.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffile.mockplus.com%2Fimage%2F2018%2F04%2F5fc8b569-d76f-4d5d-809a-6dc6968e28f7.gif&f=1&nofb=1';
        recognition.lang = "en-US";
        recognition.start();
        recognition.onresult = function (e) {
            commandinput.value
                = e.results[0][0].transcript;
            recognition.stop();
            micbutt.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fpreview%2Fwhite%2Fmicrophone-8-xxl.png&f=1&nofb=1';
            scriptAI();
        };

        recognition.onerror = function (e) {
            recognition.stop();
        }

    }
}