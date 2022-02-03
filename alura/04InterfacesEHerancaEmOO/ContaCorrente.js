import {Conta} from "./Conta.js"

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;

    constructor(cliente, agencia){
        super(0, cliente, agencia); //usa o construtor da classe-mãe
        ContaCorrente.numeroDeContas += 1;
    }


    //Sobrescrevendo o comportamento de sacar da classe-mãe:
    sacar(valor){
        let taxa = 1.1;
        
        return this._sacar(valor, taxa) //ou super.sacar
    }
}
