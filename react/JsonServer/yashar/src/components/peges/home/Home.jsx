import React,{useState, useEffect} from "react"
import { Article } from "../article/Article"
import { Navbar } from "../../navbar/Navbar"
import  {Foter}  from '../../../components/foter/Foter';
import axios from "axios"
import styles from './home.module.css'

export const Home=()=>{
    const [articles,setArticles]=useState([])

    useEffect(()=>{
        axios
        .get(`http://localhost:2000/articles`)
        .then((res)=>{
            setArticles(res.data.data)
        })
        .catch(error=>{console.log(error);})
    },[])
  
    return(
        <div className={styles.homeWraper}>
            <Navbar title="WebQashqai"/>
            <div className="countainer">
            <h2>NewCounter</h2>
            <div className={styles.articles}>
            {articles.map(article=>{
                    return(
                        <Article key={article.id} article={article}/>
                    )
                })}
            </div>
            </div>
            <Foter />
        </div>
     
    )
}