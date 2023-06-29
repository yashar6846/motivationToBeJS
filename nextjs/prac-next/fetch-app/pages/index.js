import Link from "next/link"

function Home(){
    return(
       <>
        <h1>Home page</h1>
       <div>
       <Link href='/users'>
            users page
        </Link>
       </div>
        <Link href='/posts'>
            Post page
        </Link>
       </>
    )
}
export default  Home