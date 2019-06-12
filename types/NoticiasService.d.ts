import { BaseService } from "@intechprev/service";
declare class NoticiasService extends BaseService {
    constructor();
    BuscarTodas: () => Promise<any>;
    BuscarPorId: (id: number) => Promise<any>;
}
declare const _default: NoticiasService;
export default _default;
