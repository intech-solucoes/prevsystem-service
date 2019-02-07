import BaseService from "@intechprev/service";

class MensagemService extends BaseService {
    BuscarTodas() {
        return this.CriarRequisicao("GET", "/mensagem");
    }

    BuscarPorFundacaoEmpresaPlano(plano) {
        var fundacao = localStorage.getItem("fundacao");
        var empresa = localStorage.getItem("empresa");
        return this.CriarRequisicao("GET", `/mensagem/porFundacaoEmpresaPlano/${fundacao}/${empresa}/${plano}`);
    }

    BuscarPorPlano(plano) {
        return this.CriarRequisicao("GET", `/mensagem/porPlano/${plano}`);
    }

    EnviarMensagem(data) {
        return this.CriarRequisicao("POST", "/mensagem", data);
    }

}

export default new MensagemService();