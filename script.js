// 🔁 CHANGE THIS WITH YOUR MODEL LINK
const URL = "https://teachablemachine.withgoogle.com/models/tqQDiMsiN/";

let model, webcam, labelContainer, maxPredictions;
// 🔊 Buzzer sound
const buzzer = new Audio(
  "https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"
);
buzzer.loop = true;   // continuous buzzer

let buzzerPlaying = false;


// 🔊 Alert sound
const alertSound = new Audio(
  "https://actions.google.com/sounds/v1/alarms/beep_short.ogg"
);

async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // Load model
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Setup webcam
    webcam = new tmImage.Webcam(300, 300, true);
    await webcam.setup();
    await webcam.play();
    window.requestAnimationFrame(loop);

    // Add webcam to page
    document.getElementById("webcam-container").appendChild(webcam.canvas);

    // Setup labels
    labelContainer = document.getElementById("label-container");
    labelContainer.innerHTML = "";
    for (let i = 0; i < maxPredictions; i++) {
        labelContainer.appendChild(document.createElement("div"));
    }
}

async function loop() {
    webcam.update();
    await predict();
    window.requestAnimationFrame(loop);
}

async function predict() {
    const prediction = await model.predict(webcam.canvas);

    // Show probabilities in the labels
    for (let i = 0; i < maxPredictions; i++) {
        labelContainer.childNodes[i].innerHTML =
            prediction[i].className + ": " +
            prediction[i].probability.toFixed(2);
    }

    // Map your classes (Ensure Class 0 is Helmet and Class 1 is No Helmet in your TM model)
    const helmetProb = prediction[0].probability;    
    const noHelmetProb = prediction[1].probability;  

    const status = document.getElementById("status");

    // 🚨 NO HELMET DETECTED
    if (noHelmetProb > 0.7) {
        status.innerText = "❌ ERROR: HELMET NOT DETECTED!";
        status.style.color = "red";
        document.body.style.backgroundColor = "#ffcccc"; // Visual buzzer (pale red background)

        if (!buzzerPlaying) {
            speakWarning();
            alertSound.play(); // 🔊 Plays the short beep once
            buzzer.play();     // 🔊 Starts the continuous looping buzzer
            buzzerPlaying = true;
        }
    }
    // ✅ HELMET DETECTED
    else if (helmetProb > 0.7) {
        status.innerText = "✅ Helmet Detected. Safe Ride!";
        status.style.color = "green";
        document.body.style.backgroundColor = "white"; // Reset background

        if (buzzerPlaying) {
            buzzer.pause();
            buzzer.currentTime = 0;
            buzzerPlaying = false;
        }
    }
    // 🤔 UNCERTAIN
    else {
        status.innerText = "⚠️ Detecting...";
        status.style.color = "orange";
    }
}
function speakWarning() {
    const speech = new SpeechSynthesisUtterance("Warning. Please wear your helmet.");
    window.speechSynthesis.speak(speech);
}