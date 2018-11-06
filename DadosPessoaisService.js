import { BaseService } from "@intechprev/react-lib";

class DadosPessoaisService extends BaseService {
    Buscar() {
        return this.CriarRequisicao("GET", `/dadosPessoais`);
    }
}

export default new DadosPessoaisService();