let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let lapCounter = 1;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStopBtn").innerText = "Start";
        document.getElementById("stopBtn").disabled = true;
        document.getElementById("lapBtn").disabled = true;
    } else {
        timer = setInterval(updateDisplay, 1000);
        document.getElementById("startStopBtn").innerText = "Stop";
        document.getElementById("stopBtn").disabled = false;
        document.getElementById("lapBtn").disabled = false;
    }
    isRunning = !isRunning;
}

function stop() {
    clearInterval(timer);
    document.getElementById("startStopBtn").innerText = "Resume";
    document.getElementById("stopBtn").disabled = true;
    document.getElementById("lapBtn").disabled = false;
    isRunning = false;
}

function lap() {
    const lapTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
    const lapList = document.getElementById("lapList");
    const lapItem = document.createElement("li");
    lapItem.innerText = "Lap " + lapCounter + ": " + lapTime;
    lapList.appendChild(lapItem);
    lapCounter++;
}

function updateDisplay() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const formattedTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
    document.getElementById("display").innerText = formattedTime;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    lapCounter = 1;
    document.getElementById("display").innerText = "00:00:00";
    document.getElementById("startStopBtn").innerText = "Start";
    document.getElementById("stopBtn").disabled = true;
    document.getElementById("lapBtn").disabled = true;
    document.getElementById("lapList").innerHTML = "";
}

function pad(value) {
    return value < 10 ? "0" + value : value;
}
