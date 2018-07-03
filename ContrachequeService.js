import BaseService from './BaseService';

export default class ContrachequeService extends BaseService {
    BuscarDatas(cdPlano) {
        return this.CriarRequisicao("GET", `/fichaFinanceiraAssistido/datasPorPlano/${cdPlano}`);
    }
    
    BuscarPorPlanoReferenciaTipoFolha(cdPlano, referencia) {
        var tipoFolha = "1";
        var dataReferencia = referencia.replace(new RegExp('/', 'g'), '.');
        return this.CriarRequisicao("GET", `/fichaFinanceiraAssistido/porPlanoReferenciaTipoFolha/${cdPlano}/${dataReferencia}/${tipoFolha}`);
    }

    Relatorio(cdPlano, referencia) {
        var tipoFolha = "1";
        var dataReferencia = referencia.replace(new RegExp('/', 'g'), '.');
        return this.CriarRequisicaoBlob("GET", `/fichaFinanceiraAssistido/relatorio/${cdPlano}/${dataReferencia}/${tipoFolha}`);
    }
}
