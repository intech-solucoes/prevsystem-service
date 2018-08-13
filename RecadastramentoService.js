import { BaseService } from "@intechprev/react-lib";

export default class RecadastramentoService extends BaseService {
    BuscarPassos() {
        return this.CriarRequisicao("GET", "/recadastramento");
    }
}