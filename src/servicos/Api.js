import axios from "axios";
import { Usatoken } from "../servicos/Contextos";

const Api = axios.create({
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
    baseURL: "http://sisinvestimentos.atwebpages.com",
});

Api.interceptors.request.use((config) => {
    if (Usatoken) {
        const dados = JSON.parse(localStorage.getItem('token'));
        const token = dados.token;
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}
    , (error) => {
        return Promise.reject(error);
    });

export default Api;