import BaseService from './BaseService';

export default class DependenteService extends BaseService {
    Buscar() {
        return this.CriarRequisicao("GET", `/dependente`);
    }
}
