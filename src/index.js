//Declaro variable texto de usuario y traigo texto 
let string = document.getElementById("user_text");
//Llamo botón keyNumber
const offset = document.getElementById("offset");
//Llamo botón codificar
const buttonEncode = document.getElementById("encode_button");
//Llamo botón decodificar
const buttonDecode = document.getElementById("decode_button");
//Llamo caja respuesta
let answer = document.getElementById("answer_f");
//Llamo evento decode
buttonEncode.addEventListener("click",() => {
answer.value = window.cipher.encode(parseInt(offset.value),string.value);
})
//Llamo evento code
buttonDecode.addEventListener("click",() => {
answer.value = window.cipher.decode(parseInt(offset.value),string.value);
})
