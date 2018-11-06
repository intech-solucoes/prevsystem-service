import { BaseService } from "@intechprev/react-lib";

class ListasService extends BaseService {

    ListarFundacaoEmpresaPlano() {
        return this.CriarRequisicao("GET", "/listas/fundacaoEmpresaPlano");
    }
}

export default new ListasService();