import { BaseService } from "@intechprev/service";
declare class FichaFechamentoPrevesService extends BaseService {
    constructor();
    BuscarSaldoPorPlano: (cdPlano: string) => Promise<any>;
}
declare const _default: FichaFechamentoPrevesService;
export default _default;
