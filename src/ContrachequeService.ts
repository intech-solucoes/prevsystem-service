import { BaseService, TipoRequisicao, TipoResposta } from "@intechprev/service";

class ContrachequeService extends BaseService {
    constructor() { 
        super("fichaFinanceiraAssistido")
    }

    BuscarDatas(cdPlano: string) {
        return this.CriarRequisicao(TipoRequisicao.GET, null, `datasPorPlano/${cdPlano}`);
    }
    
    BuscarPorPlanoReferenciaTipoFolha(cdPlano: string , referencia: string, tipoFolha: string) {
        return this.CriarRequisicao(TipoRequisicao.GET, null, `porPlanoReferenciaTipoFolha/${cdPlano}/${this.FormatarData(referencia)}/${tipoFolha}`);
    }

    Relatorio(cdPlano: string, referencia: string, tipoFolha: string) {
        return this.CriarRequisicao(TipoRequisicao.GET, null, `relatorio/${cdPlano}/${this.FormatarData(referencia)}/${tipoFolha}`, null, TipoResposta.Blob);
    }
}

export default new ContrachequeService();