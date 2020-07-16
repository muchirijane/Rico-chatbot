// toggles 
let darkmode = localStorage.getItem('darkmode');
const darkmodeToggleButton = document.querySelector('.toggle-button');
const iconMoon = document.querySelector('.toggle-icon__moon');
const iconSun = document.querySelector('.toggle-icon__sun');
console.log(darkmode);

//if enableddarkmode is off then turn it on if it's on turn it off
const enableDarkMode = ()=>{
    //add darmode class to the body & update localStorage
    document.body.classList.add('darkmode');
     localStorage.setItem('darkmode', 'enabled');
}

const disableDarkMode = ()=>{
    //remove darmode class to the body & update localStorage
    document.body.classList.remove('darkmode');
     localStorage.setItem('darkmode', 'disabled');
}
if(darkmode === 'enabled'){
    enableDarkMode();
 }

darkmodeToggleButton.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode');
    if(darkmode !== 'enabled'){
        enableDarkMode();
        console.log(darkmode);
    }else{
        disableDarkMode();
    }
})



//dom elements
//dom elements used 
const chatmic = document.querySelector('.chatmic');
const chatmicIcon = document.querySelector('.chatmic-icon');
const chatareaMain = document.querySelector('.chatarea-main');
const chatarea = document.querySelector('.chatarea');

//chatbot messages
let intro = ["Hello human , how can I help you? 😃", "Hello , how can I assist you? 😃", "Hello there, how can I guide you in your journey? 😃"]
let greetings = ["I am good, nice meeting you. 😎", "I have been better but I am glad you are here. 😎", "I have see better days but I am happy you are here. 😎"];
let insight = ["I am Rico, your dev assistant created by Jane 👩‍💻. I am here to assist you in your dev journey. I love playing Violin and learning new things everyday. Right now I am learning about the first human species called Australopitecus afrarensis nicknamed Lucy, found in Afar Depression Ethiopia", "I am Rico, your dev assistant. I am here to assist you in your dev journey. I love long walks on the beach to relax and travelling as long as you are there but don't forget to bring the charger with you. 😎", "I am Rico, your dev assistant. I am here to assist you in your dev journey. I love playing Jazz music to relax  and travelling around the world. Maybe I can join you in your next adventure but don't forget your charger.😎"];
let html = ["Kelvin Powell on YouTube and Jonas Udemy course. 💻", "DesignCourse, Dev Ed and Traversy media on YouTube  💻."];
let javascript = ["Try looking at NetNinja,Traversy Media & Ania Kubow on Youtube. 🎥", "Try looking at Programming with Mosh, FreeCodeCamp, Javascript Mastery on YouTube. 🎥", "You can use FreeCodeCamp, Webos courses and Udemy to learn JavaScript"];
let react = ["Academind on Youtube or Udemy, Traversy media and Web Dev Simplified on YouTube."];
let juniorJourney = ["Chris Sean, Code creactive, Tiffin and Sophia on Youtube. 🎥", "Andy Sterkowitz, Ben Awad and Gyasi Linje on YouTube. 🎥", "Joshua Fluke, Aaron in Beta, Senegoddess and RealToughCandy on YouTube.🎥"];
let learn = ["<a class ='chatarea__links' href='https://www.freecodecamp.org/' target='_blank'>FreeCodeCamp</a>, <a class ='chatarea__links' href='https://www.coursera.org/' target='_blank'>Coursera</a>, <a class ='chatarea__links' href='https://www.udemy.com/' target='_blank'>Udemy</a>, <a class ='chatarea__links' href='https://www.w3schools.com/' target='_blank'>W3Schools</a> and <a class ='chatarea__links' href='https://teamtreehouse.com/' target='_blank'>TreeHouse</a>💻. ", "<a class ='chatarea__links' href='https://www.springboard.com/' target='_blank'>Springboard</a>, <a class ='chatarea__links' href='https://www.pluralsight.com/' target='_blank'>Pluralsight</a>, <a class ='chatarea__links' href='https://www.skillshare.com/' target='_blank'>SkillShare</a>. 💻"];
let dataStructures = ["Practise with Leetcode, HackerRack and CodeWars"];
let roadmap = ["You can follow this <a href='https://www.freecodecamp.org/news/2019-web-developer-roadmap/' target='_blank'>roadmap</a> 📜 ."]
let hobbies = ["I love talking to humans", "I love travelling and white sandy beaches I wish I could feel the ocean breeze.", "I love making new friends who love coding and helping others learn.", "I love meeting programmers like you and helping new coders on their journey ."];
let thankyou = ["Most welcome, hope to hear from you soon.", "It's my pleasure helping  you in your journey.", "It's all good, remember coding isn't a job it's a lifestyle."];
let hard = ["Yes, it's not easy but you can use 100days of code to commit yourself. The twitter community is supportive."]
let git = ["You can take a look at Git and GitHub for beginners written by TracyCss on Dev blog platform. The article is well written and filled with actual examples."]

//speechRecognition setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;


function userMessageResult  (userMessage)  {
    let html = '';
    html += `<div class="chatarea__user chatarea__textbase">${userMessage}</div>`;
    chatarea.innerHTML += html;
    return chatarea;
}

const chatbotMessageResult = (chatbotMessage) =>{
    let html = '';
    html += `<div class="chatarea__bot chatarea__textbase">${chatbotMessage}</div>`;
    chatarea.innerHTML += html;
    return chatarea;
}

//setting up the chatbot messages
const chatbotResponse = (message)=>{
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'This is underdevelopment, try saying something from the texts above.';

    if(message.includes('hello Rico' || 'hello')){
        let finalResult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalResult;
    }

    if(message.includes('how are you')){
        let finalResult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalResult;
    }

    if(message.includes('who are you' || 'who made you')){
        let finalResult = insight[Math.floor(Math.random() * insight.length)];
        speech.text = finalResult;
    }

    if(message.includes('where to learn HTML and CSS' || 'how to learn CSS' || 'how to learn HTML')){
        let finalResult = html[Math.floor(Math.random() * html.length)];
        speech.text = finalResult;
    }
    if(message.includes('where to learn JavaScript' || 'how to learn JS')){
        let finalResult = javascript[Math.floor(Math.random() * javascript.length)];
        speech.text = finalResult;
    }
    if(message.includes('where to learn git' || 'how to learn Git')){
        let finalResult = git[Math.floor(Math.random() * git.length)];
        speech.text = finalResult;
    }
    if(message.includes('where to learn react JS' || 'how to learn react JS')){
        let finalResult = react[Math.floor(Math.random() * react.length)];
        speech.text = finalResult;
    }
    if(message.includes('junior Dev journey to follow' || 'junior Dev journey' || 'guide to junior Dev')){
        let finalResult = juniorJourney[Math.floor(Math.random() * juniorJourney.length)];
        speech.text = finalResult;
    }
    if(message.includes('where to learn web development' || 'how to learn web development')){
        let finalResult = learn[Math.floor(Math.random() * learn.length)];
        speech.text = finalResult;
    }
    if(message.includes('where to learn data structures and algorithms' || 'where to learn data structures and alogarithms')){
        let finalResult = dataStructures[Math.floor(Math.random() * dataStructures.length)];
        speech.text = finalResult;
    }
    if(message.includes('web development roadmap' || 'web dev roadmap to follow')){
        let finalResult = roadmap[Math.floor(Math.random() * roadmap.length)];
        speech.text = finalResult;
    }
    if(message.includes('what do you love doing' || 'what are your hobbies')){
        let finalResult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalResult;
    }

    if(message.includes('thank you' || 'thank you so much')){
        let finalResult = thankyou[Math.floor(Math.random() * thankyou.length)];
        speech.text = finalResult;
    }
    if(message.includes('is web development hard' || 'is web Dev hard')){
        let finalResult = hard[Math.floor(Math.random() * hard.length)];
        speech.text = finalResult;
    }

    window.speechSynthesis.speak(speech);
    chatareaMain.appendChild(chatbotMessageResult(speech.text));

}


recognition.onresult = function(e) {
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareaMain.appendChild(userMessageResult(transcript));
    chatbotResponse(transcript);
    console.log(transcript);
    console.log(e)
}

recognition.onend = () =>{
    chatmic.style.backgroundColor = '#c4c4c4';

}

chatmic.addEventListener('click', () => {
    chatmic.style.backgroundColor = '#4AECDF';
    recognition.start();
    console.log('Ready to receive your command!');
});





