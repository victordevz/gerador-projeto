let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
let newPassword = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function () {
    sizePassword.innerHTML = this.value;
}

buttonElement.onclick = function () {
    newPassword = generatePassword(parseInt(sliderElement.value));
    passwordElement.innerHTML = newPassword;
    containerPassword.classList.remove("hide");
}

function generatePassword() {
    let pass = "";
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    newPassword = pass;
}

function copyPassword(){
    let password2 = document.querySelector("#password").innerHTML;
    navigator.clipboard.writeText(password2);
}
