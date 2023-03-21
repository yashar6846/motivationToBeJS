import { Foter } from "../../foter/Foter"
import { Navbar } from "../../navbar/Navbar"
import styled from "./aboutUs.module.css"
export const AbouteUs=()=>{
    return(
        <div className={styled.aboutUsWraper}>
        <Navbar  title="yashar"/>
        <div className="countainer">
           <h2>about us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fug</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIYXtxLpZf-WNw6PYGx6JgXb0GqGweOFOuYOlftBVcj7HInCU0z6Lkvr2wWshD2vnVTvM&usqp=CAU" style={{width: "100%" }}/>
           </div>
           <Foter />
        </div>
       
    )
}