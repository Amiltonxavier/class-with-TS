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
exports.ContaPJ = void 0;
var Conta_1 = require("./Conta");
var ContaPJ = /** @class */ (function (_super) {
    __extends(ContaPJ, _super);
    function ContaPJ(types, saldo, titulo) {
        var _this = _super.call(this, saldo, titulo) || this;
        _this.types = types;
        return _this;
    }
    ContaPJ.prototype.consultaContaPJ = function () {
        return "o seu saldo: ".concat(this.consultaSaldoConta);
    };
    ContaPJ.prototype.sacar = function (valor) {
        this.sacarSaldo(valor);
    };
    return ContaPJ;
}(Conta_1.Conta));
exports.ContaPJ = ContaPJ;
