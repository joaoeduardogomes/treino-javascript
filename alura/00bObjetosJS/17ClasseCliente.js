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

const caio = new Cliente("Caio", "caiosbutiadobolso@mail.com", "537194862", 500);

console.log(caio);


caio.depositar(150);

caio.exibirSaldo();