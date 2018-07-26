import BaseService from './BaseService';

class EmpresaService extends BaseService {

    BuscarTodas() {
        return this.CriarRequisicao("GET", "/empresa");
    }
}

export default EmpresaService;