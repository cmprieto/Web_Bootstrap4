// SELECTING ALL TEXT ELEMENTS
var libro = document.form.textoBuscar;
// SELECTING ALL ERROR DISPLAY ELEMENTS
var buscador_error = document.getElementById("buscador_error");
//setting all event listeners

libro.addEventListener("blur", buscador, true);


 window.onload = function() {
  /*document.getElementById("textoBuscar").style.backgroundColor = "#e36387"; */
  document.getElementById("textoBuscar").style.border = "1px solid black";
  libro.style.color = "black"; // DA COLOR AL TEXTO
} 

// validation function

function Validate() {
  if (libro.value == "") {
    libro.style.border = "1px solid red";
    /* libro.style.color = "white"; */ // DA COLOR AL TEXTO DEL ERROR
    document.getElementById("textoBuscar").style.backgroundColor = "#ddf3f5";
    buscador_error.textContent = "Debes introducir un título";
    libro.focus();
    return false;
  }

  if (libro.value.length < 4) {
    libro.style.border = "1px solid red";
    /* libro.style.color = "#ddf3f5";  */// DA COLOR AL TEXTO DEL ERROR
    buscador_error.textContent = "El título debe contener más de 3 carácteres";
    libro.focus();
    return false;
  }
}

// EVENT HANDLER FUNCTIONS

function buscador() {
  if (libro.value != "" && libro.value.length > 3) {
    libro.style.border = "1px solid green";
    /*     document.getElementById("boton").style.color = "";  */ // DA COLOR AL TEXTO DEL ERROR
    
    /* libro.style.color = "white"; */
    buscador_error.textContent = "";
    alert("Cuando encontremos el libro "+ libro.value +" le enviaremos un email");
    return true;
  }
}
