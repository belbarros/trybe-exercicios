
const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;

//console.log (listaDeCompras && cenouras)

const conditionOne = true;
const conditionTwo = false;

//console.log(conditionOne && conditionTwo);

// OPERADOR &&
const currentHour = 4
let message;

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir"
} else
if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D"
} else
if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?" 
} else
if (currentHour >= 11 && currentHour <= 14) {
    message = "Hora do almoço!!!"
} else
    message = "Hmmm, cheiro de café recém passado"

// console.log(message)

//OPERADOR ||

let weekDay = "sábado"

if (weekDay === "segunda" || weekDay === "terça" || weekDay === "quarta" || weekDay === "quinta" || weekDay === "sexta") {
    console.log ("Mais um dia de aula!")
}
else {
    console.log ("Descanso!")
}
