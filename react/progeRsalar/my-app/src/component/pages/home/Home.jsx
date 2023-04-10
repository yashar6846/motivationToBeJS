import React, { useState, useEffect } from "react";

import Article from "../../article/Article";
import Navbar from "../../Navbar/Navbar";
import styled from "./home.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [isLoding, setIsLoding] = useState(false);
  const [search, setSearch] = useState("")

  useEffect(() => {
    setIsLoding(true);
    axios
      .get("http://localhost:2001/articles")
      .then((result) => {
        setArticles(result.data);
        setIsLoding(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoding(false);
      });
  }, []);

  const typingSearch=(e)=>{
    setSearch(e.target.value);
  }
  return (
    <>
    <div className={styled.homeWrapper}>
      <Navbar title="yashar" />
      <div className="countainer">
        <h2>new articles</h2>
        <input onChange={typingSearch} type="text" placeholder="search..."/>
        <br />
        <br />
        {isLoding ? (
          <p> Wite a moment...</p>
        ) : (
          <div className={styled.articles}>
            {articles.filter(item=>item.title.toLowerCase().includes(search.toLowerCase())).map((item) => (
              <Link to={`/article/${item.id}`}>
                <Article key={item.id} item={item} />
               </Link>
            ))}
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Home;
