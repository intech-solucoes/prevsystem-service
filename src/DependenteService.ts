import { BaseService, TipoRequisicao } from "@intechprev/service";

class DependenteService extends BaseService {

    constructor() {
        super("dependente");
    }

    Buscar = () => this.CriarRequisicao(TipoRequisicao.GET);
}

export default new DependenteService();