import { useQuery } from '@apollo/client';
import axios from 'axios';
import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {GET_ALLToys} from './ToyQuery'

 export const YazyListese =() =>{
  // const ToyQuery =()=>{
    const[yazyListese, setYazyListesi]= useState([])
    const {data} = useQuery(GET_ALLToys, {
      fetchPolicy: "no-cache"
    })
    useEffect(()=>{
      if(data?.allData){
        setYazyListesi(data.allData)
      }
    },[data])
 

  // useEffect(()=>{
  //   axios.get(`https://jsonplaceholder.typicode.com/posts/?_limit=5`)
  //   .then((res )=> {setYazyListesi(res.data)})
  // },[])

  return (
     <div className='mainWrapper'>
      {/* <div className="ui raised very padded text container segment"> */}
      <div className="ui relaxed divided list">
                {
            yazyListese.map((item)=>(
              <div className="item" key={item.id}>
              <i className="large github middle aligned icon"></i>
              <div className="content">
                <div>{item.readingTime}</div>
                <p>{item.title}</p>
                <img src={item.imageurl}/>
                {/* <Link to={`/posts/${yazy.id}`} className="header">{yazy.readingTime}</Link> */}
                {/* <div className="description">{yazy.title}</div> */}
              </div>
            </div>
            ))
          }
    </div>
      </div>
    //  </div>
    )
}
// }
// export default YazyListese
      
