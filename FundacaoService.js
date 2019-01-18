import BaseService from "@intechprev/service";

class FundacaoService extends BaseService {

    BuscarPorCdFundacao(cdFundacao) {
        return this.CriarRequisicao("GET", `/fundacao/${cdFundacao}`);
    }
}

export default new FundacaoService();
