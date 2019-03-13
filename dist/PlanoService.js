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
var PlanoService = /** @class */ (function (_super) {
    __extends(PlanoService, _super);
    function PlanoService() {
        var _this = _super.call(this, "plano") || this;
        _this.Buscar = function () {
            return _this.CriarRequisicao(service_1.TipoRequisicao.GET);
        };
        _this.BuscarTodos = function () {
            return _this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "todos");
        };
        _this.BuscarPorCodigo = function (plano) {
            return _this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "porCodigo/" + plano);
        };
        return _this;
    }
    PlanoService.prototype.RelatorioExtratoPorPlanoEmpresaReferencia = function (plano, empresa, dataInicio, dataFim, enviarPorEmail) {
        if (enviarPorEmail === void 0) { enviarPorEmail = false; }
        if (enviarPorEmail)
            return this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "relatorioExtratoPorPlanoEmpresaReferencia/" + plano + "/" + empresa + "/" + this.FormatarData(dataInicio) + "/" + this.FormatarData(dataFim) + "/" + enviarPorEmail);
        else
            return this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "relatorioExtratoPorPlanoEmpresaReferencia/" + plano + "/" + empresa + "/" + this.FormatarData(dataInicio) + "/" + this.FormatarData(dataFim) + "/" + enviarPorEmail, service_1.TipoResposta.Blob);
    };
    PlanoService.prototype.RelatorioCertificado = function (plano, empresa, enviarPorEmail) {
        if (enviarPorEmail === void 0) { enviarPorEmail = false; }
        if (enviarPorEmail)
            return this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "certificado/" + plano + "/" + empresa + "/" + enviarPorEmail);
        else
            return this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "certificado/" + plano + "/" + empresa + "/" + enviarPorEmail, service_1.TipoResposta.Blob);
    };
    PlanoService.prototype.BuscarPorEmpresa = function (empresa) {
        return this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "porEmpresa/" + empresa);
    };
    PlanoService.prototype.RelatorioCertificadoSeguro = function (enviarPorEmail) {
        if (enviarPorEmail === void 0) { enviarPorEmail = false; }
        if (enviarPorEmail)
            return this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "certificadoSeguro/" + enviarPorEmail);
        else
            return this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "certificadoSeguro/" + enviarPorEmail, service_1.TipoResposta.Zip);
    };
    PlanoService.prototype.PossuiCertificadoSeguro = function () {
        return this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "possuiCertificadoSeguro");
    };
    return PlanoService;
}(service_1.BaseService));
exports.default = new PlanoService();
