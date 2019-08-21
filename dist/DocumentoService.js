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
var DocumentoService = /** @class */ (function (_super) {
    __extends(DocumentoService, _super);
    function DocumentoService() {
        var _this = _super.call(this, "documento") || this;
        _this.BuscarPorOidDocumento = function (oidDocumento) { return _this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "buscarPorOidDocumento/" + oidDocumento); };
        _this.BuscarPorPasta = function (oidPasta) {
            if (oidPasta === void 0) { oidPasta = null; }
            return _this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "porPasta/" + oidPasta);
        };
        _this.BuscarPorPlanoPasta = function (cdPlano, oidPasta) {
            if (oidPasta === void 0) { oidPasta = null; }
            return _this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "porPlanoPasta/" + cdPlano + "/" + oidPasta);
        };
        _this.Criar = function (OID_ARQUIVO_UPLOAD, TXT_TITULO, IND_ATIVO, NUM_ORDEM, CD_PLANO, OID_DOCUMENTO_PASTA) {
            if (CD_PLANO === void 0) { CD_PLANO = null; }
            if (OID_DOCUMENTO_PASTA === void 0) { OID_DOCUMENTO_PASTA = null; }
            return _this.CriarRequisicao(service_1.TipoRequisicao.POST, null, "", {
                OID_ARQUIVO_UPLOAD: OID_ARQUIVO_UPLOAD,
                TXT_TITULO: TXT_TITULO,
                IND_ATIVO: IND_ATIVO,
                NUM_ORDEM: NUM_ORDEM,
                CD_PLANO: CD_PLANO,
                OID_DOCUMENTO_PASTA: OID_DOCUMENTO_PASTA
            });
        };
        _this.Deletar = function (OID_DOCUMENTO) { return _this.CriarRequisicao(service_1.TipoRequisicao.POST, null, "" + OID_DOCUMENTO); };
        _this.CriarPasta = function (NOM_PASTA, OID_DOCUMENTO_PASTA_PAI) {
            if (OID_DOCUMENTO_PASTA_PAI === void 0) { OID_DOCUMENTO_PASTA_PAI = null; }
            return _this.CriarRequisicao(service_1.TipoRequisicao.POST, null, "criarPasta", { NOM_PASTA: NOM_PASTA, OID_DOCUMENTO_PASTA_PAI: OID_DOCUMENTO_PASTA_PAI });
        };
        _this.DeletarPasta = function (OID_DOCUMENTO_PASTA) {
            return _this.CriarRequisicao(service_1.TipoRequisicao.POST, null, "deletarPasta/" + OID_DOCUMENTO_PASTA);
        };
        _this.Download = function (OID_DOCUMENTO) {
            return _this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "download/" + OID_DOCUMENTO, null, service_1.TipoResposta.Blob);
        };
        _this.EnviarDocumento = function (OID_DOCUMENTO) {
            return _this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "enviarDocumento/" + OID_DOCUMENTO);
        };
        return _this;
    }
    return DocumentoService;
}(service_1.BaseService));
exports.default = new DocumentoService();
