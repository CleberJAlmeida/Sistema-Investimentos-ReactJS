import axios from "axios";

const Api = axios.create({
    //baseURL: "https://clsistema.000webhostapp.com/",
   // baseURL: "http://localhost/ApiRest/"
    baseURL: "http://sisinvestimentos.atwebpages.com/",
});

Api.interceptors.request.use((config) => {
    const ver_existe_token = localStorage.getItem("token") !== null
    if (ver_existe_token) {
        const dados = JSON.parse(localStorage.getItem('token'));
        const token = dados.token;
        const url_passagem = config.url
        config.url = url_passagem + "/" + token
        //config.headers.Authorization = ` ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject("Erro:" + error);
});

export default Api;