window.cipher = {
  encode:function(offset,string){
    let finalText = ''; 
    for(let i=0; i<string.length; i++){
      let firstAscii = string.charCodeAt(i);
      if(firstAscii >= 65 && firstAscii <= 90){
         let newAsccii = (firstAscii - 65 + offset) % 26 + 65;
         let mayusText = String.fromCharCode(newAsccii);
         finalText += mayusText; 
      }
      else if (firstAscii >= 97 && firstAscii <= 122){ 
         let newAsccii = (firstAscii - 97 + offset) % 26 + 97;
         let minusText = String.fromCharCode(newAsccii);
         finalText += minusText;
      }
      else if (firstAscii >= 48 && firstAscii <= 57){ 
         let newAsccii = (firstAscii - 48 + offset) % 10 + 48;
         let numbers = String.fromCharCode(newAsccii);
         finalText += numbers;
      }
      else if(firstAscii >= 33 && firstAscii <= 47){
         let newAsccii = (firstAscii - 33 + offset) % 15 + 33;
         let sign = String.fromCharCode(newAsccii);
         finalText += sign;
      }      
      else if(firstAscii == 32){
         let spaceBar = " ";
         finalText += spaceBar;
      }
      else 
         finalText = "Ñ";
      }
    answer = finalText;
    return answer;
  },
  decode:function(offset,string){
    let finalText = ''; 
    for(let i=0; i<string.length; i++){
      let firstAscii = string.charCodeAt(i);
      if(firstAscii >= 65 && firstAscii <= 90){
         let newAsccii = (firstAscii - 90 - offset) % 26 + 90;
         let mayusText = String.fromCharCode(newAsccii); 
         finalText += mayusText; 
      }
      else if (firstAscii >= 97 && firstAscii <= 122){
         let newAsccii = (firstAscii - 122 - offset) % 26 + 122;
         let minusText = String.fromCharCode(newAsccii);
         finalText += minusText;
      }
      else if (firstAscii >= 48 && firstAscii <= 57){
         let newAsccii = (firstAscii - 48 - offset) % 10 + 48;
         let numbers = String.fromCharCode(newAsccii);
         finalText += numbers;
      }
      else if(firstAscii >= 33 && firstAscii <= 47){
         let newAsccii = (firstAscii - 33 - offSet) % 15 + 33;
         let sign = String.fromCharCode(newAsccii);
         finalText += sign;
      }      
      //16. Espacios
      else if(firstAscii == 32){
         let newAsccii = (firstAscii - 32 - offset) % 1 + 32;
         let spaceBar = String.fromCharCode(newAsccii);
         finalText += spaceBar;
      }
      else 
        finalText += "ñ";
    }
    answer = finalText;
    return answer;
  }
}