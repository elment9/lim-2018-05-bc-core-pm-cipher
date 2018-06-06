window.cipher = {
    encode: (offset, string) => {//Función encode
        //Declaro variable vacía que más adelante se llenará
        let finalText = '';
        //Defino el ciclo: en donde inicia; hasta dónde llega; qué hace después
        for (let i = 0; i < string.length; i++) {
            //Extraigo el código ascii entrante
            let firstAscii = string.charCodeAt(i);
            //Defino parámetros: Mayúsculas- Nuevo Ascii
            if (firstAscii >= 65 && firstAscii <= 90) {
                let newAsccii = (firstAscii - 65 + offset) % 26 + 65;
                //Convertur a letras 
                finalText += String.fromCharCode(newAsccii);
            }
            //Minúsculas
            else if (firstAscii >= 97 && firstAscii <= 122) {
                let newAsccii = (firstAscii - 97 + offset) % 26 + 97;
                finalText += String.fromCharCode(newAsccii);
            }
            //Números
            else if (firstAscii >= 48 && firstAscii <= 57) { 
                let newAsccii = (firstAscii - 48 + offset) % 10 + 48;
                finalText += String.fromCharCode(newAsccii);
            }
            //Signos
            else if (firstAscii >= 33 && firstAscii <= 47) { 
                let newAsccii = (firstAscii - 33 + offset) % 15 + 33;
                finalText += String.fromCharCode(newAsccii);
            }
            //Espacio
            else if (firstAscii === 32) { 
                finalText += " ";
            }
            //Condición para no convertir letras que no cumplen con las condiciones anteriores
            else {
                finalText += String.fromCharCode(firstAscii);
            }
        }
        //Retorna variable 
        return finalText;
    },
    decode: (offset, string) => {//Función decode
        //Declaro variable vacía que más adelante se llenará, es la misma de arriba. No hay problema si la declaro otra vez porque la función la hace privada.
        let finalText = '';
        for (let i = 0; i < string.length; i++) {
            let firstAscii = string.charCodeAt(i);
            //Mayúsculas
            if (firstAscii >= 65 && firstAscii <= 90) {
                //Para DECODE uso el código ascci de la última letra del alfabeto, así no hay peligro de que al restar el offset nos de negativo
                let newAsccii = (firstAscii - 90 - offset) % 26 + 90;
                finalText += String.fromCharCode(newAsccii);
            }
            //Minúsculas
            else if (firstAscii >= 97 && firstAscii <= 122) {
                let newAsccii = (firstAscii - 122 - offset) % 26 + 122;
                finalText += String.fromCharCode(newAsccii);
            }
            //Números
            else if (firstAscii >= 48 && firstAscii <= 57) {
                //Para DECODE uso el código ascci del número (9), así no hay peligro de que al restar el offset nos de negativo
                //El módulo(%) es 10 porque hay solo 10 caracteres numerales, así hago que gire entorno a los números y que el resultado sea otro número
                let newAsccii = (firstAscii - 57 - offset) % 10 + 57;
                finalText += String.fromCharCode(newAsccii);
            }
            //Signos
            //El módulo(%) es 15 porque hay solo 15 caracteres con estos signos
            else if (firstAscii >= 33 && firstAscii <= 47) {
                let newAsccii = (firstAscii - 47 - offset) % 15 + 47;
                finalText += String.fromCharCode(newAsccii);
            }
            //Espacio
            //El módulo(%) es 1 porque solo hay un tab
            else if (firstAscii == 32) { 
                let newAsccii = (firstAscii - 32 - offset) % 1 + 32;
                finalText += String.fromCharCode(newAsccii);
            }
            else
                finalText += String.fromCharCode(firstAscii);
        }
        return finalText;
    },
    //Creando nueva función 
    createCipherWithOffset: (offset) => {
        //Retorna encode y decode del objeto Cipher 
        return{
            //Llamando encode, solo ingresa string
            encode: (string) => {
                return cipher.encode(offset,string);
            },       
            //Llamando decode
            decode: (string) => {
                return cipher.decode(offset,string);
            }
        }        
    }
}