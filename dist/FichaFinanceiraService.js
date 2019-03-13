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
var FichaFinanceiraService = /** @class */ (function (_super) {
    __extends(FichaFinanceiraService, _super);
    function FichaFinanceiraService() {
        var _this = _super.call(this, "fichaFinanceira") || this;
        _this.BuscarUltimaPorPlano = function (cdPlano) {
            return _this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "ultimaPorPlano/" + cdPlano);
        };
        _this.BuscarResumoAnosPorPlano = function (cdPlano) {
            return _this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "resumoAnosPorPlano/" + cdPlano);
        };
        _this.BuscarResumoMesesPorPlanoAno = function (cdPlano, ano) {
            return _this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "resumoMesesPorPlanoAno/" + cdPlano + "/" + ano);
        };
        _this.BuscarTiposPorPlanoAnoMes = function (cdPlano, ano, mes) {
            return _this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "tiposPorPlanoAnoMes/" + cdPlano + "/" + ano + "/" + mes);
        };
        _this.SabesprevBuscarSaldoPorPlano = function (cdPlano) {
            return _this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "sabesprevSaldoPorPlano/" + cdPlano);
        };
        _this.BuscarDatasInformePorFundacaoInscricao = function (fundacao, inscricao) {
            return _this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "datasPorFundacaoInscricao/" + fundacao + "/" + inscricao);
        };
        _this.BuscarInformePorFundacaoInscricaoAno = function (fundacao, inscricao, ano) {
            return _this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "informePorFundacaInscricaoAno/" + fundacao + "/" + inscricao + "/" + ano);
        };
        return _this;
    }
    return FichaFinanceiraService;
}(service_1.BaseService));
exports.default = new FichaFinanceiraService();
