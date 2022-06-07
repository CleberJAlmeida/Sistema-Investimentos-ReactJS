import NaviBar from "../componentes/navegacao/NaviBar"
import Style from './Estilo.module.css'
import InputText from "../componentes/inputs/InputText"
import { useState, useContext, useEffect } from "react"
import Api from "../servicos/Api"
import Button from "../componentes/inputs/Button"
import { Contextos } from "../servicos/Contextos"
import { useNavigate } from "react-router-dom"


function CadastroCorretoras() {
    const { user, variavelAuxiliar, setVariavelAuxiliar } = useContext(Contextos)
    const navigate = useNavigate()
    const [nomeCorretora, setNomeCorretora] = useState("");
    const [razaoSocial, setRazaoSocial] = useState("");
    const [id, setId] = useState(null);
    const tabela = "corretoras"

    useEffect(() => {
        const acessar = async (id) => {
            await Api.get("/" + tabela + "/listar/" + id)//não colocar a ultima barra
                .then(response => {
                    const dados = response.data.dados[0]
                    setNomeCorretora(dados.corretora)
                    setRazaoSocial(dados.razao_social)
                    setId(id)
                }).catch(error => console.log(error))
        }

        if (variavelAuxiliar) {
            acessar(variavelAuxiliar.id)
        }
    }, [])

    const Cadastrar = async (ev) => {
        ev.preventDefault();
        const json = JSON.stringify({
            corretora: nomeCorretora,
            razao_social: razaoSocial,
            id_usuario: String(user.id)
        });
        //se existir um id setado, faz um update 
        if (id) {
            const url = "/" + tabela + "/editar/" + id
            await Api.put(url, json)
                .then((response) => {
                    setVariavelAuxiliar(null)
                    navigate("/corretoras")
                })
                .catch(erro => {
                    console.log(erro)
                })

        }
        else {//e se não estiver um id faz um insert
            await Api.post("/" + tabela + "/inserir", json)
                .then((response) => {
                    navigate("/corretoras")
                }).catch(erro => {
                    console.log(erro)
                })
        }
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
                        <Button tipo="submit" Texto="Salvar" />

                    </div>
                </div>
                <div className={Style.Conteiner}>
                    <InputText
                        Tipo="Text"
                        Texto="Nome da Corretora"
                        Name="corretora"
                        Requerido="Required"
                        Valor={nomeCorretora}
                        Evento={(e) => setNomeCorretora(e.target.value)}
                    />
                    <InputText
                        Tipo="Text"
                        Texto="Razão Social da Corretora"
                        Name="razaosocial"
                        Requerido="Required"
                        Valor={razaoSocial}
                        Evento={(e) => setRazaoSocial(e.target.value)}
                    />
                </div>
            </form>
        </>
    )
}
export default CadastroCorretoras