import BaseService from "@intechprev/service";

class ProcessoBeneficioService extends BaseService {
    BuscarPorPlano(plano) {
        return this.CriarRequisicao("GET", `/processoBeneficio/porPlano/${plano}`)
    }
}

export default new ProcessoBeneficioService();