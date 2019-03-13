import { BaseService, TipoRequisicao } from "@intechprev/service";

class DadosPessoaisService extends BaseService {

    constructor() {
        super("dadosPessoais");
    }

    Buscar = () => this.CriarRequisicao(TipoRequisicao.GET);
}

export default new DadosPessoaisService();