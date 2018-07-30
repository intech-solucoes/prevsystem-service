import BaseService from './BaseService';

export default class ListasService extends BaseService {

    ListarFundacaoEmpresaPlano() {
        return this.CriarRequisicao("GET", "/listas/fundacaoEmpresaPlano");
    }
}
