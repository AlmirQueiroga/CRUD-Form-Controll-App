import { createStore, Store, applyMiddleware, combineReducers, CombinedState, Reducer } from 'redux'
import EditReducer from './edit/reducer'
import LoadReducer from './load/reducer'

export const store = createStore(combineReducers({
    editar: EditReducer,
    load: LoadReducer
}))