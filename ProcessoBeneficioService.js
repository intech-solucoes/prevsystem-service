import { BaseService } from "@intechprev/react-lib";

export default class ProcessoBeneficioService extends BaseService {
    BuscarPorPlano(plano) {
        return this.CriarRequisicao("GET", `/processoBeneficio/porPlano/${plano}`)
    }
}