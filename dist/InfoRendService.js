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

var InfoRendService = function (_BaseService) {
    _inherits(InfoRendService, _BaseService);

    function InfoRendService() {
        _classCallCheck(this, InfoRendService);

        return _possibleConstructorReturn(this, (InfoRendService.__proto__ || Object.getPrototypeOf(InfoRendService)).apply(this, arguments));
    }

    _createClass(InfoRendService, [{
        key: "BuscarReferencias",
        value: function BuscarReferencias() {
            return this.CriarRequisicao("GET", "/infoRend/referencias");
        }
    }, {
        key: "BuscarPorReferencia",
        value: function BuscarPorReferencia(referencia) {
            return this.CriarRequisicao("GET", "/infoRend/porReferencia/" + referencia);
        }
    }, {
        key: "Relatorio",
        value: function Relatorio(referencia) {
            return this.CriarRequisicaoBlob("GET", "/infoRend/relatorio/" + referencia);
        }
    }]);

    return InfoRendService;
}(_BaseService3.default);

exports.default = InfoRendService;