/*function acender(cor){
    document.getElementById('vermelho').classList.remove("ativo");
    document.getElementById('amarelo').classList.remove("ativo");
    document.getElementById('verde').classList.remove("ativo");
    document.getElementById(cor).classList.add("ativo");
}

function desligar(){
    document.getElementById('vermelho').classList.remove("ativo");
    document.getElementById('amarelo').classList.remove("ativo");
    document.getElementById('verde').classList.remove("ativo");
}
*/
let estado = "desligado";
let timeoutId;

function ligar() {
  estado = "ligado";
  vermelho();
} 

function vermelho() {
  document.getElementById("vermelho").classList.add("ativo");
  document.getElementById("amarelo").classList.remove("ativo");
  document.getElementById("verde").classList.remove("ativo");
  timeoutId = setTimeout(verde, 3000);
}

function verde() {
  document.getElementById("vermelho").classList.remove("ativo");
  document.getElementById("amarelo").classList.remove("ativo");
  document.getElementById("verde").classList.add("ativo");
  timeoutId = setTimeout(amarelo, 3000);
}

function amarelo() {
  document.getElementById("vermelho").classList.remove("ativo");
  document.getElementById("amarelo").classList.add("ativo");
  document.getElementById("verde").classList.remove("ativo");
  timeoutId = setTimeout(vermelho, 2000);
}

function pedestre() {
  clearTimeout(timeoutId);
  document.getElementById("vermelho").classList.remove("ativo");
  document.getElementById("amarelo").classList.add("ativo");
  document.getElementById("verde").classList.remove("ativo");
  timeoutId = setTimeout(pedestreVermelho, 2000);
}

function pedestreVermelho() {
  document.getElementById("vermelho").classList.add("ativo");
  document.getElementById("amarelo").classList.remove("ativo");
  document.getElementById("verde").classList.remove("ativo");
  timeoutId = setTimeout(retornarCiclo, 5000);
}

function retornarCiclo() {
  vermelho();
}

function desligar() {
  clearTimeout(timeoutId);
  document.getElementById("vermelho").classList.remove("ativo");
  document.getElementById("amarelo").classList.remove("ativo");
  document.getElementById("verde").classList.remove("ativo");
}