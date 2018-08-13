import { BaseService } from "@intechprev/react-lib";

export default class InfoRendService extends BaseService {
    BuscarReferencias() {
        return this.CriarRequisicao("GET", `/infoRend/referencias`);
    }
    
    BuscarPorReferencia(referencia) {
        return this.CriarRequisicao("GET", `/infoRend/porReferencia/${referencia}`)
    }

    Relatorio(referencia) {
        return this.CriarRequisicaoBlob("GET", `/infoRend/relatorio/${referencia}`)
    }
}
