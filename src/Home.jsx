import { Link, useLoaderData } from "react-router-dom"
import Users from "./Components/Users"

function Home() {
  const loadedUsers = useLoaderData()
  return (
    <>
      

      <Link to='/newUser'>
        <button className="btn">New user</button>
      </Link>
      <Users loadedUsers={loadedUsers}></Users>





    </>
  )
}

export default Home
