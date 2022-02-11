function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla'); // seleciona todas as teclas do html.


for(let cont = 0; cont < listaDeTeclas.length; cont++) {

    const tecla = listaDeTeclas[cont]; //pra evitar repetição

    const instrumento = tecla.classList[1];
    //console.log(instrumento);

    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio);

    tecla.onclick = function() {
        tocaSom(idAudio);
    };
}




/* Pegando botão por botão:
function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom; */