import React, { useState } from "react";
import Inpute from "../../inpute/Inpute";
import Navbar from "../../Navbar/Navbar";
import Textarea from "../../textarea/Textarea";
import styled from "./createArticle.module.css";
import axios from "axios";

const CreateArticle = () => {
  const [articleTitle, setArticleTitle] = useState({
    title: "",
    date: "",
    redingTim: "",
    athor: "",
    message: "",
    imageUrl: "",
  });

  const handelChenge = (e) => {
    setArticleTitle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handelChengeArticleMessage = (e) => {
    setArticleTitle((prevState) => ({
      ...prevState,
      message: e.target.value,
    }));
  };

  const handlecreateNewArticle = () => {
    axios.post("http://localhost:2001/articles", {
      id: 5,
      title: articleTitle.title,
      readingTime: articleTitle.redingTim,
      date: articleTitle.date,
      other: articleTitle.athor,
      content: articleTitle.message,
      imageUrl: articleTitle.imageUrl,
    });
  };

  return (
    <>
      <Navbar title="yashar" />
      <div className={styled.createArticlePage}>
        <div className="contaner">
          <h1>Aboute</h1>
          <Inpute lable="Title" name="title" onChange={handelChenge} />
          <Inpute lable="Date" name="date" onChange={handelChenge} />
          <Inpute
            lable="Time to read"
            name="redingTim"
            onChange={handelChenge}
          />
          <Inpute lable="athor" name="athor" onChange={handelChenge} />

          <Inpute lable="photo" name="imageUrl" onChange={handelChenge} />

          <Textarea lable="text" hanleChange={handelChengeArticleMessage} />

          <div className={styled.buttonwrapper}>
            <button onClick={handlecreateNewArticle}>index</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateArticle;
