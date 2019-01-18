import BaseService from "@intechprev/service";

class ListasService extends BaseService {

    ListarFundacaoEmpresaPlano() {
        return this.CriarRequisicao("GET", "/listas/fundacaoEmpresaPlano");
    }
}

export default new ListasService();