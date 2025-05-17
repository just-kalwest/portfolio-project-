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