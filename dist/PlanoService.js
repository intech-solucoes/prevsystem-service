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

var PlanoService = function (_BaseService) {
    _inherits(PlanoService, _BaseService);

    function PlanoService() {
        _classCallCheck(this, PlanoService);

        return _possibleConstructorReturn(this, (PlanoService.__proto__ || Object.getPrototypeOf(PlanoService)).apply(this, arguments));
    }

    _createClass(PlanoService, [{
        key: "Listar",
        value: function Listar() {
            return this.CriarRequisicao("GET", "/plano");
        }
    }, {
        key: "Buscar",
        value: function Buscar() {
            var fundacao = localStorage.getItem("fundacao");
            var empresa = localStorage.getItem("empresa");
            return this.CriarRequisicao("GET", "/plano/porFundacaoEmpresa/" + fundacao + "/" + empresa);
        }
    }, {
        key: "BuscarPorFundacaoEmpresaPlano",
        value: function BuscarPorFundacaoEmpresaPlano(plano) {
            var fundacao = localStorage.getItem("fundacao");
            var empresa = localStorage.getItem("empresa");
            return this.CriarRequisicao("GET", "/plano/porFundacaoEmpresaPlano/" + fundacao + "/" + empresa + "/" + plano);
        }
    }, {
        key: "RelatorioExtratoPorFundacaoEmpresaPlanoReferencia",
        value: function RelatorioExtratoPorFundacaoEmpresaPlanoReferencia(dados) {
            var fundacao = localStorage.getItem("fundacao");
            var empresa = localStorage.getItem("empresa");

            return this.CriarRequisicaoBlob("GET", "/plano/relatorioExtratoPorFundacaoEmpresaPlanoReferencia/" + fundacao + "/" + empresa + "/" + dados.plano + "/" + dados.dataInicio + "/" + dados.dataFim);
        }
    }]);

    return PlanoService;
}(_BaseService3.default);

exports.default = PlanoService;