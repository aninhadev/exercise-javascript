var numero = 0;
document.getElementById("content").innerHTML = `${Number(numero)}`;
function add(){
   numero++;
   document.getElementById("content").innerHTML = `${Number(numero)}`;
}
function remove(){
   numero--;
   document.getElementById("content").innerHTML = `${Number(numero)}`;
}
function reset(){
   numero = 0;
   document.getElementById("content").innerHTML = `${Number(numero)}`;
}



    