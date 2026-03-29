import { useContext } from "react"
import { UserContext } from "../context/UserContext"

function Profile() {
  const { user } = useContext(UserContext)

  return (
    <div className="container">
      <h1>Perfil</h1>

      {user ? (
        <>
          <p>Nombre: {user.nombre}</p>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <p>No hay usuario</p>
      )}
    </div>
  )
}

export default Profile