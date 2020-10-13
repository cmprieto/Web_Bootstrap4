const form = document.getElementById("myFormLogin");

window.onload = function() {
  document.getElementById("loginEmail").focus();
}

function registerValidateLogin() {
  var acumErrores = 0;

  form.classList.remove("is-invalid");

  var inputEmail = document.getElementById("loginEmail");

  var inputPassword = document.forms["myFormLogin"]["loginPassword"];

  var gridCheck = document.forms["myFormLogin"]["gridLoginCheck"];



  if (inputEmail.value == "") {
    inputEmail.classList.add("is-invalid");
    document.getElementById("errorLoginEmail").textContent =
      "Es campo es obligatorio";
    acumErrores++;
  } else if (!validar_email(inputEmail.value)) {
    inputEmail.classList.add("is-invalid");
    document.getElementById("errorLoginEmail").textContent =
      "El email no cumple con el formato";
    acumErrores++;
  }

  if (inputPassword.value == "") {
    inputPassword.classList.add("is-invalid");
    document.getElementById("errorLoginPassword").textContent =
      "Debes introducir la contraseña";
    acumErrores++;
  }


  if (acumErrores > 0) {
    return false;
  } else {
    return true;
  }
}

form.addEventListener(
  "blur",
  (event) => {
    console.log(event);
    if (event.target.value != "") event.target.classList.remove("is-invalid");
    //registerValidate();
  },
  true
);

function validar_email(email) {
  var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email) ? true : false;
}
