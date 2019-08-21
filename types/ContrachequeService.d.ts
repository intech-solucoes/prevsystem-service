import { BaseService } from "@intechprev/service";
declare class ContrachequeService extends BaseService {
    constructor();
    BuscarDatas(cdPlano: string): Promise<any>;
    BuscarPorPlanoReferenciaTipoFolha(cdPlano: string, referencia: string, tipoFolha: string): Promise<any>;
    BuscarPorPlanoReferenciaTipoFolhaEspecie(cdPlano: string, referencia: string, tipoFolha: string, especie: string): Promise<any>;
    Relatorio(cdPlano: string, referencia: string, tipoFolha: string, especie: string, enviarPorEmail?: boolean): Promise<any>;
}
declare const _default: ContrachequeService;
export default _default;
