//Declaro variable texto de usuario y traigo texto 
let string = document.getElementById("user_text");
//Llamo botón keyNumber
let offset = document.getElementById("offset");
//Llamo botón codificar
const buttonEncode = document.getElementById("encode_button");
//Llamo botón decodificar
const buttonDecode = document.getElementById("decode_button");
//Llamo botón BORRADO
const buttonErase = document.getElementById("erase_button");
//Llamo caja respuesta
let answer = document.getElementById("answer_f");
//Llamo evento Encode
buttonEncode.addEventListener("click",() => {
        answer.innerHTML = cipher.createCipherWithOffset(parseInt(offset.value)).decode(string.value);
})
//Llamo evento Decode
buttonDecode.addEventListener("click",() => {
        answer.innerHTML = cipher.createCipherWithOffset(parseInt(offset.value)).decode(string.value);
})
//Llamo evento Limpiar
buttonErase.addEventListener("click",() => {
        answer.innerHTML = " ";
        string.value = " ";
        offset.value = 1;
})