const listaLivros = require('./array')

function encontraMenores(pivo, array) {

    let menores = 0;

    for(let atual = 0; atual < array.length; atual++) {
        let produtoAtual = array[atual];

        if (produtoAtual.preco < pivo.preco) {
            menores++; //incrementa sempre que encontra um elemento no valor igual ou menor ao do pivô
        }
    }

    //return menores;
    trocaLugar(array, array.indexOf(pivo), menores);
    return array;
}


function trocaLugar(array, de, para) {
    const elem1 = array[de];
    const elem2 = array[para];

    array[para] = elem1;
    array[de] = elem2;
}


//Tendo o pivô como base, joga os de valo menor pra um lado e os de valor menor pro outro.
function divideNoPivo(array) {
    let pivo = array[Math.floor(array.length / 2)]; //É o array na posição resultado do cálculo passado. Poir precisamos do dado, não de um número.
    //console.log(`O pivô é: ${pivo.titulo}`);

    encontraMenores(pivo, array);
    let valoresMenores = 0;

    for(let analisando = 0; analisando < array.length; analisando++) {
        let atual = array[analisando];

        if(atual.preco <= pivo.preco && atual !== pivo) {
            trocaLugar(array, analisando, valoresMenores);
            valoresMenores++;
        }
    }

    return array;
}


//console.log(encontraMenores(listaLivros[2], listaLivros));
console.log(divideNoPivo(listaLivros));


module.exports = trocaLugar;