const textBox = document.getElementById("textBox")
const tofah = document.getElementById("toFahrenheit")
const tocel = document.getElementById("toCalcius")
const result = document.getElementById("result")


function convert(){
    if(tofah.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        console.log(temp)
    }
};
