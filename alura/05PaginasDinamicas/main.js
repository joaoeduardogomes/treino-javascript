function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio') {
            elemento.play();
    }
    else {
        console.log("Elemento não encontrado ou seletor inválido!");
    }
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

    // usando o teclado para reproduzir os sons:
    tecla.onkeydown = function(evento) {
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}




/* Pegando botão por botão:
function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom; */