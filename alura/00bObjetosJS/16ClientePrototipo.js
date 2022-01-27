function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor) {
        this.saldo += valor;
    };
};

const icaro = new Cliente("Ícaro", "654897123", "icarodosol@mail.com", 200);

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    Cliente.call(this, nome, cpf, email, saldo);
    this.saldoPoup = saldoPoup;
};

//---------------------------
const bia = new ClientePoupanca("Beatriz", "9517538462", "bialegal@mail.com", 300, 1000);

ClientePoupanca.prototype.depositaPoup = function(valor) {
    this.saldoPoup += valor;
};

console.log(icaro.hasOwnProperty("saldoPoup"))
console.log(bia.hasOwnProperty("saldoPoup"))
console.log(icaro instanceof Cliente)
console.log(typeof icaro)
console.log(typeof bia)
console.log(bia instanceof ClientePoupanca)
console.log(Function.prototype.isPrototypeOf(Cliente))
console.log(Cliente.constructor === Function)