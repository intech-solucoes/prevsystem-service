import { BaseService } from "@intechprev/react-lib";

export default class DependenteService extends BaseService {
    Buscar() {
        return this.CriarRequisicao("GET", `/dependente`);
    }
}
