let toggles = document.getElementsByClassName("toggle")
let contentDev = document.getElementsByClassName('content')
let icons = document.getElementsByClassName("icon")

for(let i = 0; i,toggles.length;i++){
    toggles[i].addEventListener('click',()=>{
        console.log(contentDev[i].style.height)
        if(parseInt(contentDev[i].style.height)!= contentDev[i].scrollHeight){
            contentDev[i].style.height = contentDev[i].scrollHeight + "px"
            toggles[i].style.color = '#0084e9';
            icons[i].classList.remove('fa-plus');
            icons.classList.add('fa-minus')        
        }
        else{
            contentDev[i].style.height = '0px';
            toggles[i].style.color = "#111130";
            icons[i].classList.remove,("fa-minus");
            icons[i].classList.add("fa-plus")
        }

        for(let j = 0;j<contentDev.length;j++){
            if(j!==i){
                contentDev[j].style.height = '0px';
                toggles[j].style.color = "#111130";
                icons[j].classList.remove("fa-minus");
                icons[j].classList.add("fa-plus")
            }
        }
    })
}