import styled from './article.module.css'
export const Article=()=>{
    return(
     <div className={styled.articleWraper}>
        <img src="https://m.media-amazon.com/images/I/71YW8+KhOwL._AC_UY436_FMwebp_QL65_.jpg" style={{width: "100%" }}/>
        <h3>Variables in JavaScript</h3>
        <p>History of reading 5</p>
     </div>
    )
}