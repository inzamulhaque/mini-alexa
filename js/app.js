const recognition = new webkitSpeechRecognition();
recognition.onresult = function (event) {
    let text = event.results[0][0].transcript;
    const myText = document.getElementById("myText");
    myText.innerText = text;

    readText(text);
}

function readText(text) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    if (text === "hello") {
        speech.text = "bye";
    } else if (text === "what is your name" || text === "what's your name") {
        speech.text = "My Name is Ihlexa";
    } else if (speech.text === "how are you") {
        speech.text = "I'm fine. Thanks";
    } else if (text === "who is your favourite person") {
        speech.text = "MD IH Alif";
    } else if (text === "what is your favourite food") {
        speech.text = "coffee is my favourite food";
    } else if (text === "you have a girlfriend" || text === "you have girlfriend") {
        speech.text = "No! I have no girlfriend😥";
    } else if (text === "are you single") {
        speech.text = "Yes! You like me?🙄";
    } else if (text === "yes I like you") {
        speech.text = "wow😍";
    } else if (text === "you love me") {
        speech.text = "Sorry! I love javascript";
    } else if (text === "what's your father name" || text === "what is your father name") {
        speech.text = "MD IH Alif";
    } else if (text === "what's your mother name" || text === "what is your mother name") {
        speech.text = "I don't know";
    } else if (text === "what time it is now") {
        speech.text = new Date().toLocaleTimeString();
    } else {
        speech.text = "Please Try Again";
    }
    document.getElementById("res").innerText = speech.text;
    window.speechSynthesis.speak(speech);
}