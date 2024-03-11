export abstract class Conta {
    private readonly _numeroConta: number;
    private _saldo: number;
    private titular: string;
  
    constructor(saldo: number, titular: string){
        this._numeroConta = Math.floor(Math.random() * 1000) + 1;
        this._saldo = saldo;
        this.titular = titular;
    }
  
    protected consultaSaldoConta(): number {
      return this._saldo;
    }
  
    protected addSaldo(saldo: number): void {
    
       this._saldo += saldo;
    }
  
    protected sacarSaldo(saldo: number): void {
      this._saldo -= saldo;
    }

    get numeroConta():number {
        return this._numeroConta
    }
  
  }