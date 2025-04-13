let time = document.getElementById('time');
let date = document.getElementById('date');
function gettingTiime(){
    let today = new Date;

    const monthNames = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec']

    const dayNames = ['Sat','Sun','Mon','Tues','Wed','Thur','Fri'];

    let currenTime = `${today.getHours() < 9 ? '0'+ today.getHours(): today.getHours()}:${today.getMinutes()  < 9 ? '0'+ today.getMinutes(): today.getMinutes()}:${today.getSeconds()  < 9 ? '0'+ today.getSeconds(): today.getSeconds()}`

    let currentDate = `${dayNames[today.getDay()-6]}, ${today.getDate()} ${monthNames[today.getDate()+1]} ${today.getFullYear()}`;



    time.innerHTML = currenTime;
    date.innerHTML = currentDate;

}
setInterval(gettingTiime,1000)