const display = document.querySelector('.display');
let timer = null;
let starTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        starTime = Date.now() - elapsedTime;
        timer = setInterval(update,10)
        isRunning = true;
    }
}
 
function  stop(){

    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - starTime;
        isRunning = false;
    }

}


function reset(){
    clearInterval(timer)
    timer = null;
    starTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = `00:00:00:00`

}


function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - starTime;
    let hours = Math.floor(elapsedTime/ (1000 * 60 * 60))
    let minute = Math.floor(elapsedTime /(1000 *60) % 60);
    let seconds =Math.floor(elapsedTime / 1000 % 60);
    let milliSecond = Math.floor(elapsedTime % 1000 / 10);

    hours = hours.toString().padStart(2,0)
    minute = minute.toString().padStart(2,0)
    seconds = seconds.toString().padStart(2,0)
    milliSecond = milliSecond.toString().padStart(2,0)

    display.textContent = `${hours}:${minute}:${seconds}:${milliSecond}`

}