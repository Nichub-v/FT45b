'use strict';

function BinarioADecimal(num) {
   let array = num.toString().split("").reverse();

   let suma = 0;

   for (let i = 0; i < array.length; i++) {
      array[i] = array[i] * 2 ** i;
      suma = suma + array[i];
   }

   return suma;
}

function DecimalABinario(num) {
     
   let restos = []

   while (num >= 1) {
     restos.push(Math.floor(num % 2));
     num = num / 2;
   }
   

   return restos.reverse().join("");
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
