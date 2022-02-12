import NaviBar from "../componentes/navegacao/NaviBar"
import Style from './Estilo.module.css'
import BlocoLarg240 from "../componentes/blocos/BlocoLarg240"

function Carteira() {
    return (
        <>
            <NaviBar />
            <div className={Style.ConteinerMenu}>
                <div className={Style.Titulo}>
                    Área de trabalho - Carteira
                </div>
                <div>{/* colocar os botões de navegação nesta div */}

                </div>
            </div>
            <div className={Style.Conteiner}>
                <BlocoLarg240 Titulo="Ações" Informacao="Total investido:R$ 0,00" />
                <BlocoLarg240 Titulo="Corretoras" Informacao="Total investido:R$ 0,00" />
                <BlocoLarg240 Titulo="Notas Última Semana" Informacao="Total investido:R$ 0,00" />
                <BlocoLarg240 Titulo="Mês Corrente" Informacao="Total investido:R$ 0,00" />
                <BlocoLarg240 Titulo="Ano Corrente" Informacao="Total investido:R$ 0,00" />
                <BlocoLarg240 Titulo="Total Geral" Informacao="Total investido:R$ 0,00" />
            </div>
        </>
    )
}
export default Carteira