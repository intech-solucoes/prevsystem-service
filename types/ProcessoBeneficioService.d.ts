import { BaseService } from "@intechprev/service";
declare class ProcessoBeneficioService extends BaseService {
    constructor();
    BuscarPorPlano(plano: string): Promise<any>;
}
declare const _default: ProcessoBeneficioService;
export default _default;
