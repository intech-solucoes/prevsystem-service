import { BaseService } from "@intechprev/service";
declare class MensagemService extends BaseService {
    constructor();
    BuscarTodas: () => Promise<any>;
    BuscarPorFundacaoEmpresaPlano: (fundacao: string, empresa: string, plano: string) => Promise<any>;
    BuscarPorPlano: (plano: string) => Promise<any>;
    EnviarMensagem: (data: any) => Promise<any>;
}
declare const _default: MensagemService;
export default _default;
