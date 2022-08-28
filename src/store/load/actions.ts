import Cadastro from "../../models/cadastro"
import * as actionTypes from "./type.d"

export function Load(value: Cadastro[]) {
    return {
        type: actionTypes.LOAD,
        payload: value
    } 
}

export function Remove(value: any) {
    return {
        type: actionTypes.REMOVE,
        payload: value
    } 
}