import { BaseService, TipoRequisicao } from "@intechprev/service";

class LGPDService extends BaseService {

    constructor() {
        super("LGPD");
    }

    Buscar = () =>
        this.CriarRequisicao(TipoRequisicao.GET);

    Inserir = (origem: number) =>
        this.CriarRequisicao(TipoRequisicao.POST, null, `${origem}`);
}

export default new LGPDService();