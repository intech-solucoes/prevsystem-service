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
var FuncionarioService = /** @class */ (function (_super) {
    __extends(FuncionarioService, _super);
    function FuncionarioService() {
        var _this = _super.call(this, "funcionario") || this;
        _this.Buscar = function () { return _this.CriarRequisicao(service_1.TipoRequisicao.GET); };
        _this.Pesquisar = function (CD_FUNDACAO, CD_EMPRESA, CD_PLANO, CD_SIT_PLANO, NUM_MATRICULA, NOME) {
            return _this.CriarRequisicao(service_1.TipoRequisicao.POST, null, "pesquisar", { CD_FUNDACAO: CD_FUNDACAO, CD_EMPRESA: CD_EMPRESA, CD_PLANO: CD_PLANO, CD_SIT_PLANO: CD_SIT_PLANO, NUM_MATRICULA: NUM_MATRICULA, NOME: NOME });
        };
        _this.BuscarPorCpf = function () { return _this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "buscarPorCpf"); };
        return _this;
    }
    return FuncionarioService;
}(service_1.BaseService));
exports.default = new FuncionarioService();
