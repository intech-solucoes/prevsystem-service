import { BaseService } from "@intechprev/react-lib";

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

    RelatorioExtratoPorPlanoReferencia(plano, dataInicio, dataFim, enviarPorEmail = false) {
        if(enviarPorEmail)
            return this.CriarRequisicao("GET", `/plano/relatorioExtratoPorPlanoReferencia/${plano}/${this.FormatarData(dataInicio)}/${this.FormatarData(dataFim)}/${enviarPorEmail}`);
        else
            return this.CriarRequisicaoBlob("GET", `/plano/relatorioExtratoPorPlanoReferencia/${plano}/${this.FormatarData(dataInicio)}/${this.FormatarData(dataFim)}/${enviarPorEmail}`);
    }

    RelatorioCertificado(plano, enviarPorEmail = false) {
        if(enviarPorEmail)
            return this.CriarRequisicao("GET", `/plano/certificado/${plano}/${enviarPorEmail}`);
        else
            return this.CriarRequisicaoBlob("GET", `/plano/certificado/${plano}/${enviarPorEmail}`);
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