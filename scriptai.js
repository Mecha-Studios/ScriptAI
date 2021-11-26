//ScriptAI 
//Copyright (C) TR 2021

function scriptAI(){
    var commandinput = document.getElementById('input');
    var commandoutput = document.getElementById('output');

    //Jokes
    var jokes = [
        "What's the difference between a Lamborghini and a garbage can of dead babies? I don't have a Lamborghini in my garage",
        "If video games make kids more violent, why are they so easy to beat the shit out of?",
        "How many dead babies does it take to paint a wall? It depends how hard you throw them",
        "Give a man a fish, and you will feed him for the day. Give a man two prosthetic legs, and he'll shoot his girlfriend.",
        "Where did sally go when the bomb went off? - everywhere. Why did sally fall off the swing? She had no arms. Knock knock. Whose there? -not sally.",
        "Food is like dark humor, not every one gets it.",
        "Why did the Honda Civic cross the road? Well, it wasn't to get hit by a fucking Mazda."
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
    if(commandinput.value.includes("hey") && !commandinput.value.includes("say") || commandinput.value.includes("hello") && !commandinput.value.includes("say") 
    || commandinput.value.includes("hi") && !commandinput.value.includes("shit") && !commandinput.value.includes("something") && !commandinput.value.includes("say") 
    || commandinput.value.includes("what's up") && !commandinput.value.includes("say") || commandinput.value.includes("whats up") && !commandinput.value.includes("say")){
        commandoutput.value = greetingreplies[Math.floor(Math.random() * greetingreplies.length)];
    } else if(commandinput.value.includes("how are you")){
        commandoutput.value = hrureplies[Math.floor(Math.random() * hrureplies.length)];
    } else if(commandinput.value .includes("stupid") || commandinput.value.includes("fuck") || commandinput.value.includes("bitch")
    || commandinput.value.includes('cunt') || commandinput.value.includes("stupid") || commandinput.value.includes("retard")
    || commandinput.value.includes("idiot") || commandinput.value.includes("ass") || commandinput.value.includes("shit")
    || commandinput.value.includes("loser") && !commandinput.value.includes("say")){
        commandoutput.value = swearreplies[Math.floor(Math.random() * swearreplies.length)];
    } else if(commandinput.value.includes("joke") || commandinput.value.includes("funny")){
        commandoutput.value = jokes[Math.floor(Math.random() * jokes.length)];
    } else if(commandinput.value == "do you work on macs"){
        commandoutput.value = "Yes, as long as you don't use Safari.";
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
    } else if(commandinput.value.includes("how") || commandinput.value.includes("what") || commandinput.value.includes("who") 
    || commandinput.value.includes("search")){
        commandoutput.value = "Searching the web for '" + commandinput.value + "'";
        window.open("https://duckduckgo.com/?q=" + commandinput.value);
    } else if(commandinput.value.includes("random number")){
        commandoutput.value = Math.floor((Math.random() * 100) + 1);
    } else if(commandinput.value.includes("dice") || commandinput.value.includes("roll the dice")){
        commandoutput.value = Math.floor((Math.random() * 6) + 1);
    } else if(commandinput.value.includes("say") && !commandinput.value.includes("funny") && !commandinput.value.includes("joke")){
        commandoutput.value = commandinput.value.split("say");
    } else{
        commandoutput.value = "Sorry, I didn't get that.";
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
    utter.pitch = 0.5;
    utter.text = commandoutput.value;
    utter.voice = english_voice;

    window.speechSynthesis.speak(utter);
}