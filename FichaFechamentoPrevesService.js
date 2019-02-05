import BaseService from "@intechprev/service";

class FichaFechamentoPrevesService extends BaseService {
    BuscarSaldoPorPlano(cdPlano) {
        return this.CriarRequisicao("GET", `/fichaFechamento/porPlano/${cdPlano}`);
    }
}

export default new FichaFechamentoPrevesService();