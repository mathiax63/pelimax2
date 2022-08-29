import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import NovedadItem from "../components/novedades/NovedadItem"

const TodasLasPeliculas = (props) => {
  const [loading, setLoading] = useState(false)
  const [novedades, setNovedades] = useState([])

  useEffect(() => {
    const cargarNovedades = async () => {
      setLoading(true);
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/contacto`);
      setNovedades(response.data)
      setLoading(false)
    };
    cargarNovedades();
  }, []);

    return (
        <div class="MainDeProduct">
          
        <form action="/filtro" method="POST" class="filtroDePeñiculas">
            <div class="todosLosFiltros">

            <div class="filtroDeTodasLasPeliculas">
                <h4>Genero</h4>
                <label for="linea" >
                    <input class="inputDeAllProduct" type="checkbox" name="linea" value="Terror" />Terror</label>
                <label for="linea" >
                    <input class="inputDeAllProduct" type="checkbox" name="linea" value="Accion" />Accion</label>
                <label for="linea" >
                    <input class="inputDeAllProduct" type="checkbox" name="linea" value="Aventura" />Aventura</label>           
                <label for="1" >
                    <input type="checkbox" name="color" value="Familyar" />Familyar</label>
                <label for="2">
                    <input class="inputDeAllProduct" type="checkbox" name="color" value="Ficcion" />Ficcion</label>
                <label for="3">
                    <input class="inputDeAllProduct" type="checkbox" name="Historica" value="Historica" />Historica </label>
                <label for="4" ><input type="checkbox" name="color" value="Misterio" />Misterio</label>
                <label for="1a" >
                    <input class="inputDeAllProduct" type="checkbox" name="tipo" value="Musical" />Musical</label>
                <label for="1b" >
                    <input class="inputDeAllProduct" type="checkbox" name="tipo" value="Suspenso" />Suspenso </label>
            </div>
            <div class="filtroDeTodasLasPeliculas">
                <h4>Calificacion</h4>
                <label for="linea" >
                    <input type="checkbox" name="linea" value="1 Estrella" />1 Estrella</label>
                <label for="linea" >
                    <input type="checkbox" name="linea" value="2 Estrella" />2 Estrella</label>
                <label for="linea" >
                    <input type="checkbox" name="linea" value="3 Estrella" />3 Estrella</label>           
                <label for="1" >
                    <input type="checkbox" name="color" value="4 Estrella" id="1" />4 Estrella</label>
                    <label for="2">
                    <input type="checkbox" name="color" value="5 Estrella" id="1" />5 Estrella</label>
            </div>
        </div>


            
            
            <div class="botones">

            <div class="botFiltros">
                <button className="background-color: blue; color:white">Aplicar filtros</button>
            </div>
            <div class="botFiltros">
                <button className="background-color: red; ">Borrar filtros</button>
            </div>
        </div>
        </form>




         <div class="row row-cols-1 row-cols-md-3"> 
           
           {
            loading ? (
              <p>Cargando...</p>
            ) : (
              novedades.map(item => <NovedadItem key= {item.id}
                title={item.titulo}  sinopsis={item.sinopsis}
                imagen={item.imagen}  body={item.cuerpo} />)
            )
           }
              <div class="card"><Link to="/detalle">
                <img src="img/Avatar 2.jfif" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Avatar 2</h5>
                </div></Link>
              </div>
            
            
              
              </div>
            </div>
          
    
      
    )
}
export default TodasLasPeliculas