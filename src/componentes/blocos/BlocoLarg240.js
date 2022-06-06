import Style from './BlocoLarg240.module.css'
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
import { useContext, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Api from '../../servicos/Api';
import { useNavigate } from 'react-router-dom';
import { Contextos } from '../../servicos/Contextos';

function BlocoLarg240(props) {
    const { setVariavelAuxiliar } = useContext(Contextos)
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const ExcluirRegistro = async (tabela) => {
        const url = "/" + tabela + "/deletar/" + props.Id
        await Api.delete(url)
            .then(
                window.location.reload()
            )
            .catch(erro => {
                console.log(erro)
            })

        setOpen(false)
    }

    const carregaEdicao = (tabela) => {
        setVariavelAuxiliar({
            id: props.Id,
        })
        const url = "/cadastro" + tabela
        navigate(url)
    }
    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Excluir Registro?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Deseja realmente excluir esse registro?, sabendo que se excluir,
                        será definitivo sem reversão!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose}>Cancelar</button>
                    <button onClick={() => { ExcluirRegistro(props.Tabela) }}>Excluir</button>
                </DialogActions>
            </Dialog>
            <div className={Style.Geral}>
                <div className={Style.Titulo}>
                    <span className={Style.TituloTexto}>{props.Titulo}</span>
                    <span className={Style.TituloItem}>
                        <span>
                            <button onClick={() => { carregaEdicao(props.Tabela) }} >
                                <AiOutlineEdit />
                                Editar
                            </button>
                        </span>
                        <span>
                            <button onClick={handleClickOpen}>
                                <AiOutlineDelete />
                                excluir
                            </button>
                        </span>
                    </span>
                </div>
                <div className={Style.Informacao}>
                    {props.Informacao}
                </div>
            </div>
        </>
    )
}
export default BlocoLarg240