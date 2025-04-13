let fileInput = document.getElementById("flle-input");
let fileList = document.getElementById("files-list");
let numOfFiles = document.getElementById("num-of-files");

fileInput.addEventListener("change", () =>{
    fileList.innerHTML = "";
    numOfFiles.textContent = `${fileInput.files.length} files selected`;

    for(i of fileInput.files){
        console.log(i)
        let reader = new FileReader();
        let listItem = document.createElement("li")
        let fileName = i.name;
        let fileSize = (i.size / 1024).toFixed(1);
        listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}KB</p>`;

        if(fileSize >= 1023){
            fileSize = (fileSize / 1024).toFixed(1);
            listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}MB</p>`;
        }

        fileList.appendChild(listItem)

    }
})