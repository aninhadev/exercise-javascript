function enviar() {

    var pessoas = document.getElementById("qtdPessoas").value;
    var valorConta =  document.getElementById("conta").value;
    
    var total = (Number(valorConta) / Number(pessoas)).toFixed(2);
    document.getElementById("innerHTMLtxt").innerHTML = `Olá, o valor para cada pessoa pagar é ${Number(total)}`;
    
    }