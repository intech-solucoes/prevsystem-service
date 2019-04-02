import BaseService from "@intechprev/service";

class PlanoService extends BaseService {
    BuscarTodos() {
        return this.CriarRequisicao("GET", "/plano/todos");
    }

    Buscar() {
        return this.CriarRequisicao("GET", `/plano`);
    }

    BuscarPorCodigo(plano) {
        return this.CriarRequisicao("GET", `/plano/porCodigo/${plano}`)
    }

    RelatorioExtratoPorPlanoEmpresaReferencia(plano, empresa, dataInicio, dataFim, enviarPorEmail = false) {
        if(enviarPorEmail)
            return this.CriarRequisicao("GET", `/plano/relatorioExtratoPorPlanoEmpresaReferencia/${plano}/${empresa}/${this.FormatarData(dataInicio)}/${this.FormatarData(dataFim)}/${enviarPorEmail}`);
        else
            return this.CriarRequisicaoBlob("GET", `/plano/relatorioExtratoPorPlanoEmpresaReferencia/${plano}/${empresa}/${this.FormatarData(dataInicio)}/${this.FormatarData(dataFim)}/${enviarPorEmail}`);
    }

    RelatorioExtratoPorPlanoReferencia(plano, dataInicio, dataFim) {
        return this.CriarRequisicaoBlob("GET", `/plano/relatorioExtratoPorPlanoReferencia/${plano}/${this.FormatarData(dataInicio)}/${this.FormatarData(dataFim)}`);
    }

    RelatorioCertificado(plano, empresa, enviarPorEmail = false) {
        if(enviarPorEmail)
            return this.CriarRequisicao("GET", `/plano/certificado/${plano}/${empresa}/${enviarPorEmail}`);
        else
            return this.CriarRequisicaoBlob("GET", `/plano/certificado/${plano}/${empresa}/${enviarPorEmail}`);
    }

    BuscarPorEmpresa(empresa) {
        return this.CriarRequisicao("GET", `/plano/porEmpresa/${empresa}`);
    }

    RelatorioCertificadoSeguro(enviarPorEmail = false) {
        if(enviarPorEmail)
            return this.CriarRequisicao("GET", `/plano/certificadoSeguro/${enviarPorEmail}`);
        else
            return this.CriarRequisicaoZip("GET", `/plano/certificadoSeguro/${enviarPorEmail}`);
    }

    PossuiCertificadoSeguro() {
        return this.CriarRequisicao("GET", `/plano/possuiCertificadoSeguro`);
    }

}

export default new PlanoService();