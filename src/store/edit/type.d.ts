import { FormProps  } from '../../components/CadastroForm/CadastroForm'
import Cadastro from '../../models/cadastro'


type EditarState = {
  editar?: FormProps
}

type EditarAction = {
  type: string
  value?: Cadastro
}

export const ADD_OBJETO = "ADD_OBJETO"
export const REMOVE_OBJETO = "REMOVE_ARTICLE"

type DispatchType = (args: EditarAction) => EditarAction
  