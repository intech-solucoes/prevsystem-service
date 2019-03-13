import { BaseService, TipoRequisicao } from "@intechprev/service";

class ListasService extends BaseService {

    constructor() {
        super("listas");
    }

    ListarFundacaoEmpresaPlano = () =>
        this.CriarRequisicao(TipoRequisicao.GET, "fundacaoEmpresaPlano");
}

export default new ListasService();