import { BaseService, TipoRequisicao } from "@intechprev/service";

class CalendarioPagamentoService extends BaseService {

    constructor() {
        super("calendarioPagamento");
    }
    
    Buscar = (cdPlano: string) =>
        this.CriarRequisicao(TipoRequisicao.GET);

}