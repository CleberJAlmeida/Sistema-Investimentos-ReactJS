import MenuInterno from "../componentes/navegacao/MenuInterno"
import NaviBar from "../componentes/navegacao/NaviBar"
import Style from './Estilo.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'
function Carteira() {
    return (
        <>
            <NaviBar />
            <div className={Style.ConteinerMenu}>
                <div className={Style.Titulo}>
                    Área de trabalho - Carteira
                </div>
                <div>
                    <MenuInterno link="/cadastro" img={<AiOutlinePlusCircle />} texto="Cadastrar" />
                </div>
            </div>
            <div className={Style.Conteiner}>

            </div>
        </>
    )
}
export default Carteira