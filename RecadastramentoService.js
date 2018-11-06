import { BaseService } from "@intechprev/react-lib";

class RecadastramentoService extends BaseService {
    BuscarPassos() {
        return this.CriarRequisicao("GET", "/recadastramento");
    }
}

export default new RecadastramentoService();