
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