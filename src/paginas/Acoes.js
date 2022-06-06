import Style from './Estilo.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import MenuInterno from '../componentes/navegacao/MenuInterno'
import NaviBar from '../componentes/navegacao/NaviBar'
import { useEffect, useState } from 'react'
import Api from '../servicos/Api'
import BlocoLarg240 from '../componentes/blocos/BlocoLarg240'

function Acoes() {
    const [acoes, setAcoes] = useState([])
    useEffect(() => {
        const acessar = async () => {
            await Api.get("/acoes/listar")//não colocar a ultima barra
                .then(response => {
                    setAcoes(response.data.dados)
                })
                .catch(error => console.log(error))
        }
        acessar()
    }, [])
    return (
        <>
            <NaviBar />
            <div className={Style.ConteinerMenu}>
                <div className={Style.Titulo}>
                    Ações
                </div>
                <div>
                    <MenuInterno link="/cadastroacoes" img={<AiOutlinePlusCircle />} texto="Cadastrar" />
                </div>
            </div>
            <div className={Style.Conteiner}>
                {
                    acoes ? acoes.map(dados => (
                        <BlocoLarg240 key={dados.id} Id={dados.id} Titulo={dados.codigo} Informacao={dados.empresa + "\n- Setor Atuante: " + dados.setor} Tabela="acoes" />
                    )) : "Sem dados na tabela"
                }
            </div>
        </>
    )
}
export default Acoes