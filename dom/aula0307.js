//aula 03/07/25 //

let contador = 2;
function adicionaItem() {
    const input = document.getElementById("textoItem");
    const texto = input.value.trim();//trim apaga os espaços
    if (texto === ""){
        alert("Digite algo antes de adicionar");
        return;
    }
    const novoElemento = document.createElement("li");
    novoElemento.innerText = texto;
    document.getElementById("lista").appendChild(novoElemento);
    input.value = "";
}