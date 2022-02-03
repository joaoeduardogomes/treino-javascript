import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./contas/ContaCorrente.js";
import {ContaPoupanca} from ".//contas/ContaPoupanca.js";
import {Conta} from "./contas/Conta.js";
import {ContaSalario} from "./contas/ContaSalario.js";

const cliente1 = new Cliente("Caio", 11122233309);


const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100); //agora tem taxa

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

contaPoupanca.sacar(15);

console.log(contaPoupanca);
console.log(contaCorrenteRicardo);

//obj do tipo Conta:
//const conta = new Conta(0, cliente1, 5151);
//console.log(conta)

//Conta salário:
const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);
console.log(contaSalario)