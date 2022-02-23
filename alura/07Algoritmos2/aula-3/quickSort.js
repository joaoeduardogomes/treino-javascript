const listaLivros = require('./array');
const trocaLugar = require('./encontraMenores')

function quickSort(array, esquerda, direita) {
    //parte esquerda do pivô(início) e parde direita do pivô(fim).

    if(array.length > 1) {
        let indiceAtual = particiona(array, esquerda, direita);
        if(esquerda < indiceAtual -1) {
            quickSort(array, esquerda, indiceAtual - 1);
        }
        if(indiceAtual < direita) {
            quickSort(array, indiceAtual, direita);
        }
    }

    return array;
}


function particiona(array, esquerda, direita) {
    let pivo = array[Math.floor((esquerda + direita) / 2)];
    let atualEsquerda = esquerda;
    let atualDireita = direita;

    while(atualEsquerda <= atualDireita) {
        while(array[atualEsquerda].preco < pivo.preco) {
            atualEsquerda++;
            //A análise começa na ponta esquerda e vai aumentando.
        }
        while(array[atualDireita].preco > pivo.preco) {
            atualDireita--;
            //A análise começa na ponta direita e vai diminuindo.
        }

        if(atualEsquerda <= atualDireita) {
            trocaLugar(array, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        }
    }
    return atualEsquerda;
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1));