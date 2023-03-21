import { Navbar } from "../../navbar/Navbar"
import styled from "./contact.module.css"
export const Contact=()=>{
    return(
        <div className={styled.contactWrapper}>
            <Navbar  title="Nase"/>
            <h1>Contact</h1>
        </div>
    )
}