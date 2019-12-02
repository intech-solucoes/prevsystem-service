import { BaseService } from "@intechprev/service";
declare class SimuladorCodeprevService extends BaseService {
    constructor();
    Simular(dados: any): Promise<any>;
}
declare const _default: SimuladorCodeprevService;
export default _default;
