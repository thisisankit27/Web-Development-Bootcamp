var timer = document.querySelector(".timer-box");

var hr = 0;
var min = 0;
var sec = 0;
var flag = true;

function start() {
    if (flag === true) {
        flag = false;
        startTimer();
    }
}

function stop() {
    if (flag === false) {
        flag = true;
    }
}

function startTimer() {
    if (flag === false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec++;

        if (sec == 60) {
            min++;
            sec = 0;
        }
        if (min == 60) {
            hr++;
            min = 0;
        }

        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
            min = '0' + min;
        }
        if (hr < 10 || hr == 0) {
            hr = '0' + hr;
        }
        timer.innerHTML = hr + ':' + min + ':' + sec;
        setTimeout("startTimer()", 1000);
    }
}

function reset() {
    timer.innerHTML = '00:00:00';
    hr = 0;
    min = 0;
    sec = 0;
    flag = true;
}