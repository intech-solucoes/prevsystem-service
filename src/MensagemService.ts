import { BaseService, TipoRequisicao } from "@intechprev/service";

class MensagemService extends BaseService {

    constructor() {
        super("mensagem");
    }

    BuscarTodas = () =>
        this.CriarRequisicao(TipoRequisicao.GET);

    BuscarPorFundacaoEmpresaPlano = (fundacao: string, empresa: string, plano: string) =>
        this.CriarRequisicao(TipoRequisicao.GET, null, `porFundacaoEmpresaPlano/${fundacao}/${empresa}/${plano}`);

    BuscarPorPlano = (plano: string) =>
        this.CriarRequisicao(TipoRequisicao.GET, null, `porPlano/${plano}`);

    EnviarMensagem = (data: any) =>
        this.CriarRequisicao(TipoRequisicao.POST, null, null, data);

}

export default new MensagemService();