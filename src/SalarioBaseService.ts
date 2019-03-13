import { BaseService, TipoRequisicao } from "@intechprev/service";

class SalarioBaseService extends BaseService {

    constructor() {
        super("salarioBase");
    }
    
    Buscar() {
        return this.CriarRequisicao(TipoRequisicao.GET);
    }
}

export default new SalarioBaseService();