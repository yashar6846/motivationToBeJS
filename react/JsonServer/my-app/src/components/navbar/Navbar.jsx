import React from "react";
import styles from "./navbar.module.css"

export const Navbar=()=>{
    let title="WebQashqai"
    return(
        <div className={styles.navbarWraper}>
        <div className="countainer">
            <nav className={styles.navbar}>
                <h3>{title}</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </div>
        </div>
    )
}