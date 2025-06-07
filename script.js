const loginBtn = document.getElementById("buttonLogin");
const email = document.getElementById("emailLogin");
const password = document.getElementById("password");
const signUpBtn = document.getElementById("buttonSignUp");
const fullName = document.getElementById("fullName").value;
const emailInput = document.getElementById("emailRegister");
const passwordInput = document.getElementById("passwordCreate");
const confirmPassword = document.getElementById("passwordConfirm");

/*=====log in & sign up start====*/
const passwordAccess = (loginPass, loginEye) =>{
    const input = document.getElementById(loginPass),
          iconEye = document.getElementById(loginEye)

    iconEye.addEventListener('click', () =>{
        // change password to text
        input.type === 'password' ? input.type = 'text'
                                  : input.type = 'password'
        //icon change
        iconEye.classList.toggle('fa fa-eye');
        iconEye.classList.toggle('fa fa-eye-slash');
    })
}
passwordAccess('password','loginPassword');

// const form = document.getElementById("form")
// const fullName = document.getElementById("fullName")
// const emailRegister = document.getElementById("emailRegister")
// const passwordCreate = document.getElementById("passwordCreate")
// const passwordConfirm = document.getElementById("passwordConfirm")
// const emailLogin = document.getElementById("emailLogin")
// const password = document.getElementById("password")
// const buttonLogin = document.getElementById("buttonLogin")
// const buttonSignUp = document.getElementById("buttonSignUp")


// form.addEventListener('submit', e =>{
//     e.preventDefault();

//     validateInputs();
// })

// const validateInputs = () => {
//     const fullName = document.getElementById("fullName")
//     const emailRegister = document.getElementById("emailRegister")
//     const passwordCreate = document.getElementById("passwordCreate")
//     const passwordConfirm = document.getElementById("passwordConfirm")
//     const emailLogin = document.getElementById("emailLogin")
//     const password = document.getElementById("password")

//     if(fullName === '') {
//         setError(fullName, 'Full name is required');
//     } else {
//         setSuccess(fullName);
//     }

//     if(emailRegister === '') {
//         setError(emailRegister, 'Email is required');
//     } else if (!isValidEmail(emailRegister)) {
//         setError(emailRegister, 'Provide a valid email address');
//     } else{
//         setSuccess(emailRegister);
//     }

//     if(passwordCreate === '') {
//         setError(passwordCreate, 'Password is required');
//     } else if (passwordCreate.length < 8) {
//         setError(passwordCreate, 'Password must be at least 8 character');
//     } else {
//         setSuccess(passwordCreate)
//     }

//     if(passwordConfirm === '') {
//         setError(passwordConfirm, 'Please confirm your password');
//     } else if(passwordConfirm !== passwordCreate) {
//         setError(passwordConfirm, "Passwords doesn't match");
//     } else{
//         setSuccess(passwordConfirm);
//     }

//     if(fullName === '') {
//         setError(fullName, 'Full name is required');
//     } else {
//         setSuccess(fullName);
//     }

//     if(fullName === '') {
//         setError(fullName, 'Full name is required');
//     } else {
//         setSuccess(fullName);
//     }
// }

// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success');
// }

// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// }

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// }
// console.log(fullName)
// fullName.addEventListener("input", (event) => { 
//     console.log(event.target.value)
// })

// console.log(emailRegister)
// emailRegister.addEventListener("input", (event) => { 
//     console.log(event.target.value)
// })

// console.log(passwordCreate)
// passwordCreate.addEventListener("input", (event) => { 
//     console.log(event.target.value)
// })

// console.log(passwordConfirm)
// passwordConfirm.addEventListener("input", (event) => { 
//     console.log(event.target.value)
// })

// console.log(emailLogin)
// emailLogin.addEventListener("input", (event) => { 
//     console.log(event.target.value)
// })

// console.log(password)
// password.addEventListener("input", (event) => { 
//     console.log(event.target.value)
// })


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


  // LOGIN FUNCTIONALITY
  async function loginUser() {
    const email = document.getElementById("emailLogin").value.trim();
    const password = document.getElementById("password").value;

    const loginBtn = document.getElementById("buttonLogin");
    const spinner = loginBtn.querySelector(".spinner");
    const btnText = loginBtn.querySelector(".btn-text");

    try {
      spinner?.classList.remove("hidden");
      btnText && (btnText.textContent = "Logging in...");

      const response = await fetch("https://jodna-portfolio.onrender.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data);

      if (data.message === "successful") {
        localStorage.setItem("userId", data.data.user._id);
        window.location.href = "./explore.html";
      } else {
        alert(data.message || "Login failed.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred while trying to log in.");
    } finally {
      spinner?.classList.add("hidden");
      btnText && (btnText.textContent = "Login");
    }
  }

  // REGISTER FUNCTIONALITY
  async function registerUser() {
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("emailRegister").value.trim();
    const password = document.getElementById("passwordCreate").value.trim();
    const confirmPassword = document.getElementById("passwordConfirm").value.trim();

    const registerBtn = document.getElementById("buttonSignUp");
    const spinner = registerBtn.querySelector(".spinner");
    const btnText = registerBtn.querySelector(".btn-text");

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const [firstname, ...rest] = fullName.split(" ");
    const lastname = rest.join(" ") || "";

    try {
      spinner?.classList.remove("hidden");
      btnText && (btnText.textContent = "Registering...");

      const response = await fetch("https://jodna-portfolio.onrender.com/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstname, lastname, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        window.location.href = "./login.html";
        console.log("Registered:", data);
      } else {
        alert(data.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("An error occurred during registration.");
    } finally {
      spinner?.classList.add("hidden");
      btnText && (btnText.textContent = "Sign Up ➜");
    }
  }

  // ATTACH EVENT LISTENERS
  document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("form");
    const registerForm = document.querySelector(".login-form");

    loginForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      loginUser();
    });

    registerForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      registerUser();
    });
  });

/* fetch("https://portfolio-backend-kj30.onrender.com/")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error)); */

 document.addEventListener("DOMContentLoaded", () => {
  // Helper functions
  const isValidEmail = (email) => {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Login form validation
  const loginForm = document.querySelector("#loginAccessRegister .login-access form");
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailInput = loginForm.querySelector("#emailLogin");
    const passwordInput = loginForm.querySelector("#password");
    let valid = true;

    // Clear previous errors
    loginForm.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

    if (!emailInput.value.trim()) {
      emailInput.nextElementSibling.nextElementSibling.textContent = "Email is required";
      valid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      emailInput.nextElementSibling.nextElementSibling.textContent = "Invalid email format";
      valid = false;
    }

    if (!passwordInput.value.trim()) {
      passwordInput.nextElementSibling.nextElementSibling.textContent = "Password is required";
      valid = false;
    } else if (passwordInput.value.trim().length < 6) {
      passwordInput.nextElementSibling.nextElementSibling.textContent = "Password must be at least 6 characters";
      valid = false;
    }

    if (valid) {
      // Submit the form or do something else
      console.log("Login form valid!");
      loginForm.submit(); // Remove if you handle submission with JS
    }
  });

  // Register form validation
  const registerForm = document.querySelector("#loginAccessRegister .login-register form");
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullNameInput = registerForm.querySelector("#fullName");
    const emailInput = registerForm.querySelector("#emailRegister");
    const passwordCreateInput = registerForm.querySelector("#passwordCreate");
    const passwordConfirmInput = registerForm.querySelector("#passwordConfirm");
    let valid = true;

    // Clear previous errors
    registerForm.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

    if (!fullNameInput.value.trim()) {
      fullNameInput.nextElementSibling.nextElementSibling.textContent = "Full Name is required";
      valid = false;
    }

    if (!emailInput.value.trim()) {
      emailInput.nextElementSibling.nextElementSibling.textContent = "Email is required";
      valid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      emailInput.nextElementSibling.nextElementSibling.textContent = "Invalid email format";
      valid = false;
    }

    if (!passwordCreateInput.value.trim()) {
      passwordCreateInput.nextElementSibling.nextElementSibling.textContent = "Password is required";
      valid = false;
    } else if (passwordCreateInput.value.trim().length < 8) {
      passwordCreateInput.nextElementSibling.nextElementSibling.textContent = "Password must be at least 8 characters";
      valid = false;
    }

    if (!passwordConfirmInput.value.trim()) {
      passwordConfirmInput.nextElementSibling.nextElementSibling.textContent = "Please confirm your password";
      valid = false;
    } else if (passwordConfirmInput.value.trim() !== passwordCreateInput.value.trim()) {
      passwordConfirmInput.nextElementSibling.nextElementSibling.textContent = "Passwords do not match";
      valid = false;
    }

    if (valid) {
      // Submit the form or do something else
      console.log("Register form valid!");
      registerForm.submit(); // Remove if you handle submission with JS
    }
  });
});

