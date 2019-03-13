import { BaseService } from "@intechprev/service";
declare class FuncionarioService extends BaseService {
    constructor();
    Buscar: () => Promise<any>;
    Pesquisar: (CD_FUNDACAO: string, CD_EMPRESA: string, CD_PLANO: string, CD_SIT_PLANO: string, NUM_MATRICULA: string, NOME: string) => Promise<any>;
    BuscarPorCpf: () => Promise<any>;
}
declare const _default: FuncionarioService;
export default _default;
