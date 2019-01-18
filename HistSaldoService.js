import BaseService from "@intechprev/service";

class HistSaldoService extends BaseService {

    BuscarPorPlano(plano) {
        return this.CriarRequisicao("GET", `/histSaldo/porPlano/${plano}`);
    }
}

export default new HistSaldoService();
