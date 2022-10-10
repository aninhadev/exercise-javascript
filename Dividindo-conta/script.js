
function enviar() {

var pessoas = document.getElementById("qtdPessoas").value;
var valorConta =  document.getElementById("conta").value;

var total = (Number(pessoas) / Number(valorConta))
document.getElementById("innerHTMLtxt").innerHTML = `Olá, o valor para cada pessoa pagar é ${Number(total)}`;

}