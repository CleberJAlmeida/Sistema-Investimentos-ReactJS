import { useState } from 'react'
import Elementos from './Elementos'
import Style from './NaviBar.module.css'
import { FaWallet } from 'react-icons/fa'
import { AiOutlineAreaChart, AiOutlineExclamationCircle, AiOutlineLogout, AiOutlineUser, AiOutlineMenu } from 'react-icons/ai'

function NaviBar() {
    const [local, setLocal] = useState(Style.Esconder)
    return (
        <div className={Style.Geral, local}>
            <div className={Style.Titulo}><div>Sis. Acom. Investimento</div><div className={Style.BtMenu} onClick={DeslocarMenu}>{<AiOutlineMenu />}</div></div>
            <Elementos link="/" texto="Carteira" imagem={<FaWallet />} />
            <Elementos link="/corretoras" texto="Corretoras" imagem={<AiOutlineAreaChart />} />
            <Elementos link="/sobre" texto="Sobre" imagem={<AiOutlineExclamationCircle />} />
            <Elementos link="/usuario" texto="Usuário" imagem={<AiOutlineUser />} />
            <Elementos link="/sair" texto="Sair" imagem={<AiOutlineLogout />} />
        </div>
    )
    function DeslocarMenu() {
        local == Style.Esconder ?
            setLocal(Style.Mostrar)
            :
            setLocal(Style.Esconder)
    }
}

export default NaviBar