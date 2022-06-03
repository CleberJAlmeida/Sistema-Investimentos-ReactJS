import { useContext } from "react"
import Button from "../componentes/inputs/Button"
import NaviBar from "../componentes/navegacao/NaviBar"
import { Contextos } from "../servicos/Contextos"
import Style from './Estilo.module.css'

function Sair() {
    const { Logout } = useContext(Contextos)
    function FazerLogout() {
        Logout()
    }
    return (
        <>
            <NaviBar />
            <div className={Style.Conteiner}>
                Área de trabalho - Sair
                <Button Tipo="button" Texto="Sair" Evento={FazerLogout} />
            </div>
        </>
    )
}
export default Sair