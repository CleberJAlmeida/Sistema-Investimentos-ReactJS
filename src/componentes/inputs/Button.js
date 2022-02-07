import Style from './Button.module.css'
function Button(props) {
    return (
        <>
            <button className={Style.Geral}>{props.Texto}</button>
        </>
    )
}
export default Button