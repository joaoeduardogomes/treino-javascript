import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Caio", 21356487955);
const cliente2 = new Cliente("Ana", 77954199544);


console.log(cliente1)
console.log(cliente2)

const contaCorrenteCaio = new ContaCorrente(cliente1, 1001);

contaCorrenteCaio.depositar(500);

const conta2 = new ContaCorrente(cliente2, 102);

console.log(contaCorrenteCaio);
console.log(conta2)

console.log("Número de contas: " + ContaCorrente.numeroDeContas);