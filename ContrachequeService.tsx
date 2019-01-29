import { BaseService, TipoRequisicao, TipoResposta } from "@intechprev/service";

class ContrachequeService extends BaseService {

    constructor() {
        super("fichaFinanceiraAssistido");
    }

    BuscarDatas(cdPlano: string) {
        return this.CriarRequisicao(TipoRequisicao.GET, null, `/datasPorPlano/${cdPlano}`);
    }
    
    BuscarPorPlanoReferenciaTipoFolha(cdPlano: string, referencia: string) {
        var tipoFolha = "1";
        return this.CriarRequisicao(TipoRequisicao.GET, null, `/porPlanoReferenciaTipoFolha/${cdPlano}/${this.FormatarData(referencia)}/${tipoFolha}`);
    }

    Relatorio(cdPlano: string, referencia: string) {
        var tipoFolha = "1";
        return this.CriarRequisicao(TipoRequisicao.GET, null, `/relatorio/${cdPlano}/${this.FormatarData(referencia)}/${tipoFolha}`, TipoResposta.Blob);
    }
}

export default new ContrachequeService();