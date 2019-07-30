import { BaseService, TipoRequisicao, TipoResposta } from "@intechprev/service";

class InfoRendService extends BaseService {

    constructor() {
        super("infoRend");
    }

    BuscarReferencias = () =>
        this.CriarRequisicao(TipoRequisicao.GET, null, `referencias`);
    
    BuscarPorReferencia = (referencia: string) =>
        this.CriarRequisicao(TipoRequisicao.GET, null, `porReferencia/${referencia}`);

    Relatorio = (referencia: string, enviarPorEmail = false) => {
        if(enviarPorEmail)
            return this.CriarRequisicao(TipoRequisicao.GET, null, `relatorio/${referencia}/${enviarPorEmail}`, null);
        else
            return this.CriarRequisicao(TipoRequisicao.GET, null, `relatorio/${referencia}/${enviarPorEmail}`, null, TipoResposta.Blob);
    }
            
}

export default new InfoRendService();