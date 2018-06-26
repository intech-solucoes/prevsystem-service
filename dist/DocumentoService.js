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

var DocumentoService = function (_BaseService) {
    _inherits(DocumentoService, _BaseService);

    function DocumentoService() {
        _classCallCheck(this, DocumentoService);

        return _possibleConstructorReturn(this, (DocumentoService.__proto__ || Object.getPrototypeOf(DocumentoService)).apply(this, arguments));
    }

    _createClass(DocumentoService, [{
        key: "BuscarPorPasta",
        value: function BuscarPorPasta() {
            var oidPasta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            return this.CriarRequisicao("GET", "/documento/porPasta/" + oidPasta);
        }
    }, {
        key: "Criar",
        value: function Criar(OID_ARQUIVO_UPLOAD, TXT_TITULO, IND_ATIVO, NUM_ORDEM) {
            var OID_PASTA = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

            var data = {
                OID_ARQUIVO_UPLOAD: OID_ARQUIVO_UPLOAD,
                TXT_TITULO: TXT_TITULO,
                IND_ATIVO: IND_ATIVO,
                NUM_ORDEM: NUM_ORDEM,
                OID_PASTA: OID_PASTA
            };

            return this.CriarRequisicao("POST", "/documento", data);
        }
    }, {
        key: "CriarPasta",
        value: function CriarPasta(NOM_PASTA) {
            var OID_DOCUMENTO_PASTA_PAI = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            return this.CriarRequisicao("POST", "/documento/criarPasta", { NOM_PASTA: NOM_PASTA, OID_DOCUMENTO_PASTA_PAI: OID_DOCUMENTO_PASTA_PAI });
        }
    }]);

    return DocumentoService;
}(_BaseService3.default);

exports.default = DocumentoService;