"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var service_1 = require("@intechprev/service");
var ProcessoBeneficioService = /** @class */ (function (_super) {
    __extends(ProcessoBeneficioService, _super);
    function ProcessoBeneficioService() {
        return _super.call(this, "processoBeneficio") || this;
    }
    ProcessoBeneficioService.prototype.BuscarPorPlano = function (plano) {
        return this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "porPlano/" + plano);
    };
    return ProcessoBeneficioService;
}(service_1.BaseService));
exports.default = new ProcessoBeneficioService();
