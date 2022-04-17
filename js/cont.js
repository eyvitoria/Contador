/*var input = document.querySelector("#name");
var texto = input;
console.log(texto);*/

//var dia = 0;
//var hora = 0;
//var mim = 0;
//var seg = 0;

//var tempo = 1000;
//var cont;

//function start(){
//}


const btn = document.querySelector('#send');

btn.addEventListener("click", function(e){

e.preventDefault();

var data = document.querySelector('#data');

var value = data.value;

console.log(value);

window.location='contador.html';


})


