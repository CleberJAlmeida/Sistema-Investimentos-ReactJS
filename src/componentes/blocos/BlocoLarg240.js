import Style from './BlocoLarg240.module.css'
function BlocoLarg240(props) {
    return (
        <div className={Style.Geral}>
            <div className={Style.Titulo}>
                {props.Titulo}
            </div>
            <div className={Style.Informacao}>
                {props.Informacao}
            </div>
        </div>
    )
}
export default BlocoLarg240