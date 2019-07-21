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
var LGPDService = /** @class */ (function (_super) {
    __extends(LGPDService, _super);
    function LGPDService() {
        var _this = _super.call(this, "LGPD") || this;
        _this.Buscar = function () {
            return _this.CriarRequisicao(service_1.TipoRequisicao.GET);
        };
        _this.Inserir = function (origem) {
            return _this.CriarRequisicao(service_1.TipoRequisicao.POST, null, "" + origem);
        };
        return _this;
    }
    return LGPDService;
}(service_1.BaseService));
exports.default = new LGPDService();
