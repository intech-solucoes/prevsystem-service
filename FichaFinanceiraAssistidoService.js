import BaseService from "@intechprev/service";

class FichaFinanceiraAssistidoService extends BaseService {
    BuscarDatasPorPlano(cdPlano) {
        return this.CriarRequisicao("GET", `/fichaFinanceiraAssistido/datasPorPlano/${cdPlano}`);
    }

    BuscarPorPlanoReferenciaTipoFolha(cdPlano, referencia, tipoFolha) {
        return this.CriarRequisicao("GET", `/fichaFinanceiraAssistido/porPlanoReferenciaTipoFolha/${cdPlano}/${this.FormatarData(referencia)}/${tipoFolha}`);
    }
}

export default new FichaFinanceiraAssistidoService();