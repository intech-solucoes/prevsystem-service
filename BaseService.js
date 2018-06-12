import axios from "axios";

var path = require('path');
global.appRoot = path.resolve(__dirname);

var config = require(appRoot + "/config");

export default class BaseService {
    CriarRequisicao(tipo, url, data) {
        return axios({
            method: tipo,
            url: config.apiUrl + url,
            data: data,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
    }
}
