import { useEffect, useState } from 'react';
import axios from 'axios'

function Fetcingapi() {
const [countres, setCountres]=useState([])
  // useEffect(()=>{
  //   fetch("https://restcountries.com/v3.1/all")
  //   .then(res=>res.json())
  //   .then(res=>setCountres(res))
     
  // },[])
  useEffect(()=>{
    axios.get(`https://restcountries.com/v3.1/all`)
    .then(res=> setCountres(res.data))
  },[])
  
    console.log(countres);
  return (
 <>
   <div className='App'>
   <h1> i start proctice </h1>
  {
    countres.map(item=>{
     return(<div key={item.id}> 
     <h2>{item.capital}</h2>

             {/* <li>{item.altSpellings}</li> */}
      <div><img src={item.coatOfArms.png}style={{width:"100px"}}/></div>
      
      </div>)
    })      
  }
    </div> 
 </>
    )
}

export default Fetcingapi;
