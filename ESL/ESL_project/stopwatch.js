// Stopwatch begin
const startBtn = document.querySelector('.startbtn'),
      stHour = document.querySelector('.stHour'),
      stMin = document.querySelector('.stMin'),
      stSec = document.querySelector('.stSec');

startBtn.addEventListener('click', function(){
    
    if (this.innerHTML === "Start") {
        this.innerHTML = "Stop"
        this.style = `background-color: red`;
       
    }
    else if(this.innerHTML === "Stop"){
        this.innerHTML = "Reset"
        this.style = `background-color: #0051ff`;
    }
    else if(this.innerHTML === "Reset"){
        this.innerHTML = "Start"
        this.style = `background-color: grey`;
        
        
    }
    // stopwatch()

});

function stopwatch() {    
    if(startBtn.innerHTML === "Stop"){
        stSec.innerHTML++;
    }
    if(stSec.innerHTML > 59){
        stSec.innerHTML = "00";
        stMin.innerHTML++
    }
    if(stMin.innerHTML > 59){
        stMin.innerHTML = "00";
        stHour.innerHTML++
    }
    if(stHour.innerHTML > 24){
        stHour.innerHTML = "00";
    }
    if(startBtn.innerHTML === "Start"){
        stHour.innerHTML = 0
        stMin.innerHTML = 0
        stSec.innerHTML = 0        
    }
    //setTimeout(() => stopwatch(), 1000)
    setTimeout(stopwatch,1000);
}
stopwatch()