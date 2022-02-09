import NaviBar from "../componentes/navegacao/NaviBar"
import Style from './Estilo.module.css'
function Carteira() {
    return (
        <>
            <NaviBar />
            <div className={Style.Conteiner}>
                Área de trabalho - Carteira
            </div>
        </>
    )
}
export default Carteira