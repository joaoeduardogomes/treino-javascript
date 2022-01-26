const colecionador = {
    nome: 'João dos Mangás',
    idade: 29,
    tipoColecao: ['quadrinhos'],
    adicionarTipo: function(propriedade, tipo) {
        this[propriedade].push(tipo);
    },
    contato: 'joao@mail.com'
};

//Ambas as exibições abaixo funcionam:
console.log(colecionador.nome);
console.log(colecionador["nome"]);

//Adicionando HQs à coleção:
for(i = 0; i < 4; i++) {
    colecionador.adicionarTipo("tipoColecao", "HQ"+i)
}

console.log(colecionador.tipoColecao);