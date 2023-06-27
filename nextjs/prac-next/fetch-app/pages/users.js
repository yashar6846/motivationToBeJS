import User from "../components/User"

function UserData({ users}){
    return(
        <>
        <h1>user Data page</h1>
        {users.map(user=>{
            return(
                <div key={user.id}>
                  <User user={user}/>
                </div>
            )
        })}
        </>
    )
}

export default UserData

export async function getStaticProps(){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json()
    console.log(data)

    return{
        props: {
            users: data
        }
    }
}