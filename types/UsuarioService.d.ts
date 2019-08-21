import { BaseService } from "@intechprev/service";
declare class UsuarioService extends BaseService {
    constructor();
    VerificarAdmin(): Promise<import("axios").AxiosResponse<any>>;
    VerificarLogin(): Promise<any>;
    Login(cpf: string, senha: string): Promise<any>;
    LoginSemSenha(cpf: string): Promise<any>;
    PrimeiroAcesso(cpf: string, dataNascimento: string): Promise<any>;
    TrocarSenha(senhaAntiga: string, senhaNova: string): Promise<any>;
    TrocarSenhaPrimeiroAcesso(senhaNova: string): Promise<any>;
    SelecionarParticipante(cpf: string): Promise<any>;
    SelecionarMatricula(matricula: string): Promise<any>;
    BuscarMatriculas(): Promise<any>;
}
declare const _default: UsuarioService;
export default _default;
