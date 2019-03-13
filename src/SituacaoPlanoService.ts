import { BaseService, TipoRequisicao } from "@intechprev/service";

class SituacaoPlanoService extends BaseService {

    constructor() {
        super("sitPlano");
    }
    

    BuscarTodas() {
        return this.CriarRequisicao(TipoRequisicao.GET);
    }
}

export default new SituacaoPlanoService();