import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Caio";
cliente1.cpf = 21356487955;


/*const cliente2 = new Cliente();
cliente2.nome = "Ana";
cliente2.cpf = 77954199544;*/

console.log(cliente1)
//console.log(cliente2)

const contaCorrenteCaio = new ContaCorrente();
contaCorrenteCaio.agencia = 1001;
contaCorrenteCaio.cliente = cliente1;
contaCorrenteCaio.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente1;
conta2.agencia = 102;

console.log(contaCorrenteCaio);
console.log(conta2)

contaCorrenteCaio.transferir(200, conta2);
console.log(conta2.saldo);