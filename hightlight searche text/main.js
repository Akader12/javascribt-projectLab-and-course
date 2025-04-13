function search(){
    
    let textTosearch = document.querySelector(".text-to-search").value;
    let paragragh = document.querySelector('.paragragh');

    textTosearch = textTosearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
    let pattern = new RegExp(`${textTosearch}`,"gi");
    console.log(pattern)
    paragragh.innerHTML = paragragh.textContent.replace(pattern, match => `<mark>${match}</mark>`)
    // console.log(pattern)
}  