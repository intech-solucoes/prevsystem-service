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

    RelatorioExtratoPorFundacaoEmpresaPlanoReferencia(dados) {
        var fundacao = localStorage.getItem("fundacao");
        var empresa = localStorage.getItem("empresa");

        return this.CriarRequisicaoBlob("GET", `/plano/relatorioExtratoPorFundacaoEmpresaPlanoReferencia/${fundacao}/${empresa}/${dados.plano}/${dados.dataInicio}/${dados.dataFim}`);
    }

}