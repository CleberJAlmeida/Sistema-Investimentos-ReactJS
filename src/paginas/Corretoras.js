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
        Api.get("/corretoras/listar/")
            .then(response => {
                setCorretora(response.data.dados)
            }).catch(error => console.log(error))
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
                {corretora.map(dados => (
                    <BlocoLarg240 key={dados.id} Id={dados.id} Titulo={dados.corretora} Informacao={dados.razao_social} />
                )
                )}
            </div>
        </>
    )
}
export default Corretoras