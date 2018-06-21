import BaseService from "./BaseService";

export default class UsuarioService extends BaseService {
    VerificarLogin() {
        return this.CriarRequisicao("GET", "/usuario");
    }

    Login(cpf, senha) {
        return this.CriarRequisicao("POST", "/usuario/login", { Cpf: cpf, Senha: senha });
    }

    PrimeiroAcesso(data) {
        return this.CriarRequisicao("POST", "/usuario/criarAcesso", { Cpf: data.cpf, DataNascimento: data.dataNascimento });
    }

}