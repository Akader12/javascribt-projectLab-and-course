//all elements
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const form = document.querySelector('.form');

const showError = (input,message) =>{
    let parent = input.parentElement;
    parent.classList.add('error');
    const small = parent.querySelector('small');
    const successIcon = parent.querySelectorAll("i")[0];
    const errorIcon = parent.querySelectorAll("i")[1];

    errorIcon.style.visibility = "visible";
    successIcon.style.visibility = "hidden";
    small.innerText = message;
}

const showSuccess = (input) =>{
    let parent = input.parentElement;
    parent.classList.remove('error');
    parent.classList.add('success');
    const small = parent.querySelector('small');
    const successIcon = parent.querySelectorAll("i")[0];
    const errorIcon = parent.querySelectorAll("i")[1];

    errorIcon.style.visibility = "hidden";
    successIcon.style.visibility = "visible";
}

const checkEmpty = (elements) => {
    elements.forEach(element => {
        if(element.value === ''){
            showError(element,'input required')
        }else{
            showSuccess(element)
        }
    });

}


const checkEmail = (email) =>{
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(regex.test(email.value)){
        showSuccess(email)
    }else{
        showError(email, 'invalid Emaila')
    }
}
const checkPasswordLength = (input, min, max)=>{
    if(input.value.length < min){
        showError(input,'password atleast 6 characters')
    }else if(input.value.length > max){
        showError(input,'password maximum reached')
    }else{
        showSuccess(input)
    }

} 

const checkEqulity = (input1,input2)=>{
    if(input1.value === input2.value){
        showSuccess(input2)
    }else{
        showError(input2,'password is not mathched')
    }
}

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    checkEmpty([username,email,password,confirmPassword]);
    checkEmail(email);
    checkPasswordLength(password, 6,10);
    checkPasswordLength(confirmPassword, 6,10);
    checkEqulity(password,confirmPassword);
});