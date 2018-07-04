import BaseService from "./BaseService";

export default class RecadastramentoService extends BaseService {
    BuscarPassos() {
        return this.CriarRequisicao("GET", "/recadastramento");
    }
}