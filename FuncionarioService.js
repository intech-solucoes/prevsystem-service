import BaseService from "@intechprev/service";

class FuncionarioService extends BaseService {
    Buscar() {
        return this.CriarRequisicao("GET", "/funcionario");
    }

    Pesquisar(CD_FUNDACAO, CD_EMPRESA, CD_PLANO, CD_SIT_PLANO, NUM_MATRICULA, NOME) {
        return this.CriarRequisicao("POST", "/funcionario/pesquisar", { CD_FUNDACAO, CD_EMPRESA, CD_PLANO, CD_SIT_PLANO, NUM_MATRICULA, NOME });
    }

    BuscarPorCpf() {
        return this.CriarRequisicao("GET", "/funcionario/buscarPorCpf");
    }
}

export default new FuncionarioService();