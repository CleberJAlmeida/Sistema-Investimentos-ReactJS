import { useState } from 'react'
import Elementos from './Elementos'
import Style from './NaviBar.module.css'
import { FaWallet } from 'react-icons/fa'
import { AiOutlineAreaChart, AiOutlineExclamationCircle, AiOutlineLogout, AiOutlineUser, AiOutlineMenu, AiOutlineFileText } from 'react-icons/ai'

function NaviBar() {
    const [local, setLocal] = useState(Style.GeralEsconder)
    return (
        <div className={local}>
            <div>
                <div className={Style.Titulo}><div>Sis. Acom. Investimento</div><div className={Style.BtMenu} onClick={DeslocarMenu}>{<AiOutlineMenu />}</div></div>
                <Elementos link="/carteira" texto="Carteira" imagem={<FaWallet />} />
                <Elementos link="/corretoras" texto="Corretoras" imagem={<AiOutlineAreaChart />} />
                <Elementos link="/notas" texto="Notas de Corretagem" imagem={<AiOutlineFileText />} />
                <Elementos link="/sobre" texto="Sobre" imagem={<AiOutlineExclamationCircle />} />
            </div>
            <div>
                <Elementos link="/usuario" texto="Usuário" imagem={<AiOutlineUser />} />
                <Elementos link="" texto="Sair" imagem={<AiOutlineLogout />} onClick={Sair} />
            </div>
        </div>
    )
    function Sair() {

    }
    function DeslocarMenu() {
        local === Style.GeralEsconder ?
            setLocal(Style.GeralMostrar)
            :
            setLocal(Style.GeralEsconder)
    }
}

export default NaviBar