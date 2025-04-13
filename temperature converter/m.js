let  celcius = document.getElementById("celcius");
let fahrenheit = document.getElementById("fahrenheit");

function celTofar(){
    let output = ( parseFloat(celcius.value) * 9/5 ) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
    console.log(output)
};
function farTocel(){
    let output = (parseFloat(fahrenheit.value) - 32) *5/9;
    celcius.value = parseFloat(output.toFixed(2));
    console.log(output)
}