import styled from "./textarea.module.css";
export const Textarea =(props)=>{
    return(
     <div className={styled.textareaWraper}>
        <label>{props.label}</label>
        <textarea onChange={props.handleChange}></textarea>
     </div>
    )
};