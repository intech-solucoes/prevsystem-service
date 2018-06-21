import BaseService from "./BaseService";

class UsuarioService extends BaseService {
    VerificarLogin() {
        return this.CriarRequisicao("GET", "/usuario", null);
    }

    Login(cpf, senha) {
        return this.CriarRequisicao("POST", "/usuario/login", { Cpf: cpf, Senha: senha });
    }

    PrimeiroAcesso(data) {
        return this.CriarRequisicao("POST", "/usuario/criarAcesso", { Cpf: data.cpf, DataNascimento: data.dataNascimento });
    }

}

export default new UsuarioService();