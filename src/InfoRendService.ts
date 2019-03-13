import { BaseService, TipoRequisicao, TipoResposta } from "@intechprev/service";

class InfoRendService extends BaseService {

    constructor() {
        super("infoRend");
    }

    BuscarReferencias = () =>
        this.CriarRequisicao(TipoRequisicao.GET, null, `referencias`);
    
    BuscarPorReferencia = (referencia: string) =>
        this.CriarRequisicao(TipoRequisicao.GET, null, `porReferencia/${referencia}`);

    Relatorio = (referencia: string) =>
        this.CriarRequisicao(TipoRequisicao.GET, null, `relatorio/${referencia}`, TipoResposta.Blob);
}

export default new InfoRendService();