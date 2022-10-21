"use strict";

/* Informazioni utili */
const underPriceAge = 18;
const overPriceAge = 65;
let lastPrice = ``;
console.log(underPriceAge, overPriceAge, lastPrice);

/* Chiedi all'utente il suo nome e cognome */
/* let userName = document.getElementById("username").value;
console.log(userName); */

const btnGenerator = document.getElementById("btn-generator");
const nameGenerator = document.getElementById("fname");
const kmGenerator = document.getElementById("km-lenght");
const ageGenerator = document.getElementById("age");
/* console.log(nameGenerator);
console.log(kmGenerator);
console.log(ageGenerator); */



btnGenerator.addEventListener(`click`, function(){
    console.log(nameGenerator);
    console.log(kmGenerator);
    console.log(ageGenerator);
});

document.getElementById("fname, km-lenght, age")

/* Chiedi all'utente il numero di chilometri che vuole percorrere */
let tripLenght = prompt(`Inserisci i km del tuo percorso`)
console.log(tripLenght);

/* Chiedi all'utente la sua età */
let age = Number(prompt(`Inserisci la tua età`));
console.log(age)

/* il prezzo del biglietto è definito in base ai km (0.21 € al km) */
let tripCostKm = 0.21;
console.log(tripCostKm);
let firstPrice = tripLenght * tripCostKm;
console.log(firstPrice);

/* Prezzo finale scontato in base alla fascia di età */
let underPrice = (firstPrice * 20) / 100;
console.log(underPrice);
let overPrice = (firstPrice * 40) / 100;
console.log(overPrice);

/* Applichiamo lo sconto */
if (age < underPriceAge){
    lastPrice = firstPrice - underPrice;
} else if (age > overPriceAge){
    lastPrice = firstPrice - overPrice;
} else {
    lastPrice = firstPrice - 0;
}
lastPrice = lastPrice.toFixed(2);
console.log(lastPrice);

