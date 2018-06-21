import BaseService from "./BaseService";

export default class FuncionarioService extends BaseService {
    BuscarDados() {
        return this.CriarRequisicao("GET", "/funcionario");
    }
}
