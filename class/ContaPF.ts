import { Conta } from "./Conta";


//Contapf herda Todos os atributos e métodos da class Conta
export class Contapf extends Conta{
    private types: string;
  
    constructor(types: string, saldo: number, titulo: string){
    super( saldo, titulo);
      this.types = types;
  
    }
  
    consultarSaldoPF(): string{
      return `O saldo atual da sua conta: ${this.consultaSaldoConta()}`
    }

    sacar(valor: number) {
            if(this.consultaSaldoConta() > 0 && valor <= this.consultaSaldoConta()){
                    this.sacarSaldo(valor)
            }
    }


  
  }