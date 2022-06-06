import Style from './Estilo.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import MenuInterno from '../componentes/navegacao/MenuInterno'
import NaviBar from '../componentes/navegacao/NaviBar'

function Notas() {
    return (
        <>
            <NaviBar />
            <div className={Style.ConteinerMenu}>
                <div className={Style.Titulo}>
                    Área de trabalho - Notas
                </div>
                <div>
                    <MenuInterno link="/compraracoes" img={<AiOutlinePlusCircle />} texto="Comprar" />
                </div>
                <div>
                    <MenuInterno link="/venderacoes" img={<AiOutlinePlusCircle />} texto="Vender" />
                </div>
            </div>
            <div className={Style.Conteiner}>

            </div>
        </>
    )
}
export default Notas