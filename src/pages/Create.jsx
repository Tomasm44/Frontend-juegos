import { useState } from "react"

function Create() {
  const [titulo, setTitulo] = useState("")
  const [precio, setPrecio] = useState("")
  const [imagen, setImagen] = useState("")

  const handlePublish = async () => {
    const token = localStorage.getItem("token") // Recuperamos el token guardado en el Login

    const response = await fetch("https://backend-juegos-b44b.onrender.com", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": token // <--- ESTO ES VITAL
      },
      body: JSON.stringify({ titulo, precio, imagen, descripcion: "Nuevo juego" })
    })

    if (response.ok) alert("¡Juego publicado con éxito!")
    else alert("Error al publicar. ¿Iniciaste sesión?")
  }

  return (
    <div className="container">
      <div className="form-container">
        <h1>Crear Publicación</h1>
        <input placeholder="Título" onChange={(e) => setTitulo(e.target.value)} />
        <input placeholder="Precio" onChange={(e) => setPrecio(e.target.value)} />
        <input placeholder="Imagen URL" onChange={(e) => setImagen(e.target.value)} />
        <button onClick={handlePublish}>Publicar</button>
      </div>
    </div>
  )
}

export default Create