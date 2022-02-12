import NaviBar from "../componentes/navegacao/NaviBar"
import Style from './Estilo.module.css'
import MenuInterno from "../componentes/navegacao/MenuInterno"
import { AiOutlineCheckCircle } from 'react-icons/ai'
import InputText from "../componentes/inputs/InputText"

function CadastroCorretoras() {
    return (
        <>
            <NaviBar />
            <div className={Style.ConteinerMenu}>
                <div className={Style.Titulo}>
                    Cadastro de Corretoras
                </div>
                <div>
                    <MenuInterno link="" img={<AiOutlineCheckCircle />} texto="Salvar" />
                </div>
            </div>
            <div className={Style.Conteiner}>
                <InputText Tipo="Text" Texto="Nome da Corretora" Name="corretora" Requerido="Required" />
                <InputText Tipo="Text" Texto="Razão Social da Corretora" Name="razaosocial" Requerido="Required" />
            </div>
        </>
    )
}
export default CadastroCorretoras