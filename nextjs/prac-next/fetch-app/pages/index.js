import Link from "next/link"

function Home(){
    return(
       <>
        <h1>Home page</h1>
        <Link href='/users'>
      
            users page
        
        </Link>
       </>
    )
}
export default  Home