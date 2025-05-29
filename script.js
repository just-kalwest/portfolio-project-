/*=====log in & sign up start====*/
const passwordAccess = (loginPass, loginEye) =>{
    const input = document.getElementById(loginPass),
          iconEye = document.getElementById(loginEye)

    iconEye.addEventListener('click', () =>{
        // change password to text
        input.type === 'password' ? input.type = 'text'
                                  : input.type = 'password'
        //icon change
        iconEye.classList.toggle('fa fa-eye')
        iconEye.classList.toggle('fa fa-eye-slash')
    })
}
passwordAccess('password','loginPassword')

const form = document.getElementById("form")
const fullName = document.getElementById("fullName")
const emailRegister = document.getElementById("emailRegister")
const passwordCreate = document.getElementById("passwordCreate")
const passwordConfirm = document.getElementById("passwordConfirm")
const emailLogin = document.getElementById("emailLogin")
const password = document.getElementById("password")
const buttonLogin = document.getElementById("buttonLogin")
const buttonSignUp = document.getElementById("buttonSignUp")


form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs();
})

const validateInputs = () => {
    const fullName = document.getElementById("fullName")
    const emailRegister = document.getElementById("emailRegister")
    const passwordCreate = document.getElementById("passwordCreate")
    const passwordConfirm = document.getElementById("passwordConfirm")
    const emailLogin = document.getElementById("emailLogin")
    const password = document.getElementById("password")

    if(fullName === '') {
        setError(fullName, 'Full name is required');
    } else {
        setSuccess(fullName);
    }

    if(emailRegister === '') {
        setError(emailRegister, 'Email is required');
    } else if (!isValidEmail(emailRegister)) {
        setError(emailRegister, 'Provide a valid email address');
    } else{
        setSuccess(emailRegister);
    }

    if(passwordCreate === '') {
        setError(passwordCreate, 'Password is required');
    } else if (passwordCreate.length < 8) {
        setError(passwordCreate, 'Password must be at least 8 character');
    } else {
        setSuccess(passwordCreate)
    }

    if(passwordConfirm === '') {
        setError(passwordConfirm, 'Please confirm your password');
    } else if(passwordConfirm !== passwordCreate) {
        setError(passwordConfirm, "Passwords doesn't match");
    } else{
        setSuccess(passwordConfirm);
    }

    if(fullName === '') {
        setError(fullName, 'Full name is required');
    } else {
        setSuccess(fullName);
    }

    if(fullName === '') {
        setError(fullName, 'Full name is required');
    } else {
        setSuccess(fullName);
    }
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
}
console.log(fullName)
fullName.addEventListener("input", (event) => { 
    console.log(event.target.value)
})

console.log(emailRegister)
emailRegister.addEventListener("input", (event) => { 
    console.log(event.target.value)
})

console.log(passwordCreate)
passwordCreate.addEventListener("input", (event) => { 
    console.log(event.target.value)
})

console.log(passwordConfirm)
passwordConfirm.addEventListener("input", (event) => { 
    console.log(event.target.value)
})

console.log(emailLogin)
emailLogin.addEventListener("input", (event) => { 
    console.log(event.target.value)
})

console.log(password)
password.addEventListener("input", (event) => { 
    console.log(event.target.value)
})


/*=====show or hide log in & sign up====*/
const loginAccessRegister = document.getElementById('loginAccessRegister')
      buttonRegister = document.getElementById('loginButtonRegister')
      buttonAccess = document.getElementById('loginButtonAccess')

buttonRegister.addEventListener('click', ()=>{
    loginAccessRegister.classList.add('active')
})

buttonAccess.addEventListener('click', ()=>{
    loginAccessRegister.classList.remove('active')
})
/*=====log in & sign up end====*/

