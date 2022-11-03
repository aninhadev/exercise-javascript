var agor = new Date();
var hora = agor.getHours();
let body = document.querySelector('body');
let section = document.querySelector('section');
let h1 = document.querySelector('h1')


switch (hora) {
  case hora < 12:
    agora.innerHTML = `São ${hora}:00 horas, Bom dia!`;
    break;
  case hora <= 18:
    agora.innerHTML = `São ${hora}:00 horas, Boa tarde! `;
    $('body').css('background', '#ccc');
    break;
  default:
    agora.innerHTML = `São ${hora}:00 horas, Boa noite! `;
    body.style.backgroundColor = '#0D1321';
    section.style.backgroundColor = '#3E5C76'
    h1.style.color = '#FFF'
    agora.style.cssText = 
    'color: white;' +
    'font-size: 25px;';



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
