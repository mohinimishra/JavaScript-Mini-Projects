// access data from html
let username = document.querySelector('#username')
let email = document.querySelector('#email')
let phone = document.querySelector('#phone')
let pass = document.querySelector('#password')
let cpass = document.querySelector('#cpassword')
let form = document.querySelector('#form')
let msg = document.querySelector('.msg')

// define isEmail function
function isEmail(email) {
    var atSymbol = email.indexOf('@');
    if (atSymbol < 1) {
        return false;
    }
    let dot = email.lastIndexOf('.')
    if (dot <= atSymbol + 2) {
        return false;
    }
    if (dot === email.length - 1) {
        return false;
    }
    else {
        return true;
    }
}

// define setErrorMsg 
function setErrorMsg(input, errorMsg) {
    let formControl = input.parentElement;
    let small = formControl.querySelector('small')
    formControl.className = "form-control error"
    small.innerText = errorMsg;
}

// define setSucessMsg 
function setSucessMsg(input) {
    let formControl = input.parentElement;
    formControl.className = "form-control sucess"
}

// send data 
function sendData(nameVal, s, count) {
    if (s === count) {
        alert('registration Succesfull')
        swal("Welcome! " + nameVal.toUpperCase(), "Registration Sucessfull", "success");
        location.href = `demo.html?username=${nameVal}`
    }
}

// final data validation
function correctData(nameVal) {
    let formcontrol = document.querySelectorAll('.form-control')
    var count = formcontrol.length - 1
    for (let i = 0; i < formcontrol.length; i++) {
        if (formcontrol[i].className === "form-control sucess") {
            var s = i + 0;
            sendData(nameVal, s, count)
            console.log(s)
        }
        else {
            return false
        }
    }
}
// define validate function
function validate() {
    let nameVal = username.value.trim()
    let emailVal = email.value.trim()
    let phoneVal = phone.value.trim()
    let passVal = password.value.trim()
    let cpassVal = cpassword.value.trim()

    if (nameVal === "" || emailVal === "" || phoneVal === "" || passVal === "" || cpassVal === "") {
        msg.innerText = "Please fill all the required fields."
        msg.style.color = "red"
    }
    else {
        correctData(nameVal);
    }
}

// add event on  submit button
form.addEventListener('submit', function (e) {
    e.preventDefault();
    validate();
})

// add event on  username 
username.addEventListener('blur', function () {
    let nameValue = username.value.trim()
    if (nameValue === "") {
        setErrorMsg(username, "username cannot be blank.")
    }
    else if (nameValue.length < 2) {
        setErrorMsg(username, "username atleast have 3 char.")
    }
    else {
        setSucessMsg(username)
    }
})

// add event on  email 
email.addEventListener('blur', function () {
    let emailVal = email.value.trim()
    if (emailVal === "") {
        setErrorMsg(email, "email cannot be blank.")
    }
    else if (!isEmail(emailVal)) {
        setErrorMsg(email, "Not a valid email.")
    }
    else {
        setSucessMsg(email)
    }
})

// add event on  phone
phone.addEventListener('blur', function () {
    let phoneVal = phone.value.trim()
    if (phoneVal === "") {
        setErrorMsg(phone, "phone number cannot be blank.")
    }
    else if (phoneVal.length !== 10) {
        setErrorMsg(phone, "Not a valid number.")
    }
    else {
        setSucessMsg(phone)
    }
})
// add event on  password
pass.addEventListener('blur', function () {
    let passVal = pass.value.trim()
    if (passVal === "") {
        setErrorMsg(pass, "password cannot be blank.")
    }
    else if (pass.length < 5) {
        setErrorMsg(pass, "Atleast 6 char.")
    }
    else {
        setSucessMsg(pass)
    }
})
// add event on  confirm password
cpass.addEventListener('blur', function () {
    let passVal = pass.value.trim()
    let cpassVal = cpass.value.trim()
    if (cpassVal === "") {
        setErrorMsg(cpass, "password cannot be blank.")
    }
    else if (cpassVal !== passVal) {
        setErrorMsg(cpass, "password not matched..")
    }
    else {
        setSucessMsg(cpass)
    }
})