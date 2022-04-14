import NaviBar from "../componentes/navegacao/NaviBar"
import Style from './Estilo.module.css'
function Sair() {
    return (
        <>
            <NaviBar />
            <div className={Style.Conteiner}>
                Área de trabalho - Sair
            </div>
        </>
    )
}
export default Sair