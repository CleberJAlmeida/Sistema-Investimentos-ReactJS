import Elementos from './Elementos'
import Style from './NaviBar.module.css'
import ImgCarteira from '../img/wallet24.png'
function NaviBar() {
    return (
        <div className={Style.Geral}>
            <Elementos link="/" texto="Login" caminho={ImgCarteira} />
            <Elementos link="/corretoras" texto="Corretoras" caminho={ImgCarteira} />
            <Elementos link="/sobre" texto="Sobre" caminho={ImgCarteira} />
            <Elementos link="/usuario" texto="Usuário" caminho={ImgCarteira} />
            <Elementos link="/sair" texto="Sair" caminho={ImgCarteira} />
        </div>
    )
}
export default NaviBar