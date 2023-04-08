import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import styled from "./articlePahe.module.css";
import axios from "axios";
import Foter from "./../../foter/Foter";

const ArticlePage = () => {
  const prams = useParams();
  const [article, setArticle] = useState({});
  const [isLoding, setIsLoding] = useState(false);
   
 const naviget= useNavigate()
  const handelDelete=()=>{
  axios(`http://localhost:2001/articles/${prams.id}`,{
    method: 'DELETE',
  }).then(()=>{
    naviget('/')
  });
  }
  useEffect(() => {
    setIsLoding(true);
    axios
      (`http://localhost:2001/articles/${prams.id}`)
      .then((resulte) => {
        setArticle(resulte.data);
        setIsLoding(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoding(false);
      });
  }, []);
  return (
    <>
      <Navbar title="yashar" />
      <div className={styled.articlewrapper}>
        <div className="container">
          {isLoding ? (
            <p>wait a moment...</p>
          ) : (
            <>
              <h1>{article.title}</h1>
              <div className={styled.articleInfo}>
                <span>{article.date}</span>
                <span>{article.other}</span>
                <span>{article.readingTime}</span>
              </div>
              <img src={article.imageUrl} />
              <p>{article.content}</p>
              <button onClick={handelDelete}>delete</button>
            </>
          )}
        </div>
      </div>
      <Foter />
    </>
  );
};

export default ArticlePage;
