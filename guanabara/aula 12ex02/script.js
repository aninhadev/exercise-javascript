var agor =  new Date();
var hora = agor.getHours();
let body = document.querySelector('body');
let section = document.querySelector('section');
let h1 = document.querySelector('h1')


switch (hora) {
  case hora < 12:
    agora.innerHTML = `São ${hora}:00 horas, Bom dia!`;
    body.style.backgroundColor = '#0353A4';
    section.style.backgroundColor = '#FABC2A'
    h1.style.color = 'black'
    agora.style.cssText = 
    'color: black;' +
    'font-size: 25px;';
    window.document.getElementById("img").src = "./img/nascer.jpg";
    break;

  case hora <= 18:
    agora.innerHTML = `São ${hora}:00 horas, Boa tarde! `;
    body.style.backgroundColor = '#DD7230';
    section.style.backgroundColor = '#F5E663'
    h1.style.color = '#FFF'
    agora.style.cssText = 
    'color: white;' +
    'font-size: 25px;';
    window.document.getElementById("img").src = "./img/entardecer.jpg";
    break;

  default:
    agora.innerHTML = `São ${hora}:00 horas, Boa noite! `;
    body.style.backgroundColor = '#0D1321';
    section.style.backgroundColor = '#3E5C76'
    h1.style.color = '#FFF'
    agora.style.cssText = 
    'color: white;' +
    'font-size: 25px;';
    window.document.getElementById("img").src = "./img/700-18.jpg";
    break;
}

/* 
A MESMA ESTRUTURA MAS COM IF E ELSE 


if (hora < 12) {
  agora.innerHTML = `São ${hora}:00 horas, Bom dia!`;
} else if (hora <= 18) {
  agora.innerHTML = `São ${hora}:00 horas, Boa tarde! `;
} else {
  agora.innerHTML = `São ${hora}:00 horas, Boa noite! `;
}
*/
