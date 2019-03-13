import { BaseService } from "@intechprev/service";
declare class RelacionamentoService extends BaseService {
    constructor();
    Enviar(email: string, assunto: string, mensagem: string): Promise<any>;
}
declare const _default: RelacionamentoService;
export default _default;
