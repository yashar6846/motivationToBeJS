import {combineReducers,createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { drawerReducer } from './Reducers'
import { productsReducer, productsDetilReducer,cardReducer } from './Productes'

const cardItems = JSON.parse(localStorage.getItem('cardItems')) || []
let initialState ={
 card: {cardItems: cardItems}
}
const reducers = combineReducers({
    drawer: drawerReducer,
    products: productsReducer,
    product: productsDetilReducer,
    card: cardReducer
})

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)))

export default store