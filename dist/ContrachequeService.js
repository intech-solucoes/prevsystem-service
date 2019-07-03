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
var ContrachequeService = /** @class */ (function (_super) {
    __extends(ContrachequeService, _super);
    function ContrachequeService() {
        return _super.call(this, "fichaFinanceiraAssistido") || this;
    }
    ContrachequeService.prototype.BuscarDatas = function (cdPlano) {
        return this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "datasPorPlano/" + cdPlano);
    };
    ContrachequeService.prototype.BuscarPorPlanoReferenciaTipoFolha = function (cdPlano, referencia, tipoFolha) {
        return this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "porPlanoReferenciaTipoFolha/" + cdPlano + "/" + this.FormatarData(referencia) + "/" + tipoFolha);
    };
    ContrachequeService.prototype.Relatorio = function (cdPlano, referencia, tipoFolha) {
        return this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "relatorio/" + cdPlano + "/" + this.FormatarData(referencia) + "/" + tipoFolha, null, service_1.TipoResposta.Blob);
    };
    return ContrachequeService;
}(service_1.BaseService));
exports.default = new ContrachequeService();
