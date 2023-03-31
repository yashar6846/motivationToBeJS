import {Link } from 'react-router-dom'
export const Navbar =()=>{
    return(
      <div>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/form">Contact</Link></li>
        </ul>
      </div>  
    )
}