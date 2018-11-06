import { BaseService } from "@intechprev/react-lib";

class FuncionarioService extends BaseService {
    Buscar() {
        return this.CriarRequisicao("GET", "/funcionario");
    }
}

export default new FuncionarioService();