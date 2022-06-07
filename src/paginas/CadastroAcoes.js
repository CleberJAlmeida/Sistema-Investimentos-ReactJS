import NaviBar from "../componentes/navegacao/NaviBar"
import Style from './Estilo.module.css'
import InputText from "../componentes/inputs/InputText"
import { useState, useContext, useEffect } from "react"
import Api from "../servicos/Api"
import Button from "../componentes/inputs/Button"
import { Contextos } from "../servicos/Contextos"
import { useNavigate } from "react-router-dom"


function CadastroAcoes() {
    const { user, variavelAuxiliar, setVariavelAuxiliar } = useContext(Contextos)
    const navigate = useNavigate()
    const [codigoAcao, setCodigoAcao] = useState("");
    const [empresa, setEmpresa] = useState("");
    const [setor, setSetor] = useState("");
    const [id, setId] = useState(null);
    const tabela = "acoes"

    useEffect(() => {
        const acessar = async (id) => {
            await Api.get("/" + tabela + "/listar/" + id)//não colocar a ultima barra
                .then(response => {
                    const dados = response.data.dados[0]
                    setCodigoAcao(dados.codigo)
                    setEmpresa(dados.empresa)
                    setSetor(dados.setor)
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
            codigo: codigoAcao,
            empresa: empresa,
            setor: setor,
            id_usuario: String(user.id)
        });
        //se existir um id setado, faz um update 
        if (id) {
            const url = "/" + tabela + "/editar/" + id
            await Api.put(url, json)
                .then((response) => {
                    setVariavelAuxiliar(null)
                    navigate("/acoes")
                })
                .catch(erro => {
                    console.log(erro)
                })

        }
        else {//e se não estiver um id faz um insert
            await Api.post("/" + tabela + "/inserir", json)
                .then((response) => {
                    navigate("/acoes")
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
                        Cadastro de Ações
                    </div>

                    <div>
                        <Button tipo="submit" Texto="Salvar" />
                    </div>
                </div>
                <div className={Style.Conteiner}>
                    <InputText
                        Tipo="Text"
                        Texto="Código da Ação"
                        Name="codigo"
                        Requerido="Required"
                        Valor={codigoAcao}
                        Evento={(e) => setCodigoAcao(e.target.value)}
                    />
                    <InputText
                        Tipo="Text"
                        Texto="Nome da Empresa"
                        Name="empresa"
                        Requerido="Required"
                        Valor={empresa}
                        Evento={(e) => setEmpresa(e.target.value)}
                    />
                    <InputText
                        Tipo="Text"
                        Texto="Setor que atua"
                        Name="setor"
                        Requerido="Required"
                        Valor={setor}
                        Evento={(e) => setSetor(e.target.value)}
                    />
                </div>
            </form>
        </>
    )
}
export default CadastroAcoes