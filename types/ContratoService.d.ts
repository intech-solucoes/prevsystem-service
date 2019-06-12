import { BaseService } from "@intechprev/service";
declare class ContratoService extends BaseService {
    constructor();
    SabesprevBuscarAtivosPorPlano: (cdPlano: string) => Promise<any>;
    SabesprevBuscarPorAnoNumDtaQuitacao: (ano: string, num: string, dtaQuitacao: string) => Promise<any>;
    SabesprevBuscarPorAnoNum: (ano: string, num: string) => Promise<any>;
    ParametrosPorPlano: (cdPlano: string) => Promise<any>;
    BuscarConcessao: (cdPlano: string, cdModal: string, cdNatur: string, dataCredito: string) => Promise<any>;
    BuscarParametrosParcelas: (CD_PLANO: string, CD_MODAL: string, CD_NATUR: string, valorSolicitado: string, concessao: any) => Promise<any>;
    BuscarParcelas: (params: any) => Promise<any>;
    SendToken: (enviarEmail: boolean, enviarSMS: boolean) => Promise<any>;
    EnviarCAC: (email: string, contrato: any) => Promise<any>;
    Contratar: (params: any) => Promise<any>;
    BuscarQuantidadeEmDeferimento: () => Promise<any>;
}
declare const _default: ContratoService;
export default _default;
