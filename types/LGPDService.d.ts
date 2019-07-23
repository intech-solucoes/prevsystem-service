import { BaseService } from "@intechprev/service";
declare class LGPDService extends BaseService {
    constructor();
    Buscar: () => Promise<any>;
    Inserir: (origem: number) => Promise<any>;
}
declare const _default: LGPDService;
export default _default;
