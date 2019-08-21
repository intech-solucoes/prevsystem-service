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
var UsuarioService = /** @class */ (function (_super) {
    __extends(UsuarioService, _super);
    function UsuarioService() {
        return _super.call(this, "usuario") || this;
    }
    UsuarioService.prototype.VerificarAdmin = function () {
        return _super.prototype.VerificarAdmin.call(this);
    };
    UsuarioService.prototype.VerificarLogin = function () {
        return this.CriarRequisicao(service_1.TipoRequisicao.GET);
    };
    UsuarioService.prototype.Login = function (cpf, senha) {
        return this.CriarRequisicao(service_1.TipoRequisicao.POST, null, "login", { Cpf: cpf, Senha: senha });
    };
    UsuarioService.prototype.LoginSemSenha = function (cpf) {
        return this.CriarRequisicao(service_1.TipoRequisicao.POST, null, "login", { Cpf: cpf });
    };
    UsuarioService.prototype.PrimeiroAcesso = function (cpf, dataNascimento) {
        return this.CriarRequisicao(service_1.TipoRequisicao.POST, null, "criarAcesso", { Cpf: cpf, DataNascimento: dataNascimento });
    };
    UsuarioService.prototype.TrocarSenha = function (senhaAntiga, senhaNova) {
        return this.CriarRequisicao(service_1.TipoRequisicao.POST, null, "alterarSenha", { senhaAntiga: senhaAntiga, senhaNova: senhaNova });
    };
    UsuarioService.prototype.TrocarSenhaPrimeiroAcesso = function (senhaNova) {
        return this.CriarRequisicao(service_1.TipoRequisicao.POST, null, "alterarSenhaPrimeiroAcesso", { senhaNova: senhaNova });
    };
    UsuarioService.prototype.SelecionarParticipante = function (cpf) {
        return this.CriarRequisicao(service_1.TipoRequisicao.POST, null, "selecionar", { Cpf: cpf });
    };
    UsuarioService.prototype.SelecionarMatricula = function (matricula) {
        return this.CriarRequisicao(service_1.TipoRequisicao.POST, null, "selecionarMatricula/" + matricula);
    };
    UsuarioService.prototype.BuscarMatriculas = function () {
        return this.CriarRequisicao(service_1.TipoRequisicao.GET, null, "matriculas");
    };
    return UsuarioService;
}(service_1.BaseService));
exports.default = new UsuarioService();
