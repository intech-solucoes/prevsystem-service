import { BaseService, TipoRequisicao } from "@intechprev/service";

class HistSaldoService extends BaseService {

    constructor() {
        super("histSaldo");
    }

    BuscarPorPlano = (plano: string) =>
        this.CriarRequisicao(TipoRequisicao.GET, null, `porPlano/${plano}`);
}

export default new HistSaldoService();