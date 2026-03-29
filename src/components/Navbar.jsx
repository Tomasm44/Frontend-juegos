import { Gamepad2, User, LogIn, PlusCircle } from "lucide-react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <h2><Gamepad2 /> Tienda Gamer</h2>

      <div>
        <Link to="/"><Gamepad2 size={18} /> Home</Link>
        <Link to="/gallery"><Gamepad2 size={18} /> Galería</Link>
        <Link to="/login"><LogIn size={18} /> Login</Link>
        <Link to="/register"><User size={18} /> Registro</Link>
        <Link to="/profile"><User size={18} /> Perfil</Link>
        <Link to="/create"><PlusCircle size={18} /> Crear</Link>
      </div>
    </nav>
  )
}

export default Navbar