import { BaseService, TipoRequisicao } from "@intechprev/service";

class CalendarioPagamentoService extends BaseService {

    constructor() {
        super("calendarioPagamento");
    }
    
    Buscar = () =>
        this.CriarRequisicao(TipoRequisicao.GET);

}

export default new CalendarioPagamentoService();