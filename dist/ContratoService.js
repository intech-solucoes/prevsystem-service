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
var ContratoService = /** @class */ (function (_super) {
    __extends(ContratoService, _super);
    function ContratoService() {
        var _this = _super.call(this, "contrato") || this;
        _this.SabesprevBuscarAtivosPorPlano = function (cdPlano) {
            return _this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "sabesprevAtivosPorPlano/" + cdPlano);
        };
        _this.SabesprevBuscarPorAnoNum = function (ano, num) {
            return _this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "sabesprevPorAnoNum/" + ano + "/" + num);
        };
        _this.ParametrosPorPlano = function (cdPlano) {
            return _this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "parametrosPorPlano/" + cdPlano);
        };
        _this.BuscarConcessao = function (cdPlano, cdModal, cdNatur, dataCredito) {
            return _this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "buscarConcessao/" + cdPlano + "/" + cdModal + "/" + cdNatur + "/" + _this.FormatarData(dataCredito));
        };
        _this.BuscarParametrosParcelas = function (CD_PLANO, CD_MODAL, CD_NATUR, valorSolicitado, concessao) {
            return _this.CriarRequisicao(service_1.TipoRequisicao.POST, null, "parametrosParcelas", { CD_PLANO: CD_PLANO, CD_MODAL: CD_MODAL, CD_NATUR: CD_NATUR, valorSolicitado: valorSolicitado, concessao: concessao });
        };
        _this.BuscarParcelas = function (params) {
            return _this.CriarRequisicao(service_1.TipoRequisicao.POST, null, "parametrosParcelas", params);
        };
        _this.SendToken = function (enviarEmail, enviarSMS) {
            return _this.CriarRequisicao(service_1.TipoRequisicao.POST, null, "gerarToken/" + enviarEmail + "/" + enviarSMS);
        };
        _this.Contratar = function (params) {
            return _this.CriarRequisicao(service_1.TipoRequisicao.POST, null, "contratar", params);
        };
        return _this;
    }
    return ContratoService;
}(service_1.BaseService));
exports.default = new ContratoService();
