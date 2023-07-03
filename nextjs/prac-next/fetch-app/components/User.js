
const User = ({user}) => {
  return (
    <>
      <p>{user.title}</p>
      <hr />
      <p>{user.email}</p>
      <p>{user.username}</p>                          
    </>
  )
}

export default User