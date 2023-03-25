import axios from 'axios';
import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
 export const YazyListese =() =>{
 const[yazyListese, setYazyListesi]= useState([])
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/`)
    .then((res )=> {setYazyListesi(res.data)})
  },[])
 
  return (
     <div className='mainWrapper'>
      <div className="ui raised very padded text container segment">
      <div className="ui relaxed divided list">
          {
            yazyListese.map((yazy)=>(
              <div className="item" key={yazy.id}>
              <i className="large github middle aligned icon"></i>
              <div className="content">
                <Link to={`/posts/${yazy.id}`} className="header">{yazy.title}</Link>
                <div className="description">{yazy.body}</div>
              </div>
            </div>
            ))
          }
    </div>
      </div>
     </div>
    )
}

// export default YazyListese
      
