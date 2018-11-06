import { BaseService } from "@intechprev/react-lib";

class DadosPessoaisService extends BaseService {
    SabesprevBuscarAtivosPorPlano(cdPlano) {
        return this.CriarRequisicao("GET", `/contrato/sabesprevAtivosPorPlano/${cdPlano}`);
    }

    SabesprevBuscarPorAnoNum(ano, num) {
        return this.CriarRequisicao("GET", `/contrato/sabesprevPorAnoNum/${ano}/${num}`);
    }
}

export default new DadosPessoaisService();