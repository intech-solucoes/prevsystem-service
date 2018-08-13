import { BaseService } from "@intechprev/react-lib";

export default class PlanoService extends BaseService {
    BuscarTodos() {
        return this.CriarRequisicao("GET", "/plano/todos");
    }

    Buscar() {
        return this.CriarRequisicao("GET", `/plano`);
    }

    BuscarPorCodigo(plano) {
        return this.CriarRequisicao("GET", `/plano/porCodigo/${plano}`)
    }

    RelatorioExtratoPorPlanoReferencia(plano, dataInicio, dataFim) {
        return this.CriarRequisicaoBlob("GET", `/plano/relatorioExtratoPorPlanoReferencia/${plano}/${dataInicio}/${dataFim}`);
    }

    RelatorioCertificado(plano) {
        return this.CriarRequisicaoBlob("GET", `/plano/certificado/${plano}`);
    }

}