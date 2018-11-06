import { BaseService } from "@intechprev/react-lib";

class SituacaoPlanoService extends BaseService {

    BuscarTodas() {
        return this.CriarRequisicao("GET", '/sitPlano');
    }
}

export default new SituacaoPlanoService();