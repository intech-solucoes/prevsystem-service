import BaseService from "./BaseService";

class FundacaoService extends BaseService {

    BuscarPorCdFundacao(cdFundacao) {
        return this.CriarRequisicao("GET", `/fundacao/${cdFundacao}`);
    }
}

export default FundacaoService;
