import NaviBar from "../componentes/navegacao/NaviBar"
import Style from './Estilo.module.css'
import { AiOutlinePlusCircle } from "react-icons/ai"
import MenuInterno from "../componentes/navegacao/MenuInterno"
import BlocoLarg240 from "../componentes/blocos/BlocoLarg240"
import Api from "../servicos/Api"
import { useEffect, useState } from "react"

function Corretoras() {
    const [corretora, setCorretora] = useState([])
    useEffect(() => {
        const acessar = async () => {
            await Api.get("/corretoras/listar")//não colocar a ultima barra
                .then(response => {
                    setCorretora(response.data.dados)
                }).catch(error => console.log(error))
        }
        acessar()
    }, [])
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
                {
                    corretora ? corretora.map(dados => (
                        <BlocoLarg240 key={dados.id} Id={dados.id} Titulo={dados.corretora} Informacao={dados.razao_social} Tabela="corretoras" />
                    )) : "Sem dados na tabela"
                }
            </div>
        </>
    )
}
export default Corretoras