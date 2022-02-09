import NaviBar from "../componentes/navegacao/NaviBar"
import Style from './Estilo.module.css'
function Corretoras() {
    return (
        <>
            <NaviBar />
            <div className={Style.Conteiner}>
                Área de trabalho - Corretoras
            </div>
        </>
    )
}
export default Corretoras