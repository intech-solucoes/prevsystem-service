import { BaseService, TipoRequisicao } from "@intechprev/service";

class NoticiasService extends BaseService {

    constructor() {
        super("noticias");
    }

    BuscarTodas = () =>
        this.CriarRequisicao(TipoRequisicao.GET);

    BuscarPorId = (id: number) =>
        this.CriarRequisicao(TipoRequisicao.GET, null, `${id}`);

}

export default new NoticiasService();