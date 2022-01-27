const clientes = [{
    nome: 'Caio',
    idade: 34,
    cpf: '546987213',
    email: 'algumemail@mail.com',
    fones: ['5484516604', '4889063211'],
    dependentes: [
    {
        nome: 'Beatriz',
        parentesco: 'filha',
        dataNascimento: '19/05/2015'
    },
    {
        nome: 'Ícaro',
        parentesco: 'filho',
        dataNascimento: '21/06/2017'
    }
    ],
    saldo: 100,
    depositar: function(valor) {
        this.saldo += valor;
    }
},

{
    nome: 'Samanta',
    idade: 29,
    cpf: '56971354',
    email: 'outroemail@mail.com',
    fones: ['4988465721', '5195458754'],
    dependentes: [
    {
        nome: 'Cecília',
        parentesco: 'filha',
        dataNascimento: '19/05/2018'
    },
    {
        nome: 'Cícero',
        parentesco: 'filho',
        dataNascimento: '19/05/2018'
    }
    ],
    saldo: 250,
    depositar: function(valor) {
        this.saldo += valor;
    }
}
];

const listaDependentes = [];
for (i = 0; i < clientes.length; i++) {
    listaDependentes.push(...clientes[i].dependentes)
};
//const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes];

console.table(listaDependentes);