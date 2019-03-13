import { BaseService, TipoRequisicao } from "@intechprev/service";

class FundacaoService extends BaseService {

    constructor() {
        super("fundacao");
    }

    BuscarPorCdFundacao = (cdFundacao: string) =>
        this.CriarRequisicao(TipoRequisicao.GET, null, `${cdFundacao}`);
}

export default new FundacaoService();