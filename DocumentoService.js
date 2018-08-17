import { BaseService } from "@intechprev/react-lib";

export default class DocumentoService extends BaseService {
    BuscarPorPasta(oidPasta = null) {
        return this.CriarRequisicao("GET", `/documento/porPasta/${oidPasta}`);
    }

    Criar(OID_ARQUIVO_UPLOAD, TXT_TITULO, IND_ATIVO, NUM_ORDEM, OID_PASTA = null) {
        var data = {
            OID_ARQUIVO_UPLOAD,
            TXT_TITULO,
            IND_ATIVO,
            NUM_ORDEM,
            OID_PASTA
        };

        return this.CriarRequisicao("POST", "/documento", data);
    }

    CriarPasta(NOM_PASTA, OID_DOCUMENTO_PASTA_PAI = null) {
        return this.CriarRequisicao("POST", "/documento/criarPasta", { NOM_PASTA, OID_DOCUMENTO_PASTA_PAI });
    }
}