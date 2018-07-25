import BaseService from './BaseService';

class SituacaoPlanoService extends BaseService {

    BuscarTodas() {
        return this.CriarRequisicao("GET", '/sitPlano');
    }
}

export default SituacaoPlanoService;
