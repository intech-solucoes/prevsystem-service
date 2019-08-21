import { BaseService, TipoRequisicao } from "@intechprev/service";

class UsuarioService extends BaseService {

    constructor() {
        super("usuario");
    }

    VerificarAdmin() {
        return super.VerificarAdmin();
    }
    
    VerificarLogin() {
        return this.CriarRequisicao(TipoRequisicao.GET);
    }

    Login(cpf: string, senha: string) {
        return this.CriarRequisicao(TipoRequisicao.POST, null, "login", { Cpf: cpf, Senha: senha });
    }

    LoginSemSenha(cpf: string) {
        return this.CriarRequisicao(TipoRequisicao.POST, null, "login", { Cpf: cpf });
    }

    PrimeiroAcesso(cpf: string, dataNascimento: string) {
        return this.CriarRequisicao(TipoRequisicao.POST, null, "criarAcesso", { Cpf: cpf, DataNascimento: dataNascimento });
    }

    TrocarSenha(senhaAntiga: string, senhaNova: string) {
        return this.CriarRequisicao(TipoRequisicao.POST, null, "alterarSenha", { senhaAntiga: senhaAntiga, senhaNova: senhaNova });
    }

    TrocarSenhaPrimeiroAcesso(senhaNova: string) {
        return this.CriarRequisicao(TipoRequisicao.POST, null, "alterarSenhaPrimeiroAcesso", { senhaNova: senhaNova });
    }

    SelecionarParticipante(cpf: string) {
        return this.CriarRequisicao(TipoRequisicao.POST, null, "selecionar", { Cpf: cpf });
    }

    SelecionarMatricula(matricula: string) { 
        return this.CriarRequisicao(TipoRequisicao.POST, null, `selecionarMatricula/${matricula}`);
    }

    BuscarMatriculas() { 
        return this.CriarRequisicao(TipoRequisicao.GET, null, `matriculas`);
    }

}

export default new UsuarioService();