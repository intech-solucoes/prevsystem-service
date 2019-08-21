import { BaseService, TipoRequisicao } from "@intechprev/service";

class CalendarioPagamentoService extends BaseService {

    constructor() {
        super("calendarioPagamento");
    }
    
    Buscar = () =>
        this.CriarRequisicao(TipoRequisicao.GET);
    
    BuscarPorPlano = (cdPlano: string) =>
        this.CriarRequisicao(TipoRequisicao.GET, null, `porPlano/${cdPlano}`);

}

export default new CalendarioPagamentoService();