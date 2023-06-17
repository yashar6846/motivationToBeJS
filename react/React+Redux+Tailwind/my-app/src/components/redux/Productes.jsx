
export const productsReducer = (state = { products:[]},action)=>{
    switch(action.type){
        case"GET_PRODUCTS":
        return{
            products: action.payload
        }
        default: return state
    }
}

export const productsDetilReducer = (state = { product:{}},action)=>{
    switch(action.type){
        case"GET_DETAILS":
        return{
            ...state,
            product: action.payload
        }
        default: return state
    }
}

export const cardReducer = (state = {cardItems: []},action)=>{
    switch(action.type){
        case"ADD_CARD":
        const item = action.payload
        const existItems=state.cardItems.find(x=>x.id === item.id)
        if(existItems){
            return{
                ...state,
                cardItems: state.cardItems.map(x=>x.id===existItems.id?item: x)
            }
        }else{
            return{
                ...state,
                cardItems:[...state.cardItems,item]
            }
        }
        case "REMOVE_CARD": return{
            cardItems: state.cardItems.filter(x=>x.id !==action.payload)
        }
        default: return state
    }
}