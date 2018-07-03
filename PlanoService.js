import BaseService from "./BaseService";

export default class PlanoService extends BaseService {
    Listar() {
        return this.CriarRequisicao("GET", "/plano");
    }

    Buscar() {
        var fundacao = localStorage.getItem("fundacao");
        var empresa = localStorage.getItem("empresa");
        return this.CriarRequisicao("GET", `/plano/porFundacaoEmpresa/${fundacao}/${empresa}`);
    }

    BuscarPorFundacaoEmpresaPlano(plano) {
        var fundacao = localStorage.getItem("fundacao");
        var empresa = localStorage.getItem("empresa");
        return this.CriarRequisicao("GET", `/plano/porFundacaoEmpresaPlano/${fundacao}/${empresa}/${plano}`)
    }

    RelatorioExtratoPorPlanoReferencia(plano, dataInicio, dataFim) {
        return this.CriarRequisicaoBlob("GET", `/plano/relatorioExtratoPorPlanoReferencia/${plano}/${dataInicio}/${dataFim}`);
    }

    RelatorioCertificado(plano) {
        return this.CriarRequisicaoBlob("GET", `/plano/certificado/${plano}`);
    }

}