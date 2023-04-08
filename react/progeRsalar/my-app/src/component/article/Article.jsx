import React from "react";
import styled from "./article.module.css";

const Article = ({ item }) => {
 
  return (
    <div className={styled.articleWrapper}>
      <img src={item.imageUrl} />
      <h3>{item.title}</h3>
      <p>{item.readingTime}</p>
    
    </div>
  );
};

export default Article;
