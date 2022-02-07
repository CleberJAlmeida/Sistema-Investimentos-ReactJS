import {Link} from 'react-router-dom'
import Style from './Login.module.css'
import InputText from '../componentes/inputs/InputText'
import Button from '../componentes/inputs/Button'
function Login() {
    return (
        <div className={Style.Geral}>
            <div className={Style.Conteiner}>
                <h3 className={Style.h3s}>Sistema de Acompanhamento de Investimentos</h3>
                <h1 className={Style.h1s}>Área de Login</h1>
                <InputText Tipo="Text" Texto="Digite seu Login" Name="Login" Requerido="Required" />
                <InputText Tipo="Password" Texto="Digite sua senha" Name="senha" Requerido="Required" />
                <Link to='/carteira'><Button Texto="Entrar" /></Link>
            </div>
        </div>
    )
}
export default Login