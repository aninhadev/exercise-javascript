let num = [1, 6 ,2,5, 4]

// num[3] = 19  inserir valor no indice desejado
// num.push(8)  inserir valor no ultimo elemento do array
// num.length   Para saber a quantidade de elementos de um array
// num.sort()   Coloca os elementos em ordem crescente 
// num.push(8)
// num.sort()
// console.log(`Nosso arrayzinho é ${num}`)
// console.log(`O nosso array tem  ${num.length} posições `)
// console.log(` O primeiro valor do vetor é ${num[0]}`)


// for(let pos = 0; pos < num.length; pos++){
//     console.log(`A posição ${pos} tem o valor ${num[pos]}`)
// }

// num.indexOf()    Vai procurar onde está o valor e retorna a chave 

for( let pos in num ){
    console.log(`${num[pos]}`)
}

