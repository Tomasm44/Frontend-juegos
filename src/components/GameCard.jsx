function GameCard({ titulo, precio, imagen }) {
  return (
    <div className="card-game">
      <img src={imagen} alt={titulo} />

      <h3>{titulo}</h3>
      <p>Precio: ${precio}</p>

      <button>Ver más</button>
    </div>
  )
}

export default GameCard