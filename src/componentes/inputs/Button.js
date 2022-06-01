import Style from './Button.module.css'
function Button(props) {
    return (
        <>
            <button type={props.Tipo} onClick={props.Evento} className={Style.Geral}>{props.Texto}</button>
        </>
    )
}
export default Button