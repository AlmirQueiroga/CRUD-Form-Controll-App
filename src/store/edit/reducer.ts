import * as actionTypes from "./type.d"

const initialState: actionTypes.EditarState = {
  editar: undefined
}

const reducer = (state: actionTypes.EditarState = initialState, action: actionTypes.EditarAction): actionTypes.EditarState => {
  switch (action.type) {
    case actionTypes.ADD_OBJETO:
      return { editar: action.value }
    case actionTypes.REMOVE_OBJETO:
      return { editar: undefined }
  }

  return state

}
  
export default reducer