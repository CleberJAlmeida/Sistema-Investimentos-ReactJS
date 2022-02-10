import Style from './MenuInterno.module.css'
import { Link } from 'react-router-dom'
function MenuInterno(props) {
    return (
        <Link to={props.link} className={Style.Link}>
            <div className={Style.Geral}>
                <div className={Style.Img}>{props.img}</div>
                <div className={Style.Texto}>{props.texto}</div>
            </div>
        </Link>
    )
}
export default MenuInterno