const chargeLevel = document.getElementById('charge-level');
const charge = document.getElementById("charge");
const chargingTimeRem = document.getElementById("charging-time");

window.onload = () =>{
    //for browsers thas don't support the battery status API
    if(!navigator.getBattery){
        alert(`Battery status api is not supported in your Browser`);
        return false;
    }
};
navigator.getBattery().then(battery =>{
    function updateAllBatteryInfo(){
        updateChargingInfo();
        updateLevelInfo()
    }
    updateAllBatteryInfo()

//when the charging status change

    battery.addEventListener("chargingchange", () =>{
        updateAllBatteryInfo();
    })

    //when the battery levels change
    battery.addEventListener("levelcharging",() =>{
        updateAllBatteryInfo();
    })

    function updateChargingInfo(){
        if(battery.charging){
            charge.classList.add("active");
            chargingTimeRem.innerHTML = "";
        }else{
            charge.classList.remove("active");
            //displaying time left to discharge only when its an integer value i.e not infinty
            if(parseInt(battery.dischargingTime)){
                let hr = parseInt(battery.dischargingTime / 3600);
                let min = parseInt(battery.dischargingTime / 60 - hr * 60);
                chargingTimeRem.innerText = `${hr}hr ${min} minutes remaining`
            }
        }
    }

    //update battery level
    function updateLevelInfo(){
        console.log()
        let batteryLevel = `${parseInt(battery.level*100)}%`;
        charge.style.width = batteryLevel;
        chargeLevel.textContent  = batteryLevel
    }
})
