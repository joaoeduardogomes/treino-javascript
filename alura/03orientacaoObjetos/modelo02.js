class Cliente{
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor //Sem isto, não podemos imprimir quanto foi retirado
        }
        else {
            console.log("Não foi possível realizar o saque.")
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            return valor
        }
        else{
            console.log("Valor de depósito inválido")
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Caio";
cliente1.cpf = 21356487955;


const cliente2 = new Cliente();
cliente2.nome = "Ana";
cliente2.cpf = 77954199544;


const contaCorrenteCaio = new ContaCorrente();
//contaCorrenteCaio._saldo = 0; --> inicializamos em 0 na classe
contaCorrenteCaio.agencia = 1001;

console.log(cliente1)
console.log(cliente2)

console.log(contaCorrenteCaio._saldo);
contaCorrenteCaio.depositar(100);
contaCorrenteCaio.depositar(250);
contaCorrenteCaio.depositar(200);
console.log(contaCorrenteCaio._saldo);

const valorSacado = contaCorrenteCaio.sacar(50);
console.log(contaCorrenteCaio._saldo);
console.log(valorSacado);
