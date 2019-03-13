import { BaseService, TipoRequisicao } from "@intechprev/service";

class FichaFinanceiraAssistidoService extends BaseService {

    constructor() {
        super("fichaFinanceiraAssistido");
    }
    
    BuscarDatasPorPlano = (cdPlano: string) =>
        this.CriarRequisicao(TipoRequisicao.GET, null, `datasPorPlano/${cdPlano}`);

    BuscarPorPlanoReferenciaTipoFolha = (cdPlano: string, referencia: string, tipoFolha: string) =>
        this.CriarRequisicao(TipoRequisicao.GET, null, `porPlanoReferenciaTipoFolha/${cdPlano}/${this.FormatarData(referencia)}/${tipoFolha}`);
}

export default new FichaFinanceiraAssistidoService();