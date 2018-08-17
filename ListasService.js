import { BaseService } from "@intechprev/react-lib";

export default class ListasService extends BaseService {

    ListarFundacaoEmpresaPlano() {
        return this.CriarRequisicao("GET", "/listas/fundacaoEmpresaPlano");
    }
}
