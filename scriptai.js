//ScriptAI 
//Copyright (C) TR 2021
var version = "1.5.1";
var commandinput = document.getElementById('input');
var commandoutput = document.getElementById('output');
commandinput.value.toLowerCase();

function scriptAI(){

    //KEYWORDS & PROMPTS
    var question = [
        "what",
        "how",
        "where",
        "when",
        "why"
    ];

    var greetings = [
        "hey",
        "hello",
        "whats up",
        "what's up",
        "greetings",
        "hi"
    ];
    
    var jokeprompt = [
        "joke",
        "funny",
        "hilarious",
        "humorous"
    ];

    var hruprompt = [
        "how are you",
        "how's your day",
        "how is your day",
        "hows your day"
    ];

    var swears = [
        "fuck",
        "f***",
        "bitch",
        "b****",
        "shit",
        "s***",
        "fag",
        "faggot",
        "f**",
        "f*****",
        "retard",
        "stupid",
        "cunt",
        "c***",
        "ass",
        "a**",
        "dick",
        "d***"
    ];

    var datetime = [
        "date",
        "day",
        "time",
    ]

    //RESPONSES
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
        "An apple a day keeps the doctor away... Or at least it does if you throw it hard enough.",
        "JFK and Lincoln were very open minded"
    ];
    
    var greetingreplies = [
        "Hi",
        "Hello",
        "What's up",
        "Hi there",
        "Hello, friend",
        "What's up my diggity dogs?",
    ];

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

    repliestoyes = [
        "Okay",
        "Yes received",
        "Alright",
        "No"
    ];

    whorureplies = [
        "My name is ScriptAI, I'm here to help!",
        "I'm a virtual assistant created by TR. My name is ScriptAI.",
        "Hi, I'm ScriptAI!",
        "My name is ScriptAI"
    ];

    //Message reception & response system
    if(!commandinput.value.includes("say") && !commandinput.value.includes("tweet")){
        if(commandinput.value.includes("donate")){
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
        } else if(commandinput.value.includes("random number")){
            commandoutput.value = Math.floor((Math.random() * 100) + 1);
        } else if(commandinput.value.includes("dice") || commandinput.value.includes("roll the dice")){
            commandoutput.value = Math.floor((Math.random() * 6) + 1);
        } else if(commandinput.value.includes("version")){
            commandoutput.value = version;
        }
    }

    for(var i = 0; i < question.length; i++){
        if(commandinput.value.includes(question[i])&& !commandinput.value.includes('version') && !commandinput.value.includes("time") 
        && !commandinput.value.includes("the time") && !commandinput.value.includes("date") && !commandinput.value.includes("day") 
        && !commandinput.value.includes("you") && !commandinput.value.includes("say")){
            commandoutput.value = "Searching the web for '" + commandinput.value + "'";
            window.open("https://duckduckgo.com/?q=" + commandinput.value);
        } 
    }

    for(var i = 0; i < greetings.length; i++){
        if(commandinput.value.includes(greetings[i]) && !commandinput.value.includes("this") && !commandinput.value.includes("shit") 
        && !commandinput.value.includes("something") && !commandinput.value.includes("say")){
            commandoutput.value = greetingreplies[Math.floor(Math.random() * greetingreplies.length)];
        }
    }

    for(var i = 0; i < hruprompt.length; i++){
        if(commandinput.value.includes(hruprompt[i])){
            commandoutput.value = hrureplies[Math.floor(Math.random() * hrureplies.length)];
        }
    }

    for(var i = 0; i < swears.length; i++){
        if(commandinput.value .includes(swears[i]) && !commandinput.value.includes("say")){
            commandoutput.value = swearreplies[Math.floor(Math.random() * swearreplies.length)];
        }
    }

    if(commandinput.value.includes("say") && !commandinput.value.includes("funny") && !commandinput.value.includes("joke")){
        commandoutput.value = commandinput.value.replace("say", "");
    }
    
    for(var i = 0; i < jokeprompt.length; i++){
        if(commandinput.value.includes(jokeprompt[i])){
            commandoutput.value = jokes[Math.floor(Math.random() * jokes.length)];
        } 
    }
    
    for(var i = 0; i < datetime.length; i++){
        if(commandinput.value.includes(datetime[i]) && !commandinput.value.includes("how are you")){
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
        }
    }
    
    if(commandinput.value.includes("tweet")){
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
        var micbutt = document.getElementById('talkbutt');
        micbutt.style = 'background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3); animation-play-state: running; background-size: 1800% 1800%;';
        commandinput.style = 'background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3); animation-play-state: running; background-size: 1800% 1800%;';
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = "en-US";
        recognition.start();
        recognition.onresult = function (e) {
            commandinput.value
                = e.results[0][0].transcript;
            recognition.stop();
            micbutt.style = 'background: rgba(0,0,0,0); animation-play-state: paused';
            commandinput.style = 'background: black; animation-play-state: paused';
            scriptAI();
        };

        recognition.onerror = function (e) {
            recognition.stop();
        }

    }
}