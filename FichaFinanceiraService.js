import BaseService from "@intechprev/service";

class FichaFinanceiraService extends BaseService {
    BuscarUltimaPorPlano(cdPlano) {
        return this.CriarRequisicao("GET", `/fichaFinanceira/ultimaPorPlano/${cdPlano}`);
    }

    BuscarResumoAnosPorPlano(cdPlano) {
        return this.CriarRequisicao("GET", `/fichaFinanceira/resumoAnosPorPlano/${cdPlano}`);
    }

    BuscarResumoMesesPorPlanoAno(cdPlano, ano) {
        return this.CriarRequisicao("GET", `/fichaFinanceira/resumoMesesPorPlanoAno/${cdPlano}/${ano}`);
    }

    BuscarTiposPorPlanoAnoMes(cdPlano, ano, mes) {
        return this.CriarRequisicao("GET", `/fichaFinanceira/tiposPorPlanoAnoMes/${cdPlano}/${ano}/${mes}`);
    }

    SabesprevBuscarSaldoPorPlano(cdPlano) {
        return this.CriarRequisicao("GET", `/fichaFinanceira/sabesprevSaldoPorPlano/${cdPlano}`);
    }
}

export default new FichaFinanceiraService();