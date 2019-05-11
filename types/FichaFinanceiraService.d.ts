import { BaseService } from "@intechprev/service";
declare class FichaFinanceiraService extends BaseService {
    constructor();
    BuscarUltimaPorPlano: (cdPlano: string) => Promise<any>;
    BuscarUltimaExibicaoPorPlano: (cdPlano: string) => Promise<any>;
    BuscarResumoAnosPorPlano: (cdPlano: string) => Promise<any>;
    BuscarResumoMesesPorPlanoAno: (cdPlano: string, ano: string) => Promise<any>;
    BuscarTiposPorPlanoAnoMes: (cdPlano: string, ano: string, mes: string) => Promise<any>;
    SabesprevBuscarSaldoPorPlano: (cdPlano: string) => Promise<any>;
    BuscarDatasInformePorFundacaoInscricao: (fundacao: string, inscricao: string) => Promise<any>;
    BuscarInformePorFundacaoInscricaoAno: (fundacao: string, inscricao: string, ano: string) => Promise<any>;
}
declare const _default: FichaFinanceiraService;
export default _default;
