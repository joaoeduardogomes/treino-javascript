class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    };
    
    // MÉTODOS (comportamento)
    depositar(valor) {
        this.saldo += valor;
    };

    exibirSaldo() {
        console.log(this.saldo);
    };
};

class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca) {
        super(nome, email, cpf, saldo);
        this.saldoPoupanca = saldoPoupanca;
    };

    depositarPoupanca(valor) {
        this.saldoPoupanca += valor;
    };
};

const bia = new ClientePoupanca("Beatriz", "biacogumelo@mail.com", "654897213", 100, 500);

console.table(bia);

bia.depositar(50);
bia.depositarPoupanca(100);

console.log(bia.saldo);
console.log(bia.saldoPoupanca);