let generateBtn = document.getElementById("generate");
// console.log(generateBtn)
let result = document.getElementById("result");
function randomNUm(){
    let min = document.getElementById("min");
    let max = document.getElementById("max")
    let minValue = Number(min.value)
    let maxValue = Number(max.value)
    if(minValue > maxValue){
        minValue = maxValue + minValue;  //minvalue = 10 + 20 = 30  ||9+3=12
        maxValue = minValue - maxValue;  //maxValue = 30- 10 = 20  ||  12-      
        minValue = minValue - maxValue; //minvalue = 30-20  ||
        min.value = minValue;
        max.value = maxValue; 
        console.log(minValue,maxValue)      
    }
    let num = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;    
    result.textContent = num;
}
window.addEventListener("load",randomNUm());
generateBtn.addEventListener("click", randomNUm)































// let generateBtn = document.getElementById("generate");
// let result = document.getElementById("result")
// let min1 = document.getElementById("min");
// let max1 = document.getElementById("max");

// let random;
// generateBtn.addEventListener("click", () => {
//    let max = Number(max1.value);
//    let min = Number(min1.value);
//    random = Math.floor(Math.random() * (max - min)) + min;
//    result.textContent = random;
// });

