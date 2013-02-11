"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var result;
  var original = document.getElementById("original");
  var temp = original.value; // leemos el valor de la etiqueta <input> 
  var regexp = /^[-+]?(\d+(\.\d+)?)\s*([CFcf])/;
               //parentisamos la parte del no. y la del tipo de grados
  var m = temp.match(regexp); //devuelve un array con la cadena que ha sido 
                             //cazada con el exp regular en la 1ra pos.
  if (m) {   //si se ha cazado algun valor(no devolvio null)
    var num = m[1];    //nos quedamos con el numero
    var type = m[3];   //nos quedamos con el tipo de grados
    num = parseFloat(num);   //convertimos la cadena que representa al no. a un Float
                             
    if (type == 'c' || type == 'C') {
      result = (num * 9/5)+32;
      result = result + " F ";  //result contendra ahora una cadena
    }
    else {
      result = (num - 32)*5/9;
      result = result + " C ";
    }
    converted.innerHTML = result; //innerHTML sirve para "escribir" 
  }                               //dentro del  elemento HTML converted
                                  //el resultado final y asm darle formato posteriormente
else {                           
    converted.innerHTML = "ERROR! Try something like '-4.2C' instead";  //el usuario no ha entrado un formato
  }                                                                     //valido para la temperatura
}

