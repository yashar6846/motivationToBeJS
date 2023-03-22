import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { Navbar } from "../../navbar/Navbar"
import styled from './articlepages.module.css'
import axios from "axios"
import { Foter } from "../../foter/Foter"


export const ArticlePage=()=>{
   const param = useParams()
   const[article,setArticle]=useState({})
   useEffect(()=>{
    axios.get(`http://localhost:2000/articles/${param.id}`)
    .then(res=> {setArticle(res.data)
        console.log(res);
    })
    .catch(err=>{console.log(err)})
   },[])
   return (
    <>
    <Navbar  title='yashar'/>
      <div className={styled.articlewrapper}>
        <div className="countainer">
            <>
              <h1>{article.title}</h1>
              <div className={styled.articleInfo}>
                <span>{article.date}</span>
                <span>{article.other}</span>
                <span>{article.readingTime}</span>
              </div>
              <img src={article.imageurl} />
              <p>{article.content}</p>
            </>
          
        </div>
        <Foter />
      </div>
    
    </>
  );
};