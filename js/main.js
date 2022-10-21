"use strict";

/* Informazioni utili */
const discountUnder = 18;
const discountOver = 65;
let lastPrice = ``;
console.log(discountUnder, discountOver, lastPrice);



const btnGenerator = document.getElementById("btn-generator").value;
console.log(btnGenerator);

btnGenerator.addEventListener(`click`, function(){
    /* Chiedi all'utente il suo nome e cognome */
const nomeCognome = document.getElementById("name");
console.log(nomeCognome);

/* Chiedi all'utente i km da percorrere*/
const kmTrip = Number (document.getElementById("km").value);
console.log(kmTrip);

/* Chiedi all'utente la sua età */
const age = document.getElementById("age").value;
console.log(age);

/* il prezzo del biglietto è definito in base ai km (0.21 € al km) */
let tripCostKm = 0.21;
console.log(tripCostKm);
let firstPrice = kmTrip * tripCostKm;
console.log(firstPrice);

/* Prezzo finale scontato in base alla fascia di età */
let discountUnderAge = (firstPrice * 20) / 100;
console.log(discountUnderAge);
let discountOverAge = (firstPrice * 40) / 100;
console.log(discountOverAge);

/* Applichiamo lo sconto */
if (age < discountUnder){
    lastPrice = firstPrice - underPrice;
} else if (age > overPriceAge){
    lastPrice = firstPrice - overPrice;
} else {
    lastPrice = firstPrice - 0;
}
lastPrice = lastPrice.toFixed(2);
console.log(lastPrice);
});





