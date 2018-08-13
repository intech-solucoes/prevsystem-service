import { BaseService } from "@intechprev/react-lib";

export default class DadosPessoaisService extends BaseService {
    SabesprevBuscarAtivosPorPlano(cdPlano) {
        return this.CriarRequisicao("GET", `/contrato/sabesprevAtivosPorPlano/${cdPlano}`);
    }

    SabesprevBuscarPorAnoNum(ano, num) {
        return this.CriarRequisicao("GET", `/contrato/sabesprevPorAnoNum/${ano}/${num}`);
    }
}
