import { BaseService } from "@intechprev/react-lib";

class HistSaldoService extends BaseService {

    BuscarPorPlano(plano) {
        return this.CriarRequisicao("GET", `/histSaldo/porPlano/${plano}`);
    }
}

export default HistSaldoService;
