import { data } from "../../components/data"

const INITIAL_STATE={
    bookList: data,
    cart:[]
}
export const reducer = (state= INITIAL_STATE, action) =>{
    switch (action.type) {
        case 'SEPETE_EKLE':
            const product = state.find(item => item.id === action.payload.id);
            if (product) {
                product.quantity +=1
                const products =state.filter(item => item.id !== action.payload.id) 
                return [...products, product]
            }
            action.payload.quantity =1
            return [...state.action.payload]
    // return{...state,cart:[...state.cart, action.payload]}
    
        case 'DELETE_EKLE':
    return{
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload) 
    }
    // case 'INCRES_CART':
    // return{
    //   ...state,
    //    cart: state.cart.map(cartItem => cartItem.book === id ? {...cartItem, count: cartItem.count + 1}: cartItem)
    // }
    default: return state
    }
}
// const removeFromCart = id => setState({...state,
//     cart: state.cart.filter(cartItem => cartItem.id !==id)})


// const increment = id=> 
//     setState({...state,
//        cart: state.cart.map(cartItem => cartItem.id === id ? {...cartItem, count: cartItem.count + 1}: cartItem)
//        })

//        const decrement = id=> 
//         setState({...state,
//            cart: state.cart.map(cartItem => cartItem.id === id ? {...cartItem, count: cartItem.count>1 ? cartItem.count - 1: 1}: cartItem)
//            })