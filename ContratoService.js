import BaseService from "@intechprev/service";

class ContratoService extends BaseService {
    
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

    BuscarParametrosParcelas(CD_PLANO, CD_MODAL, CD_NATUR, valorSolicitado, concessao) {
        return this.CriarRequisicao("POST", `/contrato/parametrosParcelas`, { CD_PLANO, CD_MODAL, CD_NATUR, valorSolicitaco, concessao });
    }

    BuscarParcelas(params){
        return this.CriarRequisicao("POST", `/contrato/parametrosParcelas`, params);
    }

    SendToken(enviarEmail, enviarSMS){
        return this.CriarRequisicao("POST", `/contrato/gerarToken/${enviarEmail}/${enviarSMS}`,{});
    }

    Contratar(params){
        return this.CriarRequisicao("POST", `/contrato/contratar`,params);
    }
    
}

export default new ContratoService();