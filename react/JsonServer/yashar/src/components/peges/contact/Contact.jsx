import { useState } from 'react';
import  {Foter}  from '../../../components/foter/Foter';
import { Navbar } from "../../navbar/Navbar"
import { Textarea } from '../textarea /Textarea';
import styled from "./contact.module.css"

export const Contact=()=>{

    const[nowArticle, setNowArticle]=useState({
        title:"",
        date: "",
        emaile: "",
        subject: "",
        message: ""
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
  console.log(nowArticle);
    return(
      <>
          <Navbar  title="Nase"/>
         <div className={styled.contactWrapper}>
                <div className="countainer">
                <h3>Making an article</h3>
                <div className={styled.inputWrapper}>
                <label>Title</label>
                <input name='text' type="text" onChange={handleChange} placeholder="Your Name"/>
               </div>

               <div className={styled.inputWrapper}>
                <label>Date</label>
                <input name='date' type="text" onChange={handleChange} placeholder="Your Date"/>
                </div>
                <div className={styled.inputWrapper}>
                <label>Email</label>
                <input name='email' type="text" onChange={handleChange} placeholder="Your Email"/>
                </div>
                <div className={styled.inputWrapper}>
                <label>Subject</label>
                <input name='subject' type="text" onChange={handleChange} placeholder="Your Subject"/>
                </div>
                <Textarea  label="text" handleChange={handleArticleChange}/>

                <div className={styled.buttonWraper}>
                  <button>submite</button>
                </div>
            </div>
            <Foter />
         </div>
        </>
        
    )
}