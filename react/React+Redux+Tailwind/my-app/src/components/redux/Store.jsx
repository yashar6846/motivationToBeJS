import {combineReducers,createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { drawerReducer } from './Reducers'
import { productsReducer, productsDetilReducer } from './Productes'

let initialState ={

}
const reducers = combineReducers({
    drawer: drawerReducer,
    products: productsReducer,
    product: productsDetilReducer
})

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)))

export default store