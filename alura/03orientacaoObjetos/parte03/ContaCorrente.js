export class ContaCorrente {
    agencia;
    cliente;

    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor 
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

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }//Sempre que mexemos no objeto (no caso, a conra), mexemos nos seus atributos originais. Portanto, é importante ter cuidado.
}