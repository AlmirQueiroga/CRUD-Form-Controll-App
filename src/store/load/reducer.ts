import * as actionTypes from "./type.d"

const initialState: actionTypes.State = {
  lista: []
}

const reducer = (state: actionTypes.State = initialState, action: actionTypes.LoadAction | actionTypes.LoadAction): actionTypes.State => {
  switch (action.type) {
    case actionTypes.LOAD:{
      return { lista: action.payload }
		}
		case actionTypes.REMOVE: {
			const newList = state.lista?.filter((item: any) => item.id !== action.payload)
			return { lista: newList }
		}
  }

  return state

}
  
export default reducer