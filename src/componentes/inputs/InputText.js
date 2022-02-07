import Style from './InputText.module.css'
function InputText(props) {
    return (
        <>
            <input type={props.Tipo} placeholder={props.Texto} name={props.Name} id={props.Name} required={props.Requerido} className={Style.Geral} />
        </>
    )
}
export default InputText