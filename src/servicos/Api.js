import axios from "axios";

const Api = axios.create({
    baseURL: "https://clsistema.000webhostapp.com/",
    // baseURL: "http://sisinvestimentos.atwebpages.com",
});

export default Api;