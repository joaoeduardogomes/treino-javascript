const cliente = {
    nome: 'Caio',
    idade: 34,
    cpf: '546987213',
    email: 'algumemail@mail.com',
    fones: ['5484516604', '4889063211'],
    dependentes: [{
        nome: 'Beatriz',
        parentesco: 'filha',
        dataNascimento: '19/05/2015'
    }]
};

cliente.dependentes.push({
    nome: 'Ícaro',
    parentesco: 'filho',
    dataNascimento: '21/06/2017'
});

console.log(cliente);

const filhoMaisNovo = cliente.dependentes.filter(dependente => dependente.dataNascimento==="21/06/2017");
//"filter" é um método de array

console.log(`O filho mais novo é: ${filhoMaisNovo[0].nome}`);