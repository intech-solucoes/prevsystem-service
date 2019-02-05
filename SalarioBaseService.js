import BaseService from "@intechprev/service";

class SalarioBaseService extends BaseService {
    Buscar() {
        return this.CriarRequisicao("GET", `/salarioBase`);
    }
}

export default new SalarioBaseService();