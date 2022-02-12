import NaviBar from "../componentes/navegacao/NaviBar"
import Style from './Estilo.module.css'
import { AiOutlinePlusCircle } from "react-icons/ai"
import MenuInterno from "../componentes/navegacao/MenuInterno"
import BlocoLarg240 from "../componentes/blocos/BlocoLarg240"

function Corretoras() {
    return (
        <>
            <NaviBar />
            <div className={Style.ConteinerMenu}>
                <div className={Style.Titulo}>
                    Corretoras
                </div>
                <div>
                    <MenuInterno link="/cadastrocorretoras" img={<AiOutlinePlusCircle />} texto="Cadastrar" />
                </div>
            </div>
            <div className={Style.Conteiner}>
            <BlocoLarg240 Titulo="Nome Corretora" Informacao="Razão Social" />
            </div>
        </>
    )
}
export default Corretoras