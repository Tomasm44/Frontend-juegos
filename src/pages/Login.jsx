import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"
import { useNavigate } from "react-router-dom"

function Login() {
  const { setUser } = useContext(UserContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const response = await fetch("https://backend-juegos-b44b.onrender.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      })

      const data = await response.json()

      if (response.ok) {
        localStorage.setItem("token", data.token) // Guardamos el token para otras peticiones
        setUser({ email }) 
        setEmail("")
        setPassword("")
        alert("¡Bienvenido!")
        navigate("/profile")
      } else {
        alert(data.message || "Error en el login")
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <div className="container">
      <div className="form-container">
        <h1>Login</h1>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Iniciar sesión</button>
      </div>
    </div>
  )
}


export default Login