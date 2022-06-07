import { Routes, Route, useNavigate } from 'react-router-dom'
import Carteira from '../paginas/Carteira'
import Corretoras from '../paginas/Corretoras'
import Login from '../paginas/Login'
import Sobre from '../paginas/Sobre'
import Notas from '../paginas/Notas'
import CadastroCorretoras from '../paginas/CadastroCorretoras'
import Perfil from '../paginas/Perfil'
import Sair from '../paginas/Sair'
import { AutoContexto, Contextos } from '../servicos/Contextos'
import Acoes from "../paginas/Acoes"
import CadastroAcoes from '../paginas/CadastroAcoes'
import { useContext } from 'react'
import ComprarAcoes from '../paginas/ComprarAcoes'

function Rotas() {
    const navigate = useNavigate()
    const Private = ({ children }) => {
        const { autenticar } = useContext(Contextos)
        if (!autenticar) {
            navigate("/")
        }
        return (children)
    }
    return (
        <AutoContexto>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/carteira' element={<Private><Carteira /></Private>} />
                <Route path='/corretoras' element={<Private><Corretoras /></Private>} />
                <Route path='/cadastrocorretoras' element={<Private><CadastroCorretoras /></Private>} />
                <Route path='/acoes' element={<Private><Acoes /></Private>} />
                <Route path='/cadastroacoes' element={<Private><CadastroAcoes /></Private>} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/notas' element={<Private><Notas /></Private>} />
                <Route path='/compraracoes' element={<Private><ComprarAcoes /></Private>} />
                <Route path='/venderacoes' element={<Private><ComprarAcoes /></Private>} />
                <Route path='/perfil' element={<Private><Perfil /></Private>} />
                <Route path='/sair' element={<Sair />} />
            </Routes>
        </AutoContexto>
    )
}
export default Rotas