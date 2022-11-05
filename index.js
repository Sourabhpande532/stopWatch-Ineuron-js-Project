let hours = document.getElementById("hr");
let minutes = document.getElementById("min");
let seconds = document.getElementById("sec");
let counters = document.getElementById("count");

[hr, min, sec, count, timer] = [0, 0, 0, 0, false];


const start = () => {
    timer = true;
    startWatch();
}
const stop = () => {
    timer = false;
}
const reset = () => {
    [hr, min, sec, count, timer] = [0, 0, 0, 0, false];

    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    counters.innerHTML = "00";

}
const startWatch = () => {
    if (timer == true) {
        count = count + 10;
        if (count == 100) {
            sec = sec + 1;
            count = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
        }
        // Number to string   
        [hrToString, minToString, secToString, countToString] = [hr, min, sec, count]


        if (hr < 10) {
            hrToString = "0" + hrToString;
        }
        if (min < 10) {
            minToString = "0" + minToString;
        }
        if (sec < 10) {
            secToString = "0" + secToString;
        }
        if (count < 10) {
            countToString = "0" + countToString;
        }


        hours.innerHTML = hrToString;
        minutes.innerHTML = minToString;
        seconds.innerHTML = secToString;
        counters.innerHTML = countToString;
        setTimeout(startWatch, 100)

       // or Number to string 


        // hr = (hr<10)?"0"+hr:hr;
        // min = (min<10)?"0"+min:min;
        // sec = (sec<10)?"0"+sec:sec;
        // count = (count<10)?"0"+count:count;

        
        // hours.innerHTML = hr;
        // minutes.innerHTML = min;
        // seconds.innerHTML = sec;
        // counters.innerHTML = count;

        // hr = Number(hr);
        // min = Number(min);
        // sec = Number(sec);
        // count = Number(count);

        // setTimeout(startWatch, 100)
    }
}
