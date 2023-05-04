import React, { useEffect, useState } from 'react'

export const Available = () => {
  const [countres, setCountres]=useState([])
    useEffect(()=>{
        const fatchMeals =  async() =>{
        const res = await fetch(`http://localhost:2000/shop`)
        const resData = await res.json()
        
        const loadedMeals = []

        for(const key in resData){
          loadedMeals.push({
            id:key,
            name:resData[key].name,
            description:resData[key].description,
            price:resData[key].price
          })
        }
        setCountres(loadedMeals)
        }
       fatchMeals()
    },[])
  console.log(countres);
  const mealsList =
    countres.map((item)=> (
      <div key={item.id}>
      <h5>{item.name}</h5>
      <p>{item.description}</p>
      <p>{item.price}</p>
    </div>
    ))
  
  return (
    <div>
    {mealsList}
    </div>
    
  )
}
