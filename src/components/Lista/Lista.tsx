import { useEffect, useState } from "react";
import api from "../../resources/api";
import { useDispatch } from 'react-redux';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid}  from '@mui/material';
import UserCard from '../UserCard/UserCard';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { addEditar } from '../../store/edit/actions';

interface listaProps {
  onEdit: () => void
}

export default function Lista(props: listaProps): JSX.Element {

  const [list, setList] = useState([])
  const [open, setOpen] = useState<boolean>(false)
  const [selectedId, setSelectedId] = useState()
  const dispatch = useDispatch()
  const { onEdit } = props

  useEffect(()=>{
    api.get("/users").then((res:any) => setList(res.data))
  },[])   

  
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
    api.delete(`/users/${id}`).then((res) => setList(list.filter((item:any) => item.id !== id)));
    setOpen(false);
  };

  

  return(
    <div style={{overflow: "auto",flex: 1, maxHeight:'600px'}}>
      <Grid container spacing={1} style={{minWidth:200}}>

        {list?.map((item:any,index)=>(
        
          <div style={{display: "flex"}}>
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

/**
 * <Item key={index}>
          <Grid item xs={2}>
            {item.email}
          </Grid>
          <Grid item xs={1}>
            {item.username}
          </Grid>
          <Grid item xs={1}>
            {item.password}
          </Grid>
          <Grid item xs={2}>
            {`${item.firstname} ${item.lastname}`}
          </Grid>
          <Grid item xs={2}>
            {`${item.address.city}, ${item.address.zipcode}`}
          </Grid>
          <Grid item xs={2}>
            {`${item.address.street}, ${item.address.number}`}
          </Grid>
          <Grid item xs={2}>
            {item.phone}
          </Grid>
          <Grid item xs={1}>
            <IconButton aria-label="delete" onClick={()=>{handleDialog(true); setSelectedId(item.id)}}>
              <DeleteIcon/>
            </IconButton>
            <Dialog
              open={open}
              onClose={()=>handleDialog(false)}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
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
          </Grid>
          <Grid item xs={1}>
            <IconButton data-testid="editBtn" aria-label="edit" onClick={()=>{handleEdit(item.id)}}>
              <EditIcon />
            </IconButton>
          </Grid>
        </Item>
 */