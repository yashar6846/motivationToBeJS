import { Article } from "../../article/Article"
import { Navbar } from "../../navbar/Navbar"
import styles from './home.module.css'
export const Home=()=>{
    return(
        <div className={styles.homeWraper}>
            <Navbar title="WebYashar"/>
            <div className="countainer">
            <h2>NewCounter</h2>
            <div className={styles.articles}>
                <Article/>
            </div>
            </div>
        </div>
    )
}