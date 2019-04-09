import { BaseService, TipoRequisicao } from "@intechprev/service";

class ContratoService extends BaseService {

    constructor() {
        super("contrato");
    }
    
    SabesprevBuscarAtivosPorPlano = (cdPlano: string) => 
        this.CriarRequisicao(TipoRequisicao.GET, null, `sabesprevAtivosPorPlano/${cdPlano}`);

    SabesprevBuscarPorAnoNum = (ano: string, num: string) =>
        this.CriarRequisicao(TipoRequisicao.GET, null, `sabesprevPorAnoNum/${ano}/${num}`);

    ParametrosPorPlano = (cdPlano: string) =>
        this.CriarRequisicao(TipoRequisicao.GET, null, `parametrosPorPlano/${cdPlano}`);
    
    BuscarConcessao = (cdPlano: string, cdModal: string, cdNatur: string, dataCredito: string) =>
        this.CriarRequisicao(TipoRequisicao.GET, null, `buscarConcessao/${cdPlano}/${cdModal}/${cdNatur}/${this.FormatarData(dataCredito)}`);

    BuscarParametrosParcelas = (CD_PLANO: string, CD_MODAL: string, CD_NATUR: string, valorSolicitado: string, concessao: any) =>
        this.CriarRequisicao(TipoRequisicao.POST, null, `parametrosParcelas`, { CD_PLANO, CD_MODAL, CD_NATUR, valorSolicitado, concessao });

    BuscarParcelas = (params: any) =>
        this.CriarRequisicao(TipoRequisicao.POST, null, `parametrosParcelas`, params);

    SendToken = (enviarEmail: boolean, enviarSMS: boolean) =>
        this.CriarRequisicao(TipoRequisicao.POST, null, `gerarToken/${enviarEmail}/${enviarSMS}`);

    Contratar = (params: any) =>
        this.CriarRequisicao(TipoRequisicao.POST, null, `contratar`, params);
    
}

export default new ContratoService();