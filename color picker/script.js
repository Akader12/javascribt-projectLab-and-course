// let colors = document.querySelectorAll('.color')
// const selectedcolorHex = document.getElementById('selectedColorHex')
// const colorBox = document.querySelector('.colorBox')
// const customHexInput = document.getElementById('customHexInput')
// const copyHexbtn = document.getElementById('copyHexBtn');
// const addCustomColorBtn = document.getElementById('customColorBtn');
// let palette = document.querySelector('.palatte');

// //add event listener to thhe all predifined colr elements
// colors.forEach(colorGet)
// function colorGet (color) {
//     color.addEventListener('click',e=>{
//         const hexCode = e.target.getAttribute('data-hex')
//         selectedcolorHex.textContent = hexCode;
//         colorBox.style.background = hexCode;
//     })
// }

// //copy  hexcode to clipboard

// copyHexbtn.addEventListener('click',event =>{
//     const hexCode = selectedcolorHex.textContent;
//     navigator.clipboard.writeText(hexCode).then(()=>{
//         alert('hexcode copied to clipboard')
//     }).catch(error =>{
//         alert('error copting hexcode ')
//     })
// })


// //add custom color
// addCustomColorBtn.addEventListener('click',(e)=>{
//     const customHexCode = customHexInput.value.trim()

//     //validate hexcode
//     if(/^#[0-9A-F]{6}$/i.test(customHexCode)){
//         const newColor = document.createElement('div');
//         newColor.classList.add('color');
//         newColor.style.backgroundColor = customHexCode;
//         newColor.setAttribute('data-hex',customHexCode);
//         palette.append(newColor);
//         // colors = document.querySelectorAll('.color');
//         // palette = document.querySelector('.palatte');
//         colorGet(newColor)
//     }else{
//         alert('please valid hex code')
//     }
    
// })


let colors = document.querySelectorAll('.color')
const selectedcolorHex = document.getElementById('selectedColorHex')
const colorBox = document.querySelector('.colorBox')
const customHexInput = document.getElementById('customHexInput')
const copyHexbtn = document.getElementById('copyHexBtn');
const addCustomColorBtn = document.getElementById('customColorBtn');
let palette = document.querySelector('.palatte');

colors.forEach(colorGet)
function colorGet(color){
    color.addEventListener("click",e =>{
        const hexCode = e.target.getAttribute('data-hex');
        selectedcolorHex.innerHTML = hexCode;
        colorBox.style.background = hexCode;
    })
}

copyHexbtn.addEventListener("click",e=>{
    const hexCode = selectedcolorHex.textContent;
    navigator.clipboard.writeText(hexCode).then(()=>{
        alert("copied")
    }).catch(e=>{
        alert("error")
    })
})
addCustomColorBtn.addEventListener("click",e=>{
    const customHexCode = customHexInput.value.trim()
    //validate hexcode
    if(/^#[0-9A-F]{6}$/i.test(customHexCode)){
        const newColor = document.createElement("div");
        newColor.classList.add("color");
        newColor.style.background = customHexCode;
        newColor.setAttribute("data-hex",customHexCode);
        palette.append(newColor)
        colorGet(newColor)
    }else{
       alert("plaese inter valid hexcode")
    }
    
})