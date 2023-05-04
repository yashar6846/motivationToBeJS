// import React, {  useState } from 'react'

// export const Usehttp = (requestConfig, applyData) => {

//   const sendRequest = async()=>{
//     const response = await fetch(
//         requestConfig.url,{
//             method: requestConfig.method ? requestConfig.method : 'GET',
//             headers: requestConfig.headers ? requestConfig.headers : {},
//             body: requestConfig.body? JSON.stringify(requestConfig.body): null
//         }
//     ) 
//     const data = await response.json()
//     applyData(data)
//   }
//   return{
//     sendRequest: sendRequest
//   } 
// }
