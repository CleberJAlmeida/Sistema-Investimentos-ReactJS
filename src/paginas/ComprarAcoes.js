import Style from './Estilo.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import MenuInterno from '../componentes/navegacao/MenuInterno'
import NaviBar from '../componentes/navegacao/NaviBar'
import InputText from '../componentes/inputs/InputText'
import { useState } from 'react'
import Button from '../componentes/inputs/Button'

function ComprarAcoes() {
    const [quantidade, setQuantidade] = useState("")
    const [valor_unitario, setValor_unitario] = useState("")
    const [total_compra, setTotal_compra] = useState("")
    const [data, setData] = useState("")
    return (
        <>
            <NaviBar />
            <div className={Style.ConteinerMenu}>
                <div className={Style.Titulo}>
                    Comprar Ações
                </div>
                <div>
                    <Button tipo="submit" Texto="Salvar" />
                </div>
            </div>
            <div className={Style.Conteiner}>
                <form>
                    <select>
                        <option>Clear Corretora</option>
                        <option>Banco Inter</option>
                    </select>
                    <select>
                        <option>VIIA3</option>
                        <option>CIEL3</option>
                    </select>
                    <InputText
                        Tipo="Text"
                        Texto="Quantidade Comprada"
                        Name="quantidade"
                        Requerido="Required"
                        Valor={quantidade}
                        Evento={(e) => setQuantidade(e.target.value)}
                    />
                    <InputText
                        Tipo="Text"
                        Texto="Valor Unitário"
                        Name="valor_unitario"
                        Requerido="Required"
                        Valor={valor_unitario}
                        Evento={(e) => setValor_unitario(e.target.value)}
                    />
                    <InputText
                        Tipo="Text"
                        Texto="Total da Compra"
                        Name="total_compra"
                        Requerido="Required"
                        Valor={total_compra}
                        Evento={(e) => setTotal_compra(e.target.value)}
                    />
                    <InputText
                        Tipo="Text"
                        Texto="Data da Compra"
                        Name="data"
                        Requerido="Required"
                        Valor={data}
                        Evento={(e) => setData(e.target.value)}
                    />
                </form>
            </div>
        </>
    )
}
export default ComprarAcoes