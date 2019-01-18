import BaseService from "@intechprev/service";

class RecadastramentoService extends BaseService {
    BuscarPassos() {
        return this.CriarRequisicao("GET", "/recadastramento");
    }
}

export default new RecadastramentoService();