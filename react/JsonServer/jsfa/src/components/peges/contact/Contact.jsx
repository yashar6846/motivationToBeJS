import axios from 'axios';
import { useState } from 'react';
import  {Foter}  from '../../../components/foter/Foter';
import { Navbar } from "../../navbar/Navbar"
import { Textarea } from '../textarea /Textarea';
import styled from "./contact.module.css"

export const Contact=()=>{

    const[nowArticle, setNowArticle]=useState({
      id: 7,
      title: "",
      date:  "",
      other: "",
      readingTime: "",
      message: "",
      imageurl:""
    })

    const handleChange=(e)=>{
       setNowArticle((prevState)=>({
         ...prevState,
        [e.target.name] : e.target.value
       }))
    }

    const handleArticleChange=(e)=>{
      setNowArticle((prevState)=>({
        ...prevState,
       message: e.target.value
      }))
    }
  const handleCreateNewArticle=(e)=>{
   axios.post(`http://localhost:2000/articles`,{
    id: 8,
    title: nowArticle.title,
    readingTime: nowArticle.readingTime,
    date:  nowArticle.date,
    other: nowArticle.other,
    content: nowArticle.message,
    imageurl: nowArticle.imageurl
   })
  }
    return(
      <>
          <Navbar  title="Nase"/>
         <div className={styled.contactWrapper}>
                <div className="countainer">
                <h3>Making an article</h3>
                <div className={styled.inputWrapper}>

                <label>Title</label>
                <input name='title' type="text" onChange={handleChange} placeholder="Your Name"/>
               </div>

               <div className={styled.inputWrapper}>
                <label>Date</label>
                <input name='date' type="text" onChange={handleChange} placeholder="Your Date"/>
                </div>

                <div className={styled.inputWrapper}>
                <label>ReadingTime</label>
                <input name='readingTime' type="text" onChange={handleChange} placeholder="Your Email"/>
                </div>

                <div className={styled.inputWrapper}>
                <label>Author</label>
                <input name='other' type="text" onChange={handleChange} placeholder="Your Email"/>
                </div>


                <div className={styled.inputWrapper}>
                <label>Submit phuto</label>
                <input name='imageurl' type="text" onChange={handleChange} placeholder="Your image"/>
                </div>

                <Textarea  label="text"  handleChange={handleArticleChange}/>

                <div className={styled.buttonWraper}>
                  <button onClick={handleCreateNewArticle}>submite</button>
                </div>
            </div>
            <br/>
            <Foter />
         </div>
        </>
        
    )
}