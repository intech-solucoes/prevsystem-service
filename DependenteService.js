import BaseService from "@intechprev/service";

class DependenteService extends BaseService {
    Buscar() {
        return this.CriarRequisicao("GET", `/dependente`);
    }
}

export default new DependenteService();