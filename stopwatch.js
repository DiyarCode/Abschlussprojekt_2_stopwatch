var timer = document.querySelector(".time");

var [hours, minute, second, milliseconds] = [0, 0, 0, 0];

var interval = 0;

document.getElementById("start").addEventListener("click", () => {
  if (interval !== 0) {
    clearInterval(interval);
  }
  interval = setInterval(setTime, 10);
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(interval);
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(interval);
  [hours, minute, second, milliseconds] = [0, 0, 0, 0];
  timer.textContent = "00  :  00  :  00  :  00";
});

function setTime() {
  milliseconds = milliseconds + 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    second++;
  }
  if (second >= 60) {
    second = 0;
    minute++;
    if (minute >= 60) {
      minute = 0;
      hours++;
    }
  }

  console.log(interval);

  let h = hours > 9 ? hours : "0" + hours;
  let m = minute > 9 ? minute : "0" + minute;
  let s = second > 9 ? second : "0" + second;
  let ms = milliseconds > 9 ? milliseconds : "0" + milliseconds;

  timer.textContent = `${h}  :  ${m}  :  ${s}  :  ${ms}`;
  timer.classList.add("timestyle");
}
