class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();


cliente1.nome = "Caio";
cliente1.cpf = 21356487955;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = "Ana";
cliente2.cpf = 77954199544;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1, cliente2)