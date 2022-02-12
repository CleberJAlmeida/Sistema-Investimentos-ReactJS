import Style from './InputText.module.css'
function InputText(props) {
    return (
        <div className={Style.GeralImput}>
            <label htmlFor={props.name}>{props.Texto}:
                <br />
                <input
                    type={props.Tipo}
                    placeholder={props.Texto}
                    name={props.Name}
                    id={props.Name}
                    required={props.Requerido}
                />
            </label>
        </div>
    )
}
export default InputText