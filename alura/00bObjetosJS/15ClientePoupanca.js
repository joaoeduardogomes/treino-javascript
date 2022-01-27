function cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor) {
        this.saldo += valor;
    };
};

function clientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    cliente.call(this,nome, cpf, email, saldo);
    this.saldoPoup = saldoPoup;
};
//a "clientePoupanca" vai chamar a função "cliente" pra estabelecer o objeto, conforme a chamada 'call.

const beatriz = new clientePoupanca("Beatriz", "19842164", "bia06@mail.com", 500, 1500);

console.log(beatriz);

//função para adicionar valor à poupança
clientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor;
};

//chamar depósito na poupança
beatriz.depositarPoup(50);

//exibir valor alterado (no final)
console.log(beatriz.saldoPoup);