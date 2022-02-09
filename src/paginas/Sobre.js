import NaviBar from "../componentes/navegacao/NaviBar"
import Style from './Estilo.module.css'
function Sobre() {
    return (
        <>
            <NaviBar />
            <div className={Style.Conteiner}>
                Área de trabalho - Sobre
            </div>
        </>
    )
}
export default Sobre