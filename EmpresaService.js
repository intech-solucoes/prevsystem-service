import { BaseService } from "@intechprev/react-lib";

class EmpresaService extends BaseService {

    BuscarTodas() {
        return this.CriarRequisicao("GET", "/empresa");
    }
}

export default EmpresaService;