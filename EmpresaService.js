import BaseService from "@intechprev/service";

class EmpresaService extends BaseService {

    BuscarTodas() {
        return this.CriarRequisicao("GET", "/empresa");
    }
}

export default new EmpresaService();