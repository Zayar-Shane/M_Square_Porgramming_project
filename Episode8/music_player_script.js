// music player

const musicTag = document.getElementsByClassName("contentContainer")[0];
const audioTag = document.getElementsByClassName("audioTag")[0];
const currentAndTotalTimeTag = document.getElementsByClassName("currentAndTotalTime")[0];
const currentProgressTag = document.getElementById("currentProgress");
const playButtonTag = document.getElementsByClassName("playButton")[0];
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
const previousButtonTag = document.getElementsByClassName("previousButton")[0];
const nextButtonTag = document.getElementsByClassName("nextButton")[0];

const tracks = [
    {musicId: "music/music1.mp3", title: "IU - The music"},
    {musicId: "music/music2.mp3", title: "Ed Shreeran - Perfect"},
    {musicId: "music/music3.mp3", title: "Ed Shreeran - Thinking Out of Loud"},
    {musicId: "music/music4.mp3", title: "Di Zi - Chinese Music"},
    {musicId: "music/music5.mp3", title: "Black Pink - Kill This Love"},
    {musicId: "music/music6.mp3", title: "Wstlife - My Love"}
];

for(let i = 0; i < tracks.length; i++){
    const musicItem = document.createElement("div");
    musicItem.classList.add("itemMusic");

    musicItem.addEventListener("click" , () => {  //loadeddata , timeupdate
        currentPlayId = i;
        playSong();
    });

    let track = (i + 1).toString() + ". " + tracks[i].title;
    musicItem.textContent = track;
    musicTag.append(musicItem);
}

let duration = 0;
let durationText = "00 : 00";
//execute total minute of the music 
audioTag.addEventListener("loadeddata", () => {
    duration = Math.floor(audioTag.duration);
    durationText = createCurrentAndTotalTime(duration);
});

// execute updating seconds of the music
audioTag.addEventListener("timeupdate", () => {
    const currentTime = Math.floor(audioTag.currentTime);
    const currentTimeText = createCurrentAndTotalTime(currentTime);
    const currentTimeAndDurationText = currentTimeText + " / " + durationText;
    currentAndTotalTimeTag.textContent = currentTimeAndDurationText;
    updateCurrentProgress(currentTime);
});

const updateCurrentProgress = (currentTime) => {
    const currentProgressText = (500 / duration) * currentTime.toString() + "px";
    currentProgressTag.style.width = currentProgressText;
}

const createCurrentAndTotalTime = (totalSecond) => {
    const minute = Math.floor(totalSecond / 60);
    const second = totalSecond % 60;    
    const minuteText = minute < 10 ? "0" + minute.toString() : minute;
    const secondText = second < 10 ? "0" + second.toString() : second;
    return minuteText + " : " + secondText;
}

// control play() and pause() button
let currentPlayId = 0;
let isPlaying = false;
playButtonTag.addEventListener("click", () => {
    const currentTime = Math.floor(audioTag.currentTime);
    isPlaying = true
    if (currentTime === 0) {
        playSong();
    } else {
        audioTag.play();
        updatePlayAndPause(); 
    }
});

pauseButtonTag.addEventListener("click", () => {
    isPlaying = false;
    audioTag.pause();
    updatePlayAndPause();
});

previousButtonTag.addEventListener("click", () => {
    if (currentPlayId === 0) {
        return;
    } 
    currentPlayId -= 1;
    playSong();
});

nextButtonTag.addEventListener("click", () => {
    if (currentPlayId === tracks.length - 1) {
        return;
    }
    currentPlayId += 1;
    playSong();
});

const playSong = () => {
    const songPlayId = tracks[currentPlayId].musicId;
    audioTag.src = songPlayId;
    isPlaying = true;
    audioTag.play();
    updatePlayAndPause();
}

const updatePlayAndPause = () => {
    if(isPlaying){
        playButtonTag.style.display = "none";
        pauseButtonTag.style.display = "inline";
    }else {
        playButtonTag.style.display = "inline";
        pauseButtonTag.style.display = "none";  
    }
}


