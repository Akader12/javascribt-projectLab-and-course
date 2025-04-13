const mytext = document.getElementById("my-text");
const result = document.getElementById("result");
let limit = 60;

mytext.addEventListener("input", function (){
    var textLength = mytext.value.length
    result.textContent = textLength + "/" + limit;

    if(textLength > limit){
        mytext.style.borderColor = "#ff2851";
        result.style.color = " #ff2851";
    } else{
        mytext.style.borderColor = '#b2b2b2';
        result.style.color = "#737373"
        }
})


























// var mytext = document.getElementById("my-text");
// var result = document.getElementById("result");
// var limit = 60
// result.textContent = 0 + "/" + limit;

// mytext.addEventListener("input", function(){
//     var textLength = mytext.value.length;
//     result.textContent = textLength + "/" + limit;
//     if(textLength > limit){
//         mytext.style.borderColor = "#ff2851";
//         result.style.color = " #ff2851";
//     }
//     else{
//         mytext.style.borderColor = '#b2b2b2';
//         result.style.color = "#737373"
//     }
// });