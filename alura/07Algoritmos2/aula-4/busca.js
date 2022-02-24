const listaLivros = require('./arrayOrdenado');

function busca(array, de, ate, valorBuscado) {
    const meio = Math.floor((de + ate) / 2);
    const atual = array[meio];

    if(de > ate) {
        return -1;
        //quando buscamos por um valor que não está na lista, o programa coloca o valor inicial > que o valro final e dá erro. Esse if poderia ser usado para personalizar um código de erro mais elaborado.
    }

    if(valorBuscado === atual.preco) {
        return meio;
    }

    if(valorBuscado < atual.preco) {
        return busca(array, de, meio -1, valorBuscado);
    }

    if(valorBuscado > atual.preco) {
        return busca(array, meio +1, ate, valorBuscado);
    }
}

console.log(busca(listaLivros, 0, listaLivros.length -1, 40));
//parâmetros passados: array(listaLivros), ponto da array pra iniciar a verificação(0), até odne vai a verificação(fim da linha), preço de produto buscado(30).


//O programa elimina uma grande parte de elementos durante a busca, sem precisar passar pro cada um deles.
//Ele começa do meio da lista e verifica se o valor buscado é aquele, se está antes ou se está depois. Estando antes ou depois, de cara ele já elimina a metade inútil e se concentra somente na parte que pode conter o valor buscado, repetindo o processo, a divisão e a eliminação de elementos até encontrar o ue estamos buscando.