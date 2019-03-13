import { BaseService } from "@intechprev/service";
declare class FichaFinanceiraAssistidoService extends BaseService {
    constructor();
    BuscarDatasPorPlano: (cdPlano: string) => Promise<any>;
    BuscarPorPlanoReferenciaTipoFolha: (cdPlano: string, referencia: string, tipoFolha: string) => Promise<any>;
}
declare const _default: FichaFinanceiraAssistidoService;
export default _default;
