import { BaseService } from "@intechprev/service";
declare class InfoRendService extends BaseService {
    constructor();
    BuscarReferencias: () => Promise<any>;
    BuscarPorReferencia: (referencia: string) => Promise<any>;
    Relatorio: (referencia: string) => Promise<any>;
}
declare const _default: InfoRendService;
export default _default;
