import { BaseService, TipoRequisicao } from "@intechprev/service";

class FichaFinanceiraAssistidoService extends BaseService {

    constructor() {
        super("fichaFinanceiraAssistido");
    }
    
    BuscarDatasPorPlano = (cdPlano: string) =>
        this.CriarRequisicao(TipoRequisicao.GET, null, `datasPorPlano/${cdPlano}`);

    BuscarPorPlanoReferenciaTipoFolha = (cdPlano: string, referencia: string, tipoFolha: string) =>
        this.CriarRequisicao(TipoRequisicao.GET, null, `porPlanoReferenciaTipoFolha/${cdPlano}/${this.FormatarData(referencia)}/${tipoFolha}`);
    
    BuscarUltimaPorPlano = (cdPlano: string) =>
        this.CriarRequisicao(TipoRequisicao.GET, null, `ultimaFolhaPorPlano/${cdPlano}`);

    BuscarUltimaPorPlanoEspecie = (cdPlano: string, cdEspecie: string) =>
        this.CriarRequisicao(TipoRequisicao.GET, null, `ultimaFolhaPorPlano/${cdPlano}/${cdEspecie}`);
    
    BuscarUltimaPorPlanoProcesso = (cdPlano: string, cdEspecie: string, ano: string, num: string) =>
        this.CriarRequisicao(TipoRequisicao.GET, null, `ultimaFolhaPorPlanoProcesso/${cdPlano}/${cdEspecie}/${ano}/${num}`);
}

export default new FichaFinanceiraAssistidoService();