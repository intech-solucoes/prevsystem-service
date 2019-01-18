import BaseService from "@intechprev/service";

class DadosPessoaisService extends BaseService {
    Buscar() {
        return this.CriarRequisicao("GET", `/dadosPessoais`);
    }
}

export default new DadosPessoaisService();