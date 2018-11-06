import { BaseService } from "@intechprev/react-lib";

class DependenteService extends BaseService {
    Buscar() {
        return this.CriarRequisicao("GET", `/dependente`);
    }
}

export default new DependenteService();