import React,{useState, useEffect} from "react"
import { Article } from "../article/Article"
import { Navbar } from "../../navbar/Navbar"
import  {Foter}  from '../../../components/foter/Foter';
import axios from "axios"
import styles from './home.module.css'
import { Link } from "react-router-dom";

export const Home=()=>{
    const [articles,setArticles]=useState([])

    useEffect(()=>{
        axios
        .get(`http://localhost:2000/articles`)
        .then((res)=>{
            setArticles(res.data)
        })
        .catch(error=>{console.log(error)})
    },[])
  
    return(
        <div className={styles.homeWraper}>
            <Navbar title="WebQashqai"/>
            <div className="countainer">
            <h2>NewCounter</h2>
            <div className={styles.articles}>
            {articles.map((article)=>(
               <Link to={`/article/${article.id}`}>
                <Article key={article.id} article={article}/>
               </Link>
                ))}
            </div>
            </div>
            <Foter />
            
        </div>
     
    )
}




  

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// import styled from "./articlePahes.module.css";
// import axios from "axios";

// import { Navbar } from "../../navbar/Navbar";

// const ArticlePage = () => {
//   const prams = useParams();
//   const [article, setArticle] = useState({});
//   const [isLoding, setIsLoding] = useState(false);
//   useEffect(() => {
//     setIsLoding(true);
//     axios
//       .get(`http://localhost:2000/articles/${prams.id}`)
//       .then((resulte) => {
//         setArticle(resulte.data);
//         setIsLoding(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setIsLoding(false);
//       });
//   }, []);


// export default ArticlePage;
