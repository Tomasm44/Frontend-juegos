import { Gamepad2 } from "lucide-react"
import { FlameKindling } from "lucide-react"

function Home() {
  return (
    <div className="container">

      <h1><Gamepad2 /> Bienvenido a Tienda Gamer</h1>

      
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">

    <div className="carousel-item active">
      <img
        src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
        className="d-block w-100"
        alt="game1"
      />
    </div>

    <div className="carousel-item">
      <img
        src="https://images.unsplash.com/photo-1542751371-adc38448a05e"
        className="d-block w-100"
        alt="game2"
      />
    </div>

    <div className="carousel-item">
      <img
        src="https://images.unsplash.com/photo-1511512578047-dfb367046420"
        className="d-block w-100"
        alt="game3"
      />
    </div>

  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>

  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>

      
      <h2 style={{ marginTop: "30px" }}>Juegos destacados <FlameKindling size={20}/></h2>

      <div style={{ display: "flex" }}>
        <div className="card-game">FIFA 24</div>
        <div className="card-game">Elden Ring</div>
        <div className="card-game">God of War</div>
      </div>

    </div>
  )
}

export default Home