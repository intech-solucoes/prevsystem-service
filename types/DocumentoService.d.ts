import { BaseService } from "@intechprev/service";
declare class DocumentoService extends BaseService {
    constructor();
    BuscarPorOidDocumento: (oidDocumento: number) => Promise<any>;
    BuscarPorPasta: (oidPasta?: null) => Promise<any>;
    Criar: (OID_ARQUIVO_UPLOAD: number, TXT_TITULO: string, IND_ATIVO: string, NUM_ORDEM: number, OID_DOCUMENTO_PASTA?: null) => Promise<any>;
    Deletar: (OID_DOCUMENTO: number) => Promise<any>;
    CriarPasta: (NOM_PASTA: string, OID_DOCUMENTO_PASTA_PAI?: null) => Promise<any>;
    DeletarPasta: (OID_DOCUMENTO_PASTA: number) => Promise<any>;
    Download: (OID_DOCUMENTO: number) => Promise<any>;
    EnviarDocumento: (OID_DOCUMENTO: number) => Promise<any>;
}
declare const _default: DocumentoService;
export default _default;
