import { BaseService, TipoRequisicao } from "@intechprev/service";

class RelacionamentoService extends BaseService {

    constructor() {
        super("relacionamento");
    }
    
    Enviar(email: string, assunto: string, mensagem: string) {
        return this.CriarRequisicao(TipoRequisicao.POST, null, null, { Email: email, Assunto: assunto, Mensagem: mensagem });
    }
}

export default new RelacionamentoService();