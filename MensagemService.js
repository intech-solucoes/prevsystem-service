import BaseService from './BaseService';

class MensagemService extends BaseService {
    BuscarMensagem() {
        return this.CriarRequisicao("GET", "/mensagem", null);
    }

    EnviarMensagem(data) {
        return this.CriarRequisicao("POST", "/mensagem/enviar", data);
    }

}

export default MensagemService;
