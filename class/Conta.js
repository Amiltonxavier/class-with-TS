"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
var Conta = /** @class */ (function () {
    function Conta(saldo, titular) {
        this._numeroConta = Math.floor(Math.random() * 1000) + 1;
        this._saldo = saldo;
        this.titular = titular;
    }
    Conta.prototype.consultaSaldoConta = function () {
        return this._saldo;
    };
    Conta.prototype.addSaldo = function (saldo) {
        this._saldo += saldo;
    };
    Conta.prototype.sacarSaldo = function (saldo) {
        this._saldo -= saldo;
    };
    Object.defineProperty(Conta.prototype, "numeroConta", {
        get: function () {
            return this._numeroConta;
        },
        enumerable: false,
        configurable: true
    });
    return Conta;
}());
exports.Conta = Conta;
