import axios from "axios";

const Api = axios.create({
    baseURL: "http://sisinvestimentos.atwebpages.com",
});

export default Api;