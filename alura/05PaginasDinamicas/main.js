function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla'); // seleciona todas as teclas do html.

while() {
    listaDeTeclas[0].onclick = tocaSomPom;
}




/* Pegando botão por botão:
function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom; */