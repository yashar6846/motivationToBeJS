import styles from './fetchData.module.css'
import { useEffect, useState } from "react"
import axios from "axios"
import MealItem from './MealItem'
import Card from '../UI/Card'

export const FetchData=()=>{
  const[counte,setCounte]= useState([])
    useEffect(()=>{
        axios
        .get(`http://localhost:2000/fastFood`)
        .then((res) => {
         setCounte(res.data);
     }).catch((err)=>{console.log(err)});   
    },[])
   
    return(
        <>
        <h2>counter</h2>
         {
            counte.map(item=> <div className={styles.meals}>
           <Card >
           <MealItem 
           id={item.id}
            key={item.id}
             name={item.name}
             description={item.description}
             price={item.price}
            />
           </Card>
            </div>)
         }
        </>
    )
}