const cliente = {
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
};
//O "this" se refere ao objeto "cliente"

console.log(cliente.saldo);

cliente.depositar(30);
console.log(cliente.saldo);

document.write("polenta")