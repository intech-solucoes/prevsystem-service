import BaseService from "@intechprev/service";

class DadosPessoaisService extends BaseService {
    SabesprevBuscarAtivosPorPlano(cdPlano) {
        return this.CriarRequisicao("GET", `/contrato/sabesprevAtivosPorPlano/${cdPlano}`);
    }

    SabesprevBuscarPorAnoNum(ano, num) {
        return this.CriarRequisicao("GET", `/contrato/sabesprevPorAnoNum/${ano}/${num}`);
    }

    ParametrosPorPlano(cdPlano) {
        return this.CriarRequisicao("GET", `/contrato/parametrosPorPlano/${cdPlano}`);
    }

    BuscarConcessao(cdPlano, cdModal, cdNatur, dataCredito) {
        return this.CriarRequisicao("GET", `/contrato/buscarConcessao/${cdPlano}/${cdModal}/${cdNatur}/${this.FormatarData(dataCredito)}`);
    }
}

export default new DadosPessoaisService();