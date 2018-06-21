import BaseService from "./BaseService";

class PlanoService extends BaseService {
    Buscar() {
        var fundacao = localStorage.getItem("fundacao");
        var empresa = localStorage.getItem("empresa");
        return this.CriarRequisicao("GET", `/plano/porFundacaoEmpresa/${fundacao}/${empresa}`, null);
    }

    BuscarPorFundacaoEmpresaPlano(plano) {
        var fundacao = localStorage.getItem("fundacao");
        var empresa = localStorage.getItem("empresa");
        return this.CriarRequisicao("GET", `/plano/porFundacaoEmpresaPlano/${fundacao}/${empresa}/${plano}`, null)
    }

    BuscarPorFundacaoEmpresaPlanoReferencia(dados) {
        var fundacao = localStorage.getItem("fundacao");
        var empresa = localStorage.getItem("empresa");

        return this.CriarRequisicao("GET", `/plano/relatorioExtratoPorFundacaoEmpresaPlanoReferencia/${fundacao}/${empresa}/${dados.plano}/${dados.dataInicio}/${dados.dataFim}`, null);
    }

}

export default new PlanoService();