import { BaseService, TipoRequisicao } from "@intechprev/service";

class EmpresaService extends BaseService {

    constructor() {
        super("empresa");
    }

    BuscarTodas = () => this.CriarRequisicao(TipoRequisicao.GET);
}

export default new EmpresaService();