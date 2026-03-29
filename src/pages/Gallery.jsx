import GameCard from "../components/GameCard"
import { Gamepad2 } from "lucide-react"
import { useEffect, useState } from "react"

function Gallery() {
 const [juegos, setJuegos] = useState([])

  useEffect(() => {
    // Reemplaza con tu URL de Render
    fetch("https://backend-juegos-b44b.onrender.com/games") 
      .then(res => res.json())
      .then(data => setJuegos(data))
      .catch(error => console.error("Error cargando juegos:", error))
  }, [])
  

  return (
    <>
      <div className="container">
        <h1><Gamepad2 />Galería de Juegos </h1>

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {juegos.map((juego) => (
            <GameCard
              key={juego.id}
              titulo={juego.titulo}
              precio={juego.precio}
              imagen={juego.imagen}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Gallery