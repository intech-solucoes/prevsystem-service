import { BaseService } from "@intechprev/service";
declare class CalendarioPagamentoService extends BaseService {
    constructor();
    Buscar: () => Promise<any>;
    BuscarPorPlano: (cdPlano: string) => Promise<any>;
}
declare const _default: CalendarioPagamentoService;
export default _default;
