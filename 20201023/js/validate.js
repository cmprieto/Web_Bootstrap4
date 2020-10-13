// ------------------------------- CODIGO REGISTRO NUEVO USUARIO

const form = document.getElementById("myFormId");

window.onload = function() {
  document.getElementById("inputEmail").focus();
}
function registerValidate() {
  var acumErrores = 0;
  form.classList.remove("is-invalid");
  //var inputEmail = document.forms["myForm"]["inputEmail"];
  var inputNombre = document.getElementById("inputNombre");
  var inputEmail = document.getElementById("inputEmail");
  var inputPassword = document.forms["myForm"]["inputPassword"];
  var inputConfirmPassword = document.forms["myForm"]["inputConfirmPassword"];
  var inputProvince = document.forms["myForm"]["inputProvince"];
  var inputCity = document.forms["myForm"]["inputCity"];
  var inputZip = document.forms["myForm"]["inputZip"];
  var gridCheck = document.forms["myForm"]["gridCheck"];


  if (inputNombre.value == "") {
    inputNombre.classList.add("is-invalid");
    document.getElementById("errorNombre").textContent =
      "Este campo es obligatorio";
    acumErrores++;
  }

  if (inputEmail.value == "") {
    inputEmail.classList.add("is-invalid");
    document.getElementById("errorEmail").textContent =
      "Este campo es obligatorio";
    acumErrores++;
  } else if (!validar_email(inputEmail.value)) {
    inputEmail.classList.add("is-invalid");
    document.getElementById("errorEmail").textContent =
      "El email no cumple el formato";
    acumErrores++;
  }

  if (inputPassword.value == "") {
    inputPassword.classList.add("is-invalid");
    document.getElementById("errorPassword").textContent =
      "Este campo es obligatorio";
    acumErrores++;
  }

  if (inputConfirmPassword.value == "") {
    inputConfirmPassword.classList.add("is-invalid");
    document.getElementById("errorConfirmPassword").textContent =
      "Este campo es obligatorio";
    acumErrores++;
  } else if (inputPassword.value != inputConfirmPassword) {
    inputPassword.classList.add("is-invalid");
    inputConfirmPassword.classList.add("is-invalid");
    document.getElementById("errorPassword").textContent =
      "La contraseña y su confimación no coinciden";
    document.getElementById("errorConfirmPassword").textContent =
      "La contraseña y su confimación no coinciden";
    acumErrores++;
  }

  if (inputProvince.value == "") {
    inputProvince.classList.add("is-invalid");
    document.getElementById("errorProvince").textContent =
      "La provincia es obligatoria";
    acumErrores++;
  }

  if (inputCity.value == "") {
    inputCity.classList.add("is-invalid");
    document.getElementById("errorCity").textContent = "Falta la ciudad";
    acumErrores++;
  }

  if (inputZip.value == "" || inputZip.value.length != 5) {
    inputZip.classList.add("is-invalid");
    document.getElementById("errorZip").textContent =
      "El codi postal no cumple los requisitos";
    acumErrores++;
  }

  if (!gridCheck.checked) {
    gridCheck.classList.add("is-invalid");
    document.getElementById("errorCheck").textContent =
      "Debes aceptar las bases";
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

//------------------------------------------- CODIGO LOGIN


const form1 = document.getElementById("myFormIdLogin");

function registerValidateLogin() {
  var acumErrores1 = 0;

  form.classList.remove("is-invalid");

  var inputEmail1 = document.getElementById("loginEmail");

  var inputPassword1 = document.forms["myFormIdLogin"]["loginPassword"];

  var gridCheck1 = document.forms["myFormIdLogin"]["gridLoginCheck"];

  if (inputEmail1.value == "") {
    inputEmail1.classList.add("is-invalid");
    document.getElementById("errorLoginEmail").textContent =
      "Es campo es obligatorio";
    acumErrores++;
  } else if (!validar_email(inputEmail1.value)) {
    inputEmail1.classList.add("is-invalid");
    document.getElementById("errorLoginEmail").textContent =
      "El email no cumple con el formato";
    acumErrores++;
  }

  if (inputPassword1.value == "") {
    inputPassword1.classList.add("is-invalid");
    document.getElementById("errorLoginPassword").textContent =
      "Debes introducir la contraseña";
    acumErrores++;
  }


  if (acumErrores1 > 0) {
    return false;
  } else {
    return true;
  }
}
/* 
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
 */


























/* 
const login = document.getElementById("loginUser");

// SETTING ALL EVENT LISTENERS

inputEmail1.addEventListener('blur',nameVerify ,true);
inputPassword1.addEventListener('blur',mailVerify ,true);



//	FUNCIONES

function registerLogin() {
  var acumErrores1 = 0;
  loginUser.classList.remove("is-invalid");

  var inputEmail1 = document.getElementById("inputEmail1");
  var inputPassword1 = document.forms["loginUser"]["inputPassword1"];

  if (inputEmail1.value == "") {
    inputEmail1.classList.add("is-invalid");
    document.getElementById("errorEmail1").textContent =
      "Este campo es obligatorio";
    acumErrores1++;
  } else if (!validar_email(inputEmail1.value)) {
    inputEmail1.classList.add("is-invalid");
    document.getElementById("errorEmail1").textContent =
      "El email no cumple el formato";
    acumErrores1++;
  }

  if (inputPassword1.value == "") {
    inputPassword1.classList.add("is-invalid");
    document.getElementById("errorPassword1").textContent =
      "Este campo es obligatorio";
    acumErrores1++;
  }

  if (!gridCheck1.checked) {
    gridCheck1.classList.add("is-invalid");
    document.getElementById("errorCheck1").textContent =
      "Debes aceptar las bases";
    acumErrores1++;
  }

  if (acumErrores1 > 0) {
    return false;
  } else {
    return true;
  }
}

 */

/* 
loginUser.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);
 */

