import { Link } from "react-router-dom"
import Style from './Elementos.module.css'
function Elementos(props) {
    return (
        <div className={Style.Geral}>
            <Link to={props.link} className={Style.Link}>
                <div className={Style.Area}>
                    <div className={Style.Texto}>{props.texto}</div>
                    <div className={Style.Imagem}>{props.imagem}</div>
                </div>
            </Link>
        </div>
    )
}
export default Elementos