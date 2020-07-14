import { BaseService, TipoRequisicao } from "@intechprev/service";

class FichaFinanceiraService extends BaseService {
    constructor() {
        super("fichaFinanceira");
    }

    BuscarUltimaPorPlano = (cdPlano: string) =>
        this.CriarRequisicao(
            TipoRequisicao.GET,
            null,
            `ultimaPorPlano/${cdPlano}`
        );

    BuscarUltimaExibicaoPorPlano = (cdPlano: string) =>
        this.CriarRequisicao(
            TipoRequisicao.GET,
            null,
            `ultimaExibicaoPorPlano/${cdPlano}`
        );

    BuscarResumoAnosPorPlano = (cdPlano: string) =>
        this.CriarRequisicao(
            TipoRequisicao.GET,
            null,
            `resumoAnosPorPlano/${cdPlano}`
        );

    BuscarResumoMesesPorPlanoAno = (cdPlano: string, ano: string) =>
        this.CriarRequisicao(
            TipoRequisicao.GET,
            null,
            `resumoMesesPorPlanoAno/${cdPlano}/${ano}`
        );

    BuscarTiposPorPlanoAnoMes = (cdPlano: string, ano: string, mes: string) =>
        this.CriarRequisicao(
            TipoRequisicao.GET,
            null,
            `tiposPorPlanoAnoMes/${cdPlano}/${ano}/${mes}`
        );

    SabesprevBuscarSaldoPorPlano = (cdPlano: string) =>
        this.CriarRequisicao(
            TipoRequisicao.GET,
            null,
            `sabesprevSaldoPorPlano/${cdPlano}`
        );

    SaoFranciscoBuscarSaldoPorPlano = (cdPlano: string) =>
        this.CriarRequisicao(
            TipoRequisicao.GET,
            null,
            `saoFranciscoSaldoPorPlano/${cdPlano}`
        );

    BuscarDatasInformePorFundacaoInscricao = (
        fundacao: string,
        inscricao: string
    ) =>
        this.CriarRequisicao(
            TipoRequisicao.GET,
            null,
            `datasPorFundacaoInscricao/${fundacao}/${inscricao}`
        );

    BuscarInformePorFundacaoInscricaoAno = (
        fundacao: string,
        inscricao: string,
        ano: string
    ) =>
        this.CriarRequisicao(
            TipoRequisicao.GET,
            null,
            `informePorFundacaInscricaoAno/${fundacao}/${inscricao}/${ano}`
        );

    BuscarDatasInforme = () =>
        this.CriarRequisicao(TipoRequisicao.GET, null, `BuscarDatasInforme`);

    BuscarInformePorAno = (ano: number) =>
        this.CriarRequisicao(
            TipoRequisicao.GET,
            null,
            `BuscarInformePorAno/${ano}`
        );

    EnviarDeclaracaoIR = (ano: number, email: string) =>
        this.CriarRequisicao(
            TipoRequisicao.GET,
            null,
            `EnviarDeclaracaoIR/${ano}/${email}`
        );
}

export default new FichaFinanceiraService();
