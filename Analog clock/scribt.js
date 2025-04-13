//clock
//variables
const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('seconds');

//functions clock
function setTime(){
    const currrenDate = new Date();
    const secondRatio = currrenDate.getSeconds()/60;
    const minuteRatio = (secondRatio+ currrenDate.getMinutes())/60;
    const hourRatio = (minuteRatio + currrenDate.getHours())/12;
    wareegSamee(secondHand,secondRatio)
    wareegSamee(minuteHand,minuteRatio)
    wareegSamee(hourHand,hourRatio)

}
function wareegSamee(element,rotationRatioo){
    element.style.setProperty('---wareeg',rotationRatioo * 360)
}
setTime()
setInterval(setTime,1000)
//button
//variables
const button1 = document.querySelector('.button1')
const button2 = document.querySelector('.button2')
const button3 = document.querySelector('.button3')
const button4 = document.querySelector('.button4')
const clock = document.querySelector('.clock')
const buttons = document.querySelectorAll('.button')
const buttonsArray = Array.from(buttons);
const colors = ['#fad490','#f19292','#edf0f2','#ffe100']

//eventListener
button1.addEventListener('click', e =>{
    clock.style.backgroundColor = colors[0]
})
button2.addEventListener('click', e =>{
    clock.style.backgroundColor = colors[1]
})
button3.addEventListener('click', e =>{
    clock.style.backgroundColor = colors[2]
})
button4.addEventListener('click', e =>{
    clock.style.backgroundColor = colors[3]
})
//funcctions
