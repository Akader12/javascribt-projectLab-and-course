const myDiv = document.querySelector(".my-div")
function isTouchDevice(){
    try{
        document.createEvent("TouchEvent")
        return true
    }
    catch (e){
        return false
    }
}
const move = (e) =>{
    try{
        var x = !isTouchDevice() ? e.pageX: e.touches[0].pageX;
        var y = !isTouchDevice() ? e.pageY: e.touches[0].pageY;
    }
    catch(e){}
    myDiv.style.left = x + "px"
    myDiv.style.top = y + "px"
};
document.addEventListener("mousemove", (e) =>{
    move(e)
});

// let myDive = document.querySelector('.my-div');
// function isTouchDevice(){
//     try{
//         document.createEvent("TouchEvent")
//         return true
//     }
//     catch (e){
//         return false
//     }

// }
// const move = (e) =>{
//     try{
//         var x = !isTouchDevice() ? e.pageX: e.touches[0].pageX;
//         var y = !isTouchDevice() ? e.pageY: e.touches[0].pageY;
//     }
//     catch(e){}
//     myDive.style.left = x + "px"
//     myDive.style.top = y + "px"
// };
// document.addEventListener("mousemove", (e) =>{
//     move(e)
// });