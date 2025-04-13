let touchArea = document.getElementById("touch-area");
let output = document.getElementById('output');

//inital mouse X and Y are 0

let mouseX,initialX = 0;
let mouseY,initialY = 0;
let isSwiped;


//Events for touch and mouse
let events = {
    mouse:{
        down: 'mousedown',
        move: 'mousemove',
        up: 'mouseup'
    },
    Touch:{
        down: 'touchstart',
        move: 'touchmove',
        up: 'touchend'
    }
}

let deviceType;

//Detect touch device

const isTouchDevice = ()=>{
    try{
        //we try to create touchEvent(it would fail for desktps and throws error)
        document.createEvent('TouchEvent');
        deviceType = 'touch';
        return true
    }
    catch(e){
        deviceType = 'mouse';
        return false
    }
}

// get left and top of touch area
let rectLeft = touchArea.getBoundingClientRect().left;
let rectTop = touchArea.getBoundingClientRect().top;

//get exact X and Y position of mouse/touch

const getXY = (e) =>{
    mouseX = (!isTouchDevice() ? e.pageX: e.touches[0].pageX) - rectLeft;
    mouseY = (!isTouchDevice() ? e.pageY: e.touches[0].pageY) - rectTop;
}

isTouchDevice();
//start swipe
touchArea.addEventListener(events[deviceType].down, (event)=>{
    isSwiped = true;
    //get X and Y position
    getXY(event);
    initialX = mouseX;
    initialY = mouseY;
})

//mouse move / touchmove
touchArea.addEventListener(events[deviceType].move,(event)=>{
    if(!isTouchDevice){
        event.preventDefualt();
    }
    if(isSwiped){
        getXY(event);
        let diffX = mouseX - initialX;
        let diffY = mouseY - initialY;
        if(Math.abs(diffY) > Math.abs(diffX)){
            output.innerHTML = diffY > 0 ? 'Down':'Up'
        }else{
            output.innerHTML = diffX > 0 ? 'Right':'Left'
        }
    }
})

//stop drawwing
touchArea.addEventListener(events[Touch].up,()=>{
    isSwiped = false;
});
// touchArea.addEventListener('mouseleave',()=>{
//     isSwiped = false;
// })
window.onload = ()=>{
    isSwiped = false;
}
