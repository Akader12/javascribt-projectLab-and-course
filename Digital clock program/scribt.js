//digital clock program
function updateClock(){
    const now = new Date();
    let hour = now.getHours();
    let meridiem = hour >= 12 ? "PM":'AM';
    hour = hour % 12 || 12;
    hour = hour.toString().padStart(2,0)
    let minutes = now.getMinutes().toString().padStart(2,0);
    let seconds = now.getSeconds().toString().padStart(2,0);
    let timeString = `${hour}:${minutes}:${seconds} ${meridiem}`
    document.querySelector('.clock').textContent = timeString;


}
updateClock()
setInterval(updateClock,1000)