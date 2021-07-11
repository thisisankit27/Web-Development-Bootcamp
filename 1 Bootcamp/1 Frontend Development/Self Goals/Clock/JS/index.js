var time = document.querySelector(".timer-box");
var time12 = document.querySelector(".timer");
var hr = 0;
var min = 0;
var sec = 0;
var flag = 0;

function setTime() {
    hr = prompt("Enter Hour");
    flag = hr;
    min = prompt("Enter Minutes");
    sec = prompt("Enter Seconds");
    startClock();
}

function startClock() {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);
    flag = parseInt(flag);

    sec++;
    if (sec == 60) {
        min++;
        sec = 0;
    }
    if (min == 60) {
        hr++;
        flag++;
        min = 0;
    }
    if (hr == 24) {
        sec = 0;
        min = 0;
        hr = 0;
        flag = 0;
    }
    if (flag > 12) {
        flag -= 12;
    }

    if (sec < 10 || sec == 0) {
        sec = "0" + sec;
    }
    if (min < 10 || min == 0) {
        min = "0" + min;
    }
    if (hr < 10 || hr == 0) {
        hr = "0" + hr;
    }
    if (flag < 10 || flag == 0) {
        flag = "0" + flag;
    }

    time.innerHTML = hr + ":" + min + ":" + sec;
    if (hr >= 12) {
        time12.innerHTML = flag + ":" + min + ":" + sec + " PM";
    }
    else {
        time12.innerHTML = flag + ":" + min + ":" + sec + " AM";
    }

    setTimeout("startClock()", 1000);
}

