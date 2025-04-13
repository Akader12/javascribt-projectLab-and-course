let inputTextArae = document.querySelector(".input-textarea");
let characCount = document.querySelector(".charac-count");
let wordCount = document.querySelector(".word-count")


inputTextArae.addEventListener("input", () =>{
    //count number of characters
    characCount.textContent = inputTextArae.value.length;

    let txt = inputTextArae.value.trim();
    wordCount.textContent = txt.split(/\s+/).filter((item) => item).length
});