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

const propsClientes = Object.keys(cliente);
//também existe um 'Object.values(objeto)'
// e 'Object.entries(objeto)', que mostra chave + valor

console.log(propsClientes);

function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj);

    if (propsClientes.includes("dependentes")) {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
};

oferecerSeguro(cliente);
