import { useEffect, useState } from "react";
import api from "../../resources/api";
import { useDispatch, useSelector } from 'react-redux';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid}  from '@mui/material';
import UserCard from '../UserCard/UserCard';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { addEditar } from '../../store/edit/actions';
import { Remove } from "../../store/load/actions";

interface listaProps {
  onEdit: () => void
}

export default function Lista(props: listaProps): JSX.Element {

  const list = useSelector((state: any) => state.load.lista)
  const [open, setOpen] = useState<boolean>(false)
  const [selectedId, setSelectedId] = useState()
  const dispatch = useDispatch()
  const { onEdit } = props

  const handleEdit = (id: number) => {
    const item = list.find((item: any) => item.id === id)
    if (item) {

      dispatch(addEditar(item)) 
      onEdit()
    }
  }

  const handleDialog = (state: boolean) => {
    setOpen(state);
  };

  const handleDelete = (index:number,id:any) => {
    api.delete(`/users/${id}`).then((res) => Remove(id));
    setOpen(false);
  };

  

  return(
    <div style={{overflow: 'auto',flex: 1, maxHeight:'600px', marginLeft:'120px'}}>
      <Grid container spacing={1} style={{minWidth:200}}>

        {list?.map((item:any,index: number)=>(
        
          <div style={{display: "flex"}} key={index}>
            <UserCard item={item}/>
            <div style={{display: "grid"}}>
              <IconButton aria-label="delete" onClick={()=>{handleDialog(true); setSelectedId(item.id)}}>
                <DeleteIcon/>
              </IconButton>
              <Dialog
                open={open}
                onClose={()=>handleDialog(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                  {"Deseja mesmo deletar o cadastro selecionado?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Ao deletar não será possível restaurar tal cadastro
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={()=>handleDialog(false)}>Cancelar</Button>
                  <Button onClick={()=>handleDelete(index, selectedId)} autoFocus>
                    Deletar
                  </Button>
                </DialogActions>
              </Dialog>
              <IconButton data-testid="editBtn" aria-label="edit" onClick={()=>{handleEdit(item.id)}}>
                <EditIcon />
              </IconButton>
            </div>
          </div>
        ))}
      </Grid>
    </div>
  )
}
