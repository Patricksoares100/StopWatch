let displayTime = document.getElementById("displayTime");
let inputText = document.getElementsByTagName("input")[0];

let startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", watchStart);

stopBtn = document.getElementById("stopBtn");
stopBtn.addEventListener("click", watchStop);

let resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", watchReset);

let timer = null;

let [hours, minutes, seconds] = [0, 0, 0];
function stopWatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  } else if (minutes === 60) {
    minutes = 0;
    hours++;
  } else if (hours === 24) {
    hours = 0;
  }

  let h = hours < 10 ? `0${hours}` : hours;
  let m = minutes < 10 ? `0${minutes}` : minutes;
  let s = seconds < 10 ? `0${seconds}` : seconds;
  displayTime.innerHTML = `${h}:${m}:${s}`;
  let textInput = parseInt(inputText.value);
  if(textInput === seconds){ 
    clearInterval(timer);
    alert("Time is up");
    watchReset();
  }
}

function watchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  let textInput = inputText.value;
  if (textInput === "") {
    alert("Please enter a value");
    return;
  } else if (isNaN(textInput)) {
    alert("Please enter a number");
    return;
  }
  timer = setInterval(stopWatch, 1000);
}

function watchStop() {
  clearInterval(timer);
  timer = "00:00:00";
}

function watchReset() {
  clearInterval(watchStart);
  [hours, minutes, seconds] = [0, 0, 0];
  displayTime.innerHTML = `0${hours}:0${minutes}:0${seconds}`;
}

if (hours === 0 && minutes === 0 && seconds === 0) {
  displayTime.innerHTML = "00:00:00";
}
