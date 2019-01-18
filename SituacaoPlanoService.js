import BaseService from "@intechprev/service";

class SituacaoPlanoService extends BaseService {

    BuscarTodas() {
        return this.CriarRequisicao("GET", '/sitPlano');
    }
}

export default new SituacaoPlanoService();