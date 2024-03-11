import { Conta } from "./Conta";



export class ContaPJ extends Conta {
        private types: string;

        constructor(types: string, saldo: number, titulo: string){
            super(saldo, titulo);
            this.types = types;
        }

        consultaContaPJ() {
            return `o seu saldo: ${this.consultaSaldoConta}`
        }

        sacar(valor: number){
            this.sacarSaldo(valor);
        }

}