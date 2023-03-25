import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css"

export const Navbar=({title})=>{
   
    return(
        <div className={styles.navbarWraper}>
        <div className="countainer">
            <nav className={styles.navbar}>
                <h3>{title}</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
        </div>
    )
}