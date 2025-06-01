const title = document.getElementById("title");
const btn = document.getElementById("btn");
const timer = document.getElementById("timer");
const showTimer = document.getElementById("showTimer");
btn.addEventListener("click", startCountdown);
let timerInterval;

function startCountdown(){
    document.getElementById("textTitle").textContent = title.value;
    timer.classList.add("hidden");
    showTimer.classList.remove("hidden");
    showTimer.classList.add("flex");
    clearInterval(timerInterval);
    const choosedTime = document.getElementById("time");
    const target = new Date(choosedTime.value)
   timerInterval =  setInterval(()=>{
        const date = new Date();
    
        let diffrence = target-date;
        console.log(diffrence);
        if(isNaN(diffrence)){
            return;
        }
        if(diffrence<= 0){
            
            const audio = new Audio();
            audio.src = "../public/alarm/alarm.mp3";
            audio.play();
            setTimeout(()=>{

                audio.pause();
            },5000);
            return;
        }
        let seconds = Math.floor((diffrence/1000)%60);
        let minutes = Math.floor((diffrence/1000/60)%60);
        let hours = Math.floor((diffrence/ (1000 * 60 * 60))% 24);
        let days = Math.floor((diffrence/(1000* 60 * 60* 24)));
        document.getElementById("seconds").textContent = seconds;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("hours").textContent = hours;
        document.getElementById("days").textContent = days;
    },1000);
}