//Sobre protótipos 

function cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor) {
        this.saldo += valor;
    };
};

const caio = new cliente("Caio", '564987123', 'caiosbutiadobolso@mail.com', 500);

console.log(caio);

//É possível usar as entradas opcionais, como no python