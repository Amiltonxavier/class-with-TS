"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contapf = void 0;
var Conta_1 = require("./Conta");
//Contapf herda Todos os atributos e métodos da class Conta
var Contapf = /** @class */ (function (_super) {
    __extends(Contapf, _super);
    function Contapf(types, saldo, titulo) {
        var _this = _super.call(this, saldo, titulo) || this;
        _this.types = types;
        return _this;
    }
    Contapf.prototype.consultarSaldoPF = function () {
        return "O saldo atual da sua conta: ".concat(this.consultaSaldoConta());
    };
    Contapf.prototype.sacar = function (valor) {
        if (this.consultaSaldoConta() > 0 && valor <= this.consultaSaldoConta()) {
            this.sacarSaldo(valor);
        }
    };
    return Contapf;
}(Conta_1.Conta));
exports.Contapf = Contapf;
