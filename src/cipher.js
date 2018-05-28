window.cipher = {
 encode:function(offset,string){
    //Declaro palabra de usuario y extraigo la longitud de la palabra. 
    let textLength = string.length;
    let finalText = ''; 
    for(i=0; i< textLength; i++){ //4.Inicio mi ciclo for
      let firstAscii = string.charCodeAt(i);
        if(firstAscii >= 65 && firstAscii <= 90){//9. Creamos condicional para Mayusculas
        let newAsccii = (firstAscii - 65 + offset) % 26 + 65; //8. Aplicamos la fórmula y tenemos el nuevo código ASCII
        let mayusText = String.fromCharCode(newAsccii); //String es lista global de caracteres, es parte del objeto global
        finalText += mayusText; //11. Concatenamos : let finalText += mayusText  es igual a let finalText = finalText + mayusText
      }
        else if (firstAscii >= 97 && firstAscii <= 122){ //12. Ahora en minúscula
        let newAsccii = (firstAscii - 97 + offset) % 26 + 97;//26 porque son 26 caracteres en minuscula
        let minusText = String.fromCharCode(newAsccii);
        finalText += minusText;
      }
        else if (firstAscii >= 48 && firstAscii <= 57){ //14. Números
        let newAsccii = (firstAscii - 48 + offset) % 10 + 48;//Residuo de 10 porque son 10 nùmeros
        let numbers = String.fromCharCode(newAsccii);
        finalText += numbers;
      }
        else if(firstAscii >= 33 && firstAscii <= 47){//15. Signos
        let newAsccii = (firstAscii - 33 + offset) % 15 + 33;//Residuo de 15 porque son 15 signos
        let sign = String.fromCharCode(newAsccii);
        finalText += sign;
      }      
        else if(firstAscii == 32){//16. Espacios
        let newAsccii = (firstAscii - 32 + offset) % 1 + 32;//Residuo de 1 porque son 1 signos
        let spaceBar = String.fromCharCode(newAsccii);
        finalText += spaceBar;
      }
      else 
        finalText += finalText.toUpperCase(i);
    }
    answer = finalText;
  },
  decode:function(offset,string){
    let textLength = text.length;
    let finalText = ''; 
    for(i=0; i<textLength; i++){
      let firstAscii = text.charCodeAt(i);
      if(firstAscii >= 65 && firstAscii <= 90){
        let newAsccii = (firstAscii - 65 - offset) % 26 + 65;
        let mayusText = String.fromCharCode(newAsccii); //String es lista global de caracteres, es parte del objeto global
        finalText += mayusText; 
      }
        else if (firstAscii >= 97 && firstAscii <= 122){
        let newAsccii = (firstAscii - 97 - offset) % 26 + 97;//26 porque son 26 caracteres en minuscula
        let minusText = String.fromCharCode(newAsccii);
        finalText += minusText;
      }
      else if (firstAscii >= 48 && firstAscii <= 57){//14. Números
        let newAsccii = (firstAscii - 48 - offset) % 10 + 48;//Residuo de 10 porque son 10 nùmeros
        let numbers = String.fromCharCode(newAsccii);
        finalText += numbers;
      }
      else if(firstAscii >= 33 && firstAscii <= 47){ //15. Signos
        let newAsccii = (firstAscii - 33 - offSet) % 15 + 33;//Residuo de 15 porque son 15 signos
        let sign = String.fromCharCode(newAsccii);
        finalText += sign;
      }      
      //16. Espacios
      else if(firstAscii == 32){
        let newAsccii = (firstAscii - 32 - offset) % 1 + 32;//Residuo de 1 porque son 1 signos
        let spaceBar = String.fromCharCode(newAsccii);
        finalText += spaceBar;
      }
      else 
        finalText += finalText.toUpperCase(i);
  }

  }
}