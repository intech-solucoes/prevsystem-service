import { BaseService } from "@intechprev/react-lib";

class ContrachequeService extends BaseService {
    BuscarDatas(cdPlano) {
        return this.CriarRequisicao("GET", `/fichaFinanceiraAssistido/datasPorPlano/${cdPlano}`);
    }
    
    BuscarPorPlanoReferenciaTipoFolha(cdPlano, referencia) {
        var tipoFolha = "1";
        return this.CriarRequisicao("GET", `/fichaFinanceiraAssistido/porPlanoReferenciaTipoFolha/${cdPlano}/${this.FormatarData(referencia)}/${tipoFolha}`);
    }

    Relatorio(cdPlano, referencia) {
        var tipoFolha = "1";
        return this.CriarRequisicaoBlob("GET", `/fichaFinanceiraAssistido/relatorio/${cdPlano}/${this.FormatarData(referencia)}/${tipoFolha}`);
    }
}

export default new ContrachequeService();