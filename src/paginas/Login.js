import Style from './Login.module.css'
import InputText from '../componentes/inputs/InputText'
import Button from '../componentes/inputs/Button'
import { useContext, useState } from 'react'
import { Contextos } from '../servicos/Contextos'

function Login() {
    const { Login, Logout } = useContext(Contextos);
    const [txtLogin, setTxtLogin] = useState("cleber");
    const [txtSenha, setTxtSenha] = useState("1234");
    function Logar(ev) {
        ev.preventDefault()
        Logout()
        Login(txtLogin, txtSenha)
    }
    return (
        <div className={Style.Geral}>
            <div className={Style.Conteiner}>
                <h3 className={Style.h3s}>Sistema de Acompanhamento de Investimentos</h3>
                <h1 className={Style.h1s}>Área de Login</h1>
                <form onSubmit={Logar}>
                    <InputText
                        Tipo="Text"
                        Texto="Digite seu Login"
                        Name="Login"
                        Requerido="Required"
                        Valor={txtLogin}
                        Evento={(e) => { setTxtLogin(e.target.value) }}
                    />
                    <InputText
                        Tipo="Password"
                        Texto="Digite sua senha"
                        Name="senha"
                        Requerido="Required"
                        Valor={txtSenha}
                        Evento={(e) => { setTxtSenha(e.target.value) }}
                    />
                    <Button Texto="Entrar" Tipo="submit" Evento={null} />
                </form>
            </div>
        </div>
    )
}
export default Login