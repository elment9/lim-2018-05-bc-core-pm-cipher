window.cipher = {
  encode:(offset,string) => {
    let finalText = ''; 
    for(let i=0; i<string.length; i++){
      let firstAscii = string.charCodeAt(i);
      if(firstAscii >= 65 && firstAscii <= 90){//Mayúsculas
          let newAsccii = (firstAscii - 65 + offset) % 26 + 65;
          finalText += String.fromCharCode(newAsccii);
      }
      else if (firstAscii >= 97 && firstAscii <= 122){//Minúsculas
          let newAsccii = (firstAscii - 97 + offset) % 26 + 97;
          finalText += String.fromCharCode(newAsccii);
      }
      else if (firstAscii >= 48 && firstAscii <= 57){ //Números
          let newAsccii = (firstAscii - 48 + offset) % 10 + 48;
          finalText += String.fromCharCode(newAsccii);
      }
      else if(firstAscii >= 33 && firstAscii <= 47){ //Signos
          let newAsccii = (firstAscii - 33 + offset) % 15 + 33;
          finalText += String.fromCharCode(newAsccii);
      }
      else if(firstAscii === 32){ //Espacio
          finalText += " ";
      }
      else 
      finalText = "Ñ";
    }    
    return finalText;
  },
  decode: (offset,string) => {
    let finalText = ''; 
    for(let i=0; i<string.length; i++){
      let firstAscii = string.charCodeAt(i);
      if(firstAscii >= 65 && firstAscii <= 90){//Mayus
          let newAsccii = (firstAscii - 90 - offset) % 26 + 90;
          finalText += String.fromCharCode(newAsccii);
      }
      else if (firstAscii >= 97 && firstAscii <= 122){//Minus
          let newAsccii = (firstAscii - 122 - offset) % 26 + 122;
          finalText += String.fromCharCode(newAsccii);
      }
      else if (firstAscii >= 48 && firstAscii <= 57){//Números
          let newAsccii = (firstAscii - 48 - offset) % 10 + 48;
          finalText += String.fromCharCode(newAsccii);
      }
      else if(firstAscii >= 33 && firstAscii <= 47){//Signos
          let newAsccii = (firstAscii - 33 - offset) % 15 + 33;
          finalText += String.fromCharCode(newAsccii);
      }
      else if(firstAscii == 32){ //Espacio
          let newAsccii = (firstAscii - 32 - offset) % 1 + 32;
          finalText += String.fromCharCode(newAsccii);
      }
      else 
          finalText += "ñ";
    }
    return finalText;
  }
  
}