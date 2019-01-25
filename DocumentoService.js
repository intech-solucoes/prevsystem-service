import BaseService from "@intechprev/service";

class DocumentoService extends BaseService {
    BuscarPorPasta(oidPasta = null) {
        return this.CriarRequisicao("GET", `/documento/porPasta/${oidPasta}`);
    }

    Criar(OID_ARQUIVO_UPLOAD, TXT_TITULO, IND_ATIVO, NUM_ORDEM, OID_DOCUMENTO_PASTA = null) {
        return this.CriarRequisicao("POST", "/documento", {
            OID_ARQUIVO_UPLOAD,
            TXT_TITULO,
            IND_ATIVO,
            NUM_ORDEM,
            OID_DOCUMENTO_PASTA
        });
    }

    Deletar(OID_DOCUMENTO) {
        return this.CriarRequisicao("DELETE", `/documento/${OID_DOCUMENTO}`);
    }

    CriarPasta(NOM_PASTA, OID_DOCUMENTO_PASTA_PAI = null) {
        return this.CriarRequisicao("POST", "/documento/criarPasta", { NOM_PASTA, OID_DOCUMENTO_PASTA_PAI });
    }

    DeletarPasta(OID_DOCUMENTO_PASTA) {
        return this.CriarRequisicao("DELETE", `/documento/deletarPasta/${OID_DOCUMENTO_PASTA}`);
    }

    BuscarArquivoUpload(OID_DOCUMENTO) {
        return this.CriarRequisicao("GET", `/documento/buscarArquivoUpload/${OID_DOCUMENTO}`);
    }
}

export default new DocumentoService();