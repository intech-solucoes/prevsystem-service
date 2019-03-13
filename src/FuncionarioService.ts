import { BaseService, TipoRequisicao } from "@intechprev/service";

class FuncionarioService extends BaseService {

    constructor() {
        super("funcionario");
    }
    
    Buscar = () => this.CriarRequisicao(TipoRequisicao.GET);

    Pesquisar = (CD_FUNDACAO: string, CD_EMPRESA: string, CD_PLANO: string, CD_SIT_PLANO: string, NUM_MATRICULA: string, NOME: string) =>
        this.CriarRequisicao(TipoRequisicao.POST, null, "pesquisar", { CD_FUNDACAO, CD_EMPRESA, CD_PLANO, CD_SIT_PLANO, NUM_MATRICULA, NOME });

    BuscarPorCpf = () => this.CriarRequisicao(TipoRequisicao.GET, null, "buscarPorCpf");
}

export default new FuncionarioService();