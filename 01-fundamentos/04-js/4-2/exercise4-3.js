let numero = 10
let antecessores = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let fatorial = 0

for (let index = 0;index < antecessores.length;index += 1){
let fatorial = numero * (antecessores[index]*antecessores[index-1])
console.log(fatorial)
}