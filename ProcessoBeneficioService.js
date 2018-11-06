import { BaseService } from "@intechprev/react-lib";

class ProcessoBeneficioService extends BaseService {
    BuscarPorPlano(plano) {
        return this.CriarRequisicao("GET", `/processoBeneficio/porPlano/${plano}`)
    }
}

export default new ProcessoBeneficioService();