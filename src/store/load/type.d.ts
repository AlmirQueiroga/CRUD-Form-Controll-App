import { FormProps  } from '../../components/CadastroForm/CadastroForm'
import Cadastro from '../../models/cadastro'

type State = {
  lista?: Cadastro[]
}

type LoadAction = {
  type: string,
  payload: any
}

export const LOAD = "LOAD"
export const REMOVE = "REMOVE"

type DispatchType = (args: LoadAction) => LoadAction
  