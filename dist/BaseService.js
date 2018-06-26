"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseService = function () {
    function BaseService(config) {
        _classCallCheck(this, BaseService);

        this.config = config;
    }

    _createClass(BaseService, [{
        key: "CriarRequisicao",
        value: function CriarRequisicao(tipo, url) {
            var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            return (0, _axios2.default)({
                method: tipo,
                url: this.config.apiUrl + url,
                data: data,
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            });
        }
    }, {
        key: "CriarRequisicaoBlob",
        value: function CriarRequisicaoBlob(tipo, url) {
            var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            return (0, _axios2.default)({
                method: tipo,
                url: this.config.apiUrl + url,
                data: data,
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                },
                responseType: 'blob'
            });
        }
    }]);

    return BaseService;
}();

exports.default = BaseService;