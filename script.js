const startStopButton = document.getElementById("startStop");
const resetButton = document.getElementById("reset");
const display = document.getElementById("stopwatch");

let count = 0;
let interval = null;

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateStopwatch() {
    count += 1;
    display.textContent = formatTime(count);
}

startStopButton.addEventListener("click", function () {
    if (interval) {
        clearInterval(interval);
        interval = null;
        startStopButton.textContent = "Start";
    } else {
        interval = setInterval(updateStopwatch, 1000);
        startStopButton.textContent = "Stop";
    }
});

resetButton.addEventListener("click", function () {
    clearInterval(interval);
    interval = null;
    count = 0;
    display.textContent = "00:00";
    startStopButton.textContent = "Start";
});
