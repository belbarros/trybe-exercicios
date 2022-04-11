// //1
// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {
//         golden: 2,
//         silver: 3
//     },
// }

// player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]

// console.log('A jogadora '+ player.name + ' ' + player.lastName + ' tem ' + player.age + ' de idade.')
// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.')
// console.log('A jogadora possui ' + player['medals']['golden'] + ' medalhas de ouro e ' + player['medals']['silver'] + ' medalhas de prata.')

// //2
// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

//   for (let key in names) {
//       console.log('Olá ' + names[key] + '!')
//   }

//   let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

//   for (let key in car) {
//       console.log(key, car[key])
//   }

// //3

function sum(a, b){
    return a+b;
}

function sub(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b
}

function modulo(a, b) {
    return a%b
}

function maior(a, b) {
    if (a > b) {
        return a + ' é o maior número.';
    } else {
        return b + ' é o maior número.';
    };
}

function menor(a, b) {
    if (a < b) {
        return a + ' é o menor número.'
    } else {
        return b + ' é o menor número.'
    }
}

function polaridade(a) {
    if (a > 0){
        return 'Positive';
    } else if (a < 0) {
        return 'Negative';
    } else
    return 'Zero'
}

function triangle(a, b, c) {
    if (a+b+c == 180) {
        return 'True';
    } else if (a+b+c !== 0) {
        return 'False';
    } else {
        return 'Error'
    }
}
