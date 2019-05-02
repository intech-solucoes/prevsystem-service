import { BaseService, TipoRequisicao, TipoResposta } from "@intechprev/service";

class DocumentoService extends BaseService {

    constructor() {
        super("documento");
    }

    BuscarPorOidDocumento = (oidDocumento: number) => this.CriarRequisicao(TipoRequisicao.GET, null, `buscarPorOidDocumento/${oidDocumento}`);

    BuscarPorPasta = (oidPasta = null) => this.CriarRequisicao(TipoRequisicao.GET, null, `porPasta/${oidPasta}`);

    Criar = (OID_ARQUIVO_UPLOAD: number, TXT_TITULO: string, IND_ATIVO: string, NUM_ORDEM: number, OID_DOCUMENTO_PASTA = null) =>
        this.CriarRequisicao(TipoRequisicao.POST, null, "", {
            OID_ARQUIVO_UPLOAD,
            TXT_TITULO,
            IND_ATIVO,
            NUM_ORDEM,
            OID_DOCUMENTO_PASTA
        });

    Deletar = (OID_DOCUMENTO: number) => this.CriarRequisicao(TipoRequisicao.POST, null, `${OID_DOCUMENTO}`);

    CriarPasta = (NOM_PASTA: string, OID_DOCUMENTO_PASTA_PAI = null) =>
        this.CriarRequisicao(TipoRequisicao.POST, null, "criarPasta", { NOM_PASTA, OID_DOCUMENTO_PASTA_PAI });

    DeletarPasta = (OID_DOCUMENTO_PASTA: number) =>
        this.CriarRequisicao(TipoRequisicao.POST, null, `deletarPasta/${OID_DOCUMENTO_PASTA}`);

    Download = (OID_DOCUMENTO: number) =>
        this.CriarRequisicao(TipoRequisicao.GET, null, `download/${OID_DOCUMENTO}`, TipoResposta.Blob);

    EnviarDocumento = (OID_DOCUMENTO : number) =>
        this.CriarRequisicao(TipoRequisicao.GET, null, `enviarDocumento/${OID_DOCUMENTO}`);
}

export default new DocumentoService();