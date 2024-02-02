let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let button = document.querySelector("#btn");
let nameVar = false;
let emailVar = false;
let passwordVar = false;

name.addEventListener("keyup", nameChange);
email.addEventListener("keyup", emailChange);
password.addEventListener("keyup", passwordChange);

function nameChange() {
  let string = name.value;
  let regex = /^[a-zA-Z0-9]+$/;

  if (!regex.test(string)) {
    name.classList.add("is-invalid");
    nameVar = false;
  } else {
    name.classList.remove("is-invalid");
    nameVar = true;
  }
  setEnable();
}
function emailChange() {
  let string = email.value;
  //magmg.123@gmail.com
  let regex = /^([a-z0-9\.]+)@([a-z]+)\.([a-z]{1,5})$/;
  if (!regex.test(string)) {
    email.classList.add("is-invalid");
    emailVar = false;
  } else {
    email.classList.remove("is-invalid");
    emailVar = true;
  }
  setEnable();
}
function passwordChange() {
  let string = password.value;
  let regex = /^[a-zA-Z0-9\W]{6,20}$/;
  if (!regex.test(string)) {
    password.classList.add("is-invalid");
    passwordVar = false;
  } else {
    password.classList.remove("is-invalid");
    passwordVar = true;
  }
  setEnable();
}

function setEnable() {
  if (nameVar && emailVar && passwordVar) {
    button.classList.add("enabled");
  } else {
    button.classList.remove("disabled");
  }
}
button.addEventListener("click", function (e) {
  e.preventDefault();
  if (nameVar && emailVar && passwordVar) {
    alert(123);
  }
  console.log(e);
});
