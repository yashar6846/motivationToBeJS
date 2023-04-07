import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import styled from "./articlePahe.module.css";
import axios from "axios";
import Foter from "./../../foter/Foter";

const ArticlePage = () => {
  const prams = useParams();
  const [article, setArticle] = useState({});
  const [isLoding, setIsLoding] = useState(false);
  useEffect(() => {
    setIsLoding(true);
    axios
      .get(`http://localhost:2001/articles/${prams.id}`)
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
            </>
          )}
        </div>
      </div>
      <Foter />
    </>
  );
};

export default ArticlePage;
