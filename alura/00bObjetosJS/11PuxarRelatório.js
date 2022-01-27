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

let relatorio ="";
//A string 'relatorio' está vazia apenas para ser inicializada

for (let info in cliente) {

    if (typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue;
        //Assim ele não vai exibir os dependentes (objects) e a função de depositar (function), exibindo apenas as informações pertinentes à consulta.
        //Porém, a arrays de telefone também foi pulada
    }
    else{
        relatorio += ` ${info} --> ${cliente[info]} \n\n`;
    }
    
};

console.log(relatorio);