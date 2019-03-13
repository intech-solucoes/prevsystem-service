import { BaseService } from "@intechprev/service";
declare class FundacaoService extends BaseService {
    constructor();
    BuscarPorCdFundacao: (cdFundacao: string) => Promise<any>;
}
declare const _default: FundacaoService;
export default _default;
