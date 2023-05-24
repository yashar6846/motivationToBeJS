
export const productsAction = ()=> async (dispatch) => {
   const data=await fetch(' http://localhost:2000/employees')
    .then(res=>res.json())
dispatch({type: 'GET_PRODUCTS',payload: data})
}

export const productsActionDetail = (id)=> async (dispatch) => {
    const data=await fetch(`http://localhost:2000/employees/${id}`)
     .then(res=>res.json())
 dispatch({type: 'GET_DETAILS',payload: data})
 }

 export const productsAddCard = (id,quantity)=> async (dispatch,getState) => {
    const data=await fetch(`http://localhost:2000/employees/${id}`)
     .then(res=>res.json())
 dispatch({type: 'ADD_CARD',payload: {
    id: data.id,
    image: data.image,
    name: data.name,
    title: data.title,
    description: data.description,
    price: data.price,
    qty: quantity
 }})
 const {card: {cardItems}}= getState()
 localStorage.setItem('cardItems',JSON.stringify(cardItems)) 
 }

 export const removeCard =(productId) => (dispatch, getState) => {
    dispatch({type: 'REMOVE_CARD',payload: productId})

    const {card: {cardItems}}= getState()
    localStorage.setItem('cardItems',JSON.stringify(cardItems)) 
 }