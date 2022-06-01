import NaviBar from "../componentes/navegacao/NaviBar"
import Style from './Estilo.module.css'
import MenuInterno from "../componentes/navegacao/MenuInterno"
import { AiOutlineCheckCircle } from 'react-icons/ai'
import InputText from "../componentes/inputs/InputText"
import { useState } from "react"
import Api from "../servicos/Api"
import { Navigate } from "react-router-dom"
import Button from "../componentes/inputs/Button"

function CadastroCorretoras() {
    const [nomeCorretora, setNomeCorretora] = useState(null);
    const [razaoSocial, setRazaoSocial] = useState(null);
    const Cadastrar = (ev) => {
        ev.preventDefault();
        const json = JSON.stringify({
            corretora: nomeCorretora,
            razao_social: razaoSocial
        });
        console.log(json)
        Api.post("/corretoras/inserir/", json)
            .then(Response => {
                console.log(Response)
                Navigate("/corretoras")
            })
            .catch(error => {
                console.log("Erro: " + error)
            }
            )
    }
    return (
        <>
            <NaviBar />
            <form onSubmit={Cadastrar}>
                <div className={Style.ConteinerMenu}>
                    <div className={Style.Titulo}>
                        Cadastro de Corretoras
                    </div>

                    <div>
                        <Button tipo="submit" Texto="Salvar"/>
                       
                    </div>
                </div>
                <div className={Style.Conteiner}>
                    <InputText
                        Tipo="Text"
                        Texto="Nome da Corretora"
                        Name="corretora"
                        Requerido="Required"
                        Valor={nomeCorretora}
                        Mudar={(e) => setNomeCorretora(e.target.value)}
                    />
                    <InputText
                        Tipo="Text"
                        Texto="Razão Social da Corretora"
                        Name="razaosocial"
                        Requerido="Required"
                        Valor={razaoSocial}
                        Mudar={(e) => setRazaoSocial(e.target.value)}
                    />
                </div>
            </form>
        </>
    )
}
export default CadastroCorretoras