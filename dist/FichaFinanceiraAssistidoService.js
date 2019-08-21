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
var FichaFinanceiraAssistidoService = /** @class */ (function (_super) {
    __extends(FichaFinanceiraAssistidoService, _super);
    function FichaFinanceiraAssistidoService() {
        var _this = _super.call(this, "fichaFinanceiraAssistido") || this;
        _this.BuscarDatasPorPlano = function (cdPlano) {
            return _this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "datasPorPlano/" + cdPlano);
        };
        _this.BuscarPorPlanoReferenciaTipoFolha = function (cdPlano, referencia, tipoFolha) {
            return _this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "porPlanoReferenciaTipoFolha/" + cdPlano + "/" + _this.FormatarData(referencia) + "/" + tipoFolha);
        };
        _this.BuscarUltimaPorPlano = function (cdPlano) {
            return _this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "ultimaFolhaPorPlano/" + cdPlano);
        };
        _this.BuscarUltimaPorPlanoProcesso = function (cdPlano, cdEspecie, ano, num) {
            return _this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "ultimaFolhaPorPlanoProcesso/" + cdPlano + "/" + cdEspecie + "/" + ano + "/" + num);
        };
        return _this;
    }
    return FichaFinanceiraAssistidoService;
}(service_1.BaseService));
exports.default = new FichaFinanceiraAssistidoService();
