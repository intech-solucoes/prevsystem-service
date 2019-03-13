import { BaseService } from "@intechprev/service";
declare class HistSaldoService extends BaseService {
    constructor();
    BuscarPorPlano: (plano: string) => Promise<any>;
}
declare const _default: HistSaldoService;
export default _default;
