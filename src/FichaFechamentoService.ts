import { BaseService, TipoRequisicao } from "@intechprev/service";

class FichaFechamentoService extends BaseService {

    constructor() {
        super("fichaFechamento");
    }
    
    BuscarSaldoPorPlano = (cdPlano: string) => this.CriarRequisicao(TipoRequisicao.GET, null, `porPlano/${cdPlano}`);
}

export default new FichaFechamentoService();