import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Register() {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleRegister = async () => {
    await fetch("https://backend-juegos-b44b.onrender.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email, password })
    })
    alert("Usuario creado, ahora inicia sesión")
    navigate("/login")
  }

  return (
    <div className="container">
      <div className="form-container">
        <h1>Registro</h1>
        <input placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Contraseña" type="password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleRegister}>Registrarse</button>
      </div>
    </div>
  )
}

export default Register