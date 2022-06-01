import React, { createContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import Api from "./Api";


export const Contextos = createContext();

//pega apenas o token no localstorage
export const Usatoken = () => {
    return localStorage.getItem("token") !== null
};

export const AutoContexto = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [carregando, setCarregando] = useState(true);
    useEffect(() => {
        const recuperaDadosUser = localStorage.getItem('user');
        if (recuperaDadosUser) {
            setUser(JSON.parse(recuperaDadosUser));
        }
        setCarregando(false);
    }, [])

    const Login = async (login, senha) => {
        //transfoma os dados pra json
        const json = JSON.stringify({
            login: login,
            senha: senha
        });
        await Api.post('login/', json)
            .then(function (response) {
                const dadosUser = {
                    id: response.data.dados.id,
                    login: response.data.dados.login,
                    nome: response.data.dados.nome,
                }
                const dadosToken = {
                    token: response.data.token
                }
                localStorage.setItem("user", JSON.stringify(dadosUser));
                localStorage.setItem("token", JSON.stringify(dadosToken));
                setUser({
                    id: response.data.dados.id,
                    login: response.data.dados.login,
                    nome: response.data.dados.nome,
                })
                navigate("/carteira")
            })
            .catch(function (error) {
                console.log("Erro: " + error);
            });
    };

    const Logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/");
    };
    return (
        < Contextos.Provider value={
            { autenticar: !!user, user, carregando, Login, Logout }
        }>
            {children}
        </Contextos.Provider>)
}