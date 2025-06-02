const title = document.getElementById("title");
const btn = document.getElementById("btn");
const timer = document.getElementById("timer");
const showTimer = document.getElementById("showTimer");
btn.addEventListener("click", startCountdown);
let timerInterval;

function startCountdown(){
    const title = document.getElementById("textTitle");
    title.textContent = title.value;
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
         
            clearInterval(timerInterval);
            Notification.requestPermission().then(perm => {
  console.log("Permission result:", perm);

    console.log("Sending notification...");
    new Notification(`وقت جلسه ${title?.textContent || "بدون عنوان"} شروع شده است`, {
      tag: "Timer notication",
      body: "وقت تایمر تمام شده است"
    });
  
});

            setTimeout(()=>{
                audio.pause();
            },8000);
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




const latitude = 40.7128; // Example: New York City
const longitude = -74.0060;

const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto&forecast_days=10`;

fetch(url)
  .then(response => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  })
  .then(data => {
    console.log("10-Day Forecast:");
    data.daily.time.forEach((date, index) => {
      console.log(`Date: ${date}`);
      console.log(`Max Temp: ${data.daily.temperature_2m_max[index]}°C`);
      console.log(`Min Temp: ${data.daily.temperature_2m_min[index]}°C`);
      console.log(`Precipitation: ${data.daily.precipitation_sum[index]} mm`);
      console.log("----");
    });
  })
  .catch(error => {
    console.error("Error fetching weather data:", error);
  });
