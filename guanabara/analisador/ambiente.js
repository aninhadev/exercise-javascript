


function adicionar() {
    let n1 = document.getElementById("nume").value;
  // let tab = document.getElementById('tabela').value;

  if (numero > 100 || numero == "" || numero <= 0) {
    alert(" ERRO!  Valor invalido! ");
  } else {
    const node = document.createElement("option");
    const textnode = document.createTextNode(`Adicionado o numero ${numero}`);
    node.appendChild(textnode);
    document.getElementById("tabela").appendChild(node);
  }
}

function analisar() {
    let numero = document.getElementById("nume").value;
  
  let sum = 0;

  for (let i = 0; i < numero.length; i++) {
    sum += numero[i];

    let media = Number(sum) / Number(numero.length);

    let min = Math.min(...numero);
    let max = Math.max(...numero);

  }
  res.innerHTML = ` <p> Ao todo, temos ${numero.length} números cadastrados! </p>`;
}

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
// }
