import axios from "axios";

export default class BaseService {
    constructor(config) {
        this.config = config;
    }

    CriarRequisicao(tipo, url, data = null) {
        return axios({
            method: tipo,
            url: this.config.apiUrl + url,
            data: data,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
    }

    CriarRequisicaoBlob(tipo, url, data = null) {
        return axios({
            method: tipo,
            url: this.config.apiUrl + url,
            data: data,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
            responseType: 'blob'
        })
    }
}
