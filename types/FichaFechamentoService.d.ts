import { BaseService } from "@intechprev/service";
declare class FichaFechamentoService extends BaseService {
    constructor();
    BuscarSaldoPorPlano: (cdPlano: string) => Promise<any>;
    BuscarDatasExtrato: (cdPlano: string) => Promise<any>;
}
declare const _default: FichaFechamentoService;
export default _default;
