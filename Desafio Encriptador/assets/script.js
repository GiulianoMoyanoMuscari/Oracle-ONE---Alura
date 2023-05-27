function mostrarEncriptar() {
  let contendorMensaje = document.querySelector(".container-mensaje") // traigo el contenedor del msj inicial para luego hacer display: "none"
  let contendorResultado = document.querySelector(".container-resultado") // traigo el contenedor que mostrara el texto cifrado y el boton copiar para luego hacer display: "flex"
  
  let resultado = document.querySelector(".texto-resultado") // traigo la etiqueta p que albergará el texto cifrado
  
  // --------------- Cifrado --------------- //
  let inputText = document.querySelector(".text-area").value; //recupera el texto escrito en el text-area y lo  almacena en inputText
  let textoEncriptado = inputText  //Al texto recuperado le hace los remplazos y guarda el resultado en texto encriptado
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  // --------------- fin --------------- //
  
// --------------- Mostrando el Resultado --------------- //
  if (inputText.length != 0) {
    resultado.textContent = textoEncriptado;
    contendorMensaje.style.display = "none";
    contendorResultado.style.display = "flex";
  }
  else{
    contendorMensaje.style.display = "flex";
    contendorResultado.style.display = "none";
  }
}


function copiarTexto() {
  let inputText = document.querySelector(".text-area"); //traigo la etiqueta textarea que contiene el input ingresado

  let resultado = document.querySelector(".texto-resultado"); //traigo la etiqueta p que contiene el texto cifrado
  let textoCopiado = resultado.textContent; //creo esta variable para almacenar el contenido de la etiqueta p
  

  navigator.clipboard.writeText(textoCopiado) //guarda en el portapapeles el contenido de textoCopiado
  .then(() => { //Una vez guardado en el portapapeles quiero que haga lo siguiente
    
    // Mostrar mensaje de éxito en la pantalla
    alert("Texto copiado al portapapeles");

    //Vaciar la etiqueta del input
    inputText.value = ""
  });
}


function mostrarDesencriptar() {
  let contendorMensaje = document.querySelector(".container-mensaje");
  let contendorResultado = document.querySelector(".container-resultado");
  
  let resultado = document.querySelector(".texto-resultado");

  
  // --------------- Desencriptado --------------- //
  let inputText = document.querySelector(".text-area").value;
  let textoDesencriptado = inputText
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  // --------------- fin --------------- //


// --------------- Mostrando el Resultado --------------- //
  if (inputText.length != 0) {
    resultado.textContent = textoDesencriptado;
    contendorMensaje.style.display = "none";
    contendorResultado.style.display = "flex";
  } else {
    contendorMensaje.style.display = "flex";
    contendorResultado.style.display = "none";
  }
}





