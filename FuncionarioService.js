import { BaseService } from "@intechprev/react-lib";

export default class FuncionarioService extends BaseService {
    Buscar() {
        return this.CriarRequisicao("GET", "/funcionario");
    }
}
