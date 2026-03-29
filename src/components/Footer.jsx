import { Mail, Copyright } from "lucide-react"
import { Gamepad2 } from "lucide-react"

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h4><Gamepad2 /> Tienda Gamer</h4>
        <p>Tu marketplace de videojuegos</p>
      </div>

      <div>
        <p><Copyright size={16} /> 2026 Todos los derechos reservados</p>
        <p><Mail size={16} /> contacto@tiendagamer.cl</p>
      </div>
    </footer>
  )
}

export default Footer