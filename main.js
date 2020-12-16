let timer = document.getElementById("timer");
let startbutton = document.getElementById("startbutton");
let stopbutton = document.getElementById("stopbutton");
let resetbutton = document.getElementById("resetbutton");


let time = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;




let status = "stop";
let interval;


function stopWatch(){
  seconds++;
  if (seconds / 10 == 1){
    minutes++;
    seconds = 0;
    if (minutes / 10 == 1){
      hours++;
      minutes = 0;
      if (hours / 10 == 1){
        time++;
        hours = 0;
      }
    }
  }



  timer.innerHTML = time + ":" + hours + ":" + minutes + ":" + seconds;
}




startbutton.addEventListener("click", function(){
  interval = setInterval(stopWatch, 100);
})


stopbutton.addEventListener("click", function(){
  clearInterval(interval);
})

resetbutton.addEventListener("click", function(){
  clearInterval(interval);
  timer.innerHTML = "0:0:0:0"
  time = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
})