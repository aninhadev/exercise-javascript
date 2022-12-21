let num = document.querySelector("input#fnum");
let lista = document.querySelector("select#flista");
let res = document.querySelector("div#res");
let valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}
function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Valor  ${num.value} adicionado.`;
    lista.appendChild(item);
    res.innerHTML = ''
  } else {
    window.alert("Valor inválido ou já encontrado na lista.");
  }
  num.value = ''
  num.focus()
}



function finalizar() {
  if (valores.length == 0) {
    window.alert('Adicione valores antes de finalizar')
  } else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for(let pos in valores) {
      soma += valores[pos]
      if(valores[pos] > maior)
      maior = valores[pos]
      if (valores[pos] < menor)
      menor = valores[pos]
    }
    media = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>`
    res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p> Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p>  A nédia dos valores digitafos é ${media}.</p>`



  }
}








// function adicionar() {

//   if(isNumero(num.value) && !inLista(num.value))

//     let n1 = document.getElementById("nume").value;
//   // let tab = document.getElementById('tabela').value;

//   if (numero > 100 || numero == "" || numero <= 0) {
//     alert(" ERRO!  Valor invalido! ");
//   } else {
//     let node = document.createElement("option");
//     let textnode = document.createTextNode(`Adicionado o numero ${numero}`);
//     node.appendChild(textnode);
//     document.getElementById("tabela").appendChild(node);
//   }
// }

// function analisar() {
//     let numero = document.getElementById("nume").value;

//   let sum = 0;

//   for (let i = 0; i < numero.length; i++) {
//     sum += numero[i];

//     let media = Number(sum) / Number(numero.length);

//     let min = Math.min(...numero);
//     let max = Math.max(...numero);

//   }
//   res.innerHTML = ` <p> Ao todo, temos ${numero.length} números cadastrados! </p>`;
// }

////////////////////////////

// while (numero >= 100) {
//     let item = document.createElement("option");
//     item.value = `tab${numero}`;
//     tab.appendChild(item);
//   }

///////////////////////////////

// if (numero <= 0 || numero > 100) {
//   console.log("Erro! Numero invalido");
// } else {
//   let sum = 0;

//   for (let i = 0; i < numero.length; i++) {
//     sum += numero[i];
//   }

//   let media = Number(sum) / Number(numero.length);

//   let min = Math.min(...numero);
//   let max = Math.max(...numero);

//   console.log(`Meu primeiro array ${numero}`);
//   console.log(`Ao todo, temos ${numero.length} números cadastrados!`);
//   console.log(`O maior número é ${max} `);
//   console.log(`O menor numero é ${min}`);
//   console.log(` a soma desses numeros é ${sum}`);
//   console.log(`a media dos numero é ${media}`);
