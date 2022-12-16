

let numero = document.getElementById('nume')

if(numero <= 0 || numero > 100 ){
 console.log('Erro! Numero invalido')
}else{
 
let sum = 0;

for( let i = 0 ; i < numero.length ; i++){
    sum += numero [i];
}


let media = Number(sum) / Number(numero.length);

let min = Math.min(...numero);
let max = Math.max(...numero);

console.log(`Meu primeiro array ${numero}`)
console.log(`Ao todo, temos ${numero.length} números cadastrados!`)
console.log(`O maior número é ${max} `)
console.log(`O menor numero é ${min}`)
console.log(` a soma desses numeros é ${sum}`)
console.log(`a media dos numero é ${media}`)
}