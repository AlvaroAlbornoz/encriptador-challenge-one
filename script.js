const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const btnCopy = document.querySelector(".copiar");
const msgbig = document.querySelector(".mensaje-grande");
const msgsma = document.querySelector(".mensaje-chico");

btnCopy.style.display = "none"

//Encriptar mensaje

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    mensaje.style.backgroundImage="none"
    inputTexto.value = ""
    btnCopy.style.display = "block" 
    msgbig.style.display = "none" /* oculta texto */
    msgsma.style.display = "none"
    /* msgsma.style.visibility = "hidden" */
}

function encriptar(stringEncriptada) {
 
    stringEncriptada = stringEncriptada.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat"); 
    return stringEncriptada; 
      
}


//Desencriptar mensaje

function btnDesencriptar() {
    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    inputTexto.value = "" 
    
}

function desencriptar(stringDesencriptada) {

    stringDesencriptada = stringDesencriptada.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");

    return stringDesencriptada;
}


//botón copiar

function copiar() {
    
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
   /*  mensaje.value = "Texto copiado"; */
}



 