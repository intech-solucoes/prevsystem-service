"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseService2 = require("./BaseService");

var _BaseService3 = _interopRequireDefault(_BaseService2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsuarioService = function (_BaseService) {
    _inherits(UsuarioService, _BaseService);

    function UsuarioService() {
        _classCallCheck(this, UsuarioService);

        return _possibleConstructorReturn(this, (UsuarioService.__proto__ || Object.getPrototypeOf(UsuarioService)).apply(this, arguments));
    }

    _createClass(UsuarioService, [{
        key: "VerificarLogin",
        value: function VerificarLogin() {
            return this.CriarRequisicao("GET", "/usuario");
        }
    }, {
        key: "Login",
        value: function Login(cpf, senha) {
            return this.CriarRequisicao("POST", "/usuario/login", { Cpf: cpf, Senha: senha });
        }
    }, {
        key: "PrimeiroAcesso",
        value: function PrimeiroAcesso(data) {
            return this.CriarRequisicao("POST", "/usuario/criarAcesso", { Cpf: data.cpf, DataNascimento: data.dataNascimento });
        }
    }]);

    return UsuarioService;
}(_BaseService3.default);

exports.default = UsuarioService;