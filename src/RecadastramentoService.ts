import { BaseService, TipoRequisicao } from "@intechprev/service";

class RecadastramentoService extends BaseService {

    constructor() {
        super("recadastramento");
    }
    
    BuscarPassos() {
        return this.CriarRequisicao(TipoRequisicao.GET);
    }
}

export default new RecadastramentoService();