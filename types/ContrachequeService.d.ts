import { BaseService } from "@intechprev/service";
declare class ContrachequeService extends BaseService {
    constructor();
    BuscarDatas(cdPlano: string): Promise<any>;
    BuscarPorPlanoReferenciaTipoFolha(cdPlano: string, referencia: string): Promise<any>;
    Relatorio(cdPlano: string, referencia: string): Promise<any>;
}
declare const _default: ContrachequeService;
export default _default;
