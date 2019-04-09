import { BaseService } from "@intechprev/service";
declare class PlanoService extends BaseService {
    constructor();
    Buscar: () => Promise<any>;
    BuscarTodos: () => Promise<any>;
    BuscarPorCodigo: (plano: string) => Promise<any>;
    RelatorioExtratoPorPlanoEmpresaReferencia(plano: string, empresa: string, dataInicio: string, dataFim: string, enviarPorEmail?: boolean): Promise<any>;
    RelatorioExtratoPorPlanoReferencia(plano: string, dataInicio: string, dataFim: string): Promise<any>;
    RelatorioCertificado(plano: string, empresa: string, enviarPorEmail?: boolean): Promise<any>;
    BuscarPorEmpresa(empresa: string): Promise<any>;
    RelatorioCertificadoSeguro(enviarPorEmail?: boolean): Promise<any>;
    PossuiCertificadoSeguro(): Promise<any>;
}
declare const _default: PlanoService;
export default _default;