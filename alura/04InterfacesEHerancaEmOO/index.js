import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";

const cliente1 = new Cliente("Caio", 11122233309);


const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100); //agora tem taxa

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

contaPoupanca.sacar(15);

console.log(contaPoupanca);
console.log(contaCorrenteRicardo);