import * as actionTypes from "./type.d"
import Cadastro from "../../models/cadastro"

export function addEditar(value: Cadastro) {
 return {
    type: actionTypes.ADD_OBJETO,
    value: value,
  } 
}

export function removeEditar() {
  return {
    type: actionTypes.REMOVE_OBJETO,
  }  
}

