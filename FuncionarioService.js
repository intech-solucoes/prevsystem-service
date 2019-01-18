import BaseService from "@intechprev/service";

class FuncionarioService extends BaseService {
    Buscar() {
        return this.CriarRequisicao("GET", "/funcionario");
    }
}

export default new FuncionarioService();