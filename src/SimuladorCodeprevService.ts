import { BaseService, TipoRequisicao } from "@intechprev/service";

class SimuladorCodeprevService extends BaseService {

    constructor() {
        super("SimuladorCodeprev");
    }
    
    Simular(dados: any) {
        return this.CriarRequisicao(TipoRequisicao.POST, null, "Simular", dados);
    }
}

export default new SimuladorCodeprevService();