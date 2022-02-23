const {edGalho, edFolha} = require('./arrays');

//Junta as duas listas em uma só e as organiza em ordem crescente de acordo com o preço:
function juntaListas(lista1, lista2) {
    let listaFinal = [];
    let posicaoAtualLista1 = 0;
    let posicaoAtualLista2 = 0;
    let atual = 0;

    while(posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length) {
        let produtoAtualLista1 = lista1[posicaoAtualLista1];
        let produtoAtualLista2 = lista2[posicaoAtualLista2];

        console.log(`Comparando ${produtoAtualLista1.titulo} com ${produtoAtualLista2.titulo}`);

        if(produtoAtualLista1.preco < produtoAtualLista2.preco) {
            listaFinal[atual] = produtoAtualLista1;
            posicaoAtualLista1++;
        }
        else {
            listaFinal[atual] = produtoAtualLista2;
            posicaoAtualLista2++;
        }

        atual++;
    }

    //Se, no while anterior, uma das listas chegar ao fim, a outra permanece com elementos a serem adicionados. Os while abaixo adicionam os elementos faltantes de acordo com a lista em que restaram elementos:
    while(posicaoAtualLista1 < lista1.length) {
        listaFinal[atual] = lista1[posicaoAtualLista1];
        posicaoAtualLista1++;
        atual++;
    }

    while(posicaoAtualLista2 < lista2.length){
        listaFinal[atual] = lista2[posicaoAtualLista2];
        posicaoAtualLista2++;
        atual++;
    }

    return listaFinal;
}

console.log(juntaListas(edGalho, edFolha));