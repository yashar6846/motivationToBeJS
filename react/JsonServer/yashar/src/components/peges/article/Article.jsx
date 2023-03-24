import styled from './article.module.css'
export const Article=({article})=>{
    return(
     <div className={styled.articleWraper}>
        <img src={article.imageurl} style={{width: "100%" }}/>
        <h3>{article.title}</h3>
        <p>{article.autor}</p>
        <p>readingTime:{article.readingTime}</p>
     </div>
    )
}