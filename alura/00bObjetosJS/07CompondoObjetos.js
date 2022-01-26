// Colocando objetos dentro de objetos

const cliente = {
    nome: 'Caio',
    idade: 34,
    cpf: '546987213',
    email: 'algumemail@mail.com',
    fones: ['5484516604', '4889063211']
};

cliente.dependentes = {
    nome: 'Ana',
    parentesco: 'filha',
    dataNascimento: '19/05/2015'
};

console.log(cliente);

//alterando dados do objeto dentro de outro:
cliente.dependentes.nome = 'Ana Beatriz';

console.log(cliente);