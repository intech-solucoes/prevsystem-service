import { BaseService, TipoRequisicao, TipoResposta } from "@intechprev/service";

class PlanoService extends BaseService {

    constructor() {
        super("plano");
    }

    Buscar = () =>
        this.CriarRequisicao(TipoRequisicao.GET);
    
    BuscarTodos = () =>
        this.CriarRequisicao(TipoRequisicao.GET, null, "todos");

    BuscarPorCodigo = (plano: string) =>
        this.CriarRequisicao(TipoRequisicao.GET, null, `porCodigo/${plano}`);

    RelatorioExtratoPorPlanoEmpresaReferencia(plano: string, empresa: string, dataInicio: string, dataFim: string, enviarPorEmail = false) {
        if(enviarPorEmail)
            return this.CriarRequisicao(TipoRequisicao.GET, null, `relatorioExtratoPorPlanoEmpresaReferencia/${plano}/${empresa}/${this.FormatarData(dataInicio)}/${this.FormatarData(dataFim)}/${enviarPorEmail}`);
        else
            return this.CriarRequisicao(TipoRequisicao.GET, null, `relatorioExtratoPorPlanoEmpresaReferencia/${plano}/${empresa}/${this.FormatarData(dataInicio)}/${this.FormatarData(dataFim)}/${enviarPorEmail}`, TipoResposta.Blob);
    }

    RelatorioExtratoPorPlanoReferencia(plano: string, dataInicio: string, dataFim: string) {
        return this.CriarRequisicao(TipoRequisicao.GET, null, `relatorioExtratoPorPlanoReferencia/${plano}/${this.FormatarData(dataInicio)}/${this.FormatarData(dataFim)}`);
    }

    RelatorioCertificado(plano: string, empresa: string, enviarPorEmail = false) {
        if(enviarPorEmail)
            return this.CriarRequisicao(TipoRequisicao.GET, null, `certificado/${plano}/${empresa}/${enviarPorEmail}`);
        else
            return this.CriarRequisicao(TipoRequisicao.GET, null, `certificado/${plano}/${empresa}/${enviarPorEmail}`, TipoResposta.Blob);
    }

    BuscarPorEmpresa(empresa: string) {
        return this.CriarRequisicao(TipoRequisicao.GET, null, `porEmpresa/${empresa}`);
    }

    RelatorioCertificadoSeguro(enviarPorEmail = false) {
        if(enviarPorEmail)
            return this.CriarRequisicao(TipoRequisicao.GET, null, `certificadoSeguro/${enviarPorEmail}`);
        else
            return this.CriarRequisicao(TipoRequisicao.GET, null, `certificadoSeguro/${enviarPorEmail}`, TipoResposta.Zip);
    }

    PossuiCertificadoSeguro() {
        return this.CriarRequisicao(TipoRequisicao.GET, null, `possuiCertificadoSeguro`);
    }

}

export default new PlanoService();