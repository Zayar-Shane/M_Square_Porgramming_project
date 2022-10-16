// Stop Watch

const stopWatchTag = document.getElementsByClassName("stopWatch")[0];
const milisecondsTag = document.getElementsByClassName("mili")[0];
const startBtn = document.getElementsByClassName("btnStart")[0];
const pauseBtn = document.getElementsByClassName("btnPause")[0];
const continueBtn = document.getElementsByClassName("btnContinue")[0];
const resetBtn = document.getElementsByClassName("btnReset")[0];

let miliseconds = 0;
    seconds = 0, 
    minutes = 0, 
    hours = 0;

const handleTime = () => {
    miliseconds += 1;
    if(miliseconds === 100){
        miliseconds = 0;
        seconds += 1;

        if (seconds === 60){
            seconds = 0;
            minutes += 1;
    
            if (minutes === 60){
                minutes = 0;
                hours += 1;
            }
            
        }
    }

    let milisecondText = miliseconds < 10 ? "0" + miliseconds.toString() : miliseconds;
    let secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
    let minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
    let hourText = hours < 10 ? "0" + hours.toString() : hours;
    stopWatchTag.innerHTML = hourText + ":" + minuteText + ":" + secondText;
    milisecondsTag.innerHTML = milisecondText;
    console.log(milisecondText);
}

let timeInterval; 
startBtn.addEventListener("click", () => {
    clearInterval(timeInterval);
    timeInterval = setInterval(handleTime, 10);
});

pauseBtn.addEventListener("click", () => {
    clearInterval(timeInterval)
});

continueBtn.addEventListener("click", () => {
    clearInterval(timeInterval);
    timeInterval = setInterval(handleTime, 10);
});

resetBtn.addEventListener("click", () => {
    clearInterval(timeInterval);
    seconds = 0, minutes = 0, hours = 0;
    timeInterval = setInterval(handleTime, 10);
});