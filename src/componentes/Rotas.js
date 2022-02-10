import { Routes, Route } from 'react-router-dom'
import Carteira from '../paginas/Carteira'
import Corretoras from '../paginas/Corretoras'
import Login from '../paginas/Login'
import Sobre from '../paginas/Sobre'
import Notas from '../paginas/Notas'
import CadastroNotas from '../paginas/CadastroNotas'

function Rotas() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/carteira' element={<Carteira />} />
            <Route path='/corretoras' element={<Corretoras />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/notas' element={<Notas />} />
        </Routes>
    )
}
export default Rotas