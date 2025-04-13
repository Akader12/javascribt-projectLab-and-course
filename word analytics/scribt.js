document.getElementById('textInput').addEventListener('input',event=>{

    const inputFeildValue = event.target.value;
    const wordCount = inputFeildValue.trim().split(/\s+/).filter(word => word.length >0).length;
    const charCount = inputFeildValue.length;
    document.getElementById('word-count').textContent = wordCount;
    document.getElementById('char-count').textContent = charCount;
    const twitterLimit = 200 - charCount;
    const facebookLimit = 63206 - charCount;
    document.getElementById('twitter-limit').textContent = twitterLimit >= 0 ? twitterLimit : 0
    document.getElementById('facebook-limit').textContent = facebookLimit >= 0 ? facebookLimit : 0;

    if(document.querySelector('.twitter-limit').textContent === '0'){
        document.querySelector('.twitter-limit').parentElement.classList.add('Facebook')
    }else{
        document.querySelector('.twitter-limit').parentElement.classList.remove('Facebook');
    }
    if(document.querySelector('.facebook-limit').textContent === '0'){
        document.querySelector('.facebook-limit').parentElement.classList.add('Facebook')
    }else{
        document.querySelector('.facebook-limit').parentElement.classList.remove('Facebook');
    }
    
    if(document.querySelector('.facebook-limit').textContent === '0' && document.querySelector('.twitter-limit').textContent === '0'){
        document.querySelector('.textInput').classList.add('gaduud')
        document.querySelector('.container').classList.add('gaduud');
        document.getElementById('char-count').parentElement.style.border = '2px solid red';
        document.getElementById('word-count').parentElement.style.border = '2px solid red';
       

    }


})