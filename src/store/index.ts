import { createStore, Store, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import EditReducer from './edit/reducer'
import { DispatchType, EditarAction, EditarState } from './edit/type.d'

export const store: Store<EditarState, EditarAction> & {
    dispatch: DispatchType,
} = createStore(EditReducer, applyMiddleware(thunk))