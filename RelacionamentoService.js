import BaseService from "@intechprev/service";

class RelacionamentoService extends BaseService {
    Enviar(email, assunto, mensagem) {
        return this.CriarRequisicao("POST", `/relacionamento`, { Email: email, Assunto: assunto, Mensagem: mensagem });
    }
}

export default new RelacionamentoService();