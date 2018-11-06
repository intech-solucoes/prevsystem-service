import { BaseService } from "@intechprev/react-lib";

class UsuarioService extends BaseService {
    VerificarLogin() {
        return this.CriarRequisicao("GET", "/usuario");
    }

    Login(cpf, senha) {
        return this.CriarRequisicao("POST", "/usuario/login", { Cpf: cpf, Senha: senha });
    }

    LoginSemSenha(cpf) {
        return this.CriarRequisicao("POST", "/usuario/login", { Cpf: cpf });
    }

    PrimeiroAcesso(cpf, dataNascimento) {
        return this.CriarRequisicao("POST", "/usuario/criarAcesso", { Cpf: cpf, DataNascimento: dataNascimento });
    }

    TrocarSenha(senhaAntiga, senhaNova) {
        return this.CriarRequisicao("POST", "/usuario/alterarSenha", { senhaAntiga: senhaAntiga, senhaNova: senhaNova });
    }

}

export default new UsuarioService();