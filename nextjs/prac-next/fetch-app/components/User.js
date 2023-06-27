
const User = ({user}) => {
  return (
    <>
      <p>{user.name}</p>
      <hr />
      <p>{user.email}</p>
      <p>{user.username}</p>                          
    </>
  )
}

export default User