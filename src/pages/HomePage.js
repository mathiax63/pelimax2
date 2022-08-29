import Carousel from 'react-bootstrap/Carousel';
//import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import NovedadItem from "../components/novedades/Home5"
import Nuevas from "../components/novedades/HomeCEstrellas"
// or less ideally


const HomePage = (props) => {
  const [loading, setLoading] = useState(false)
  const [novedades, setNovedades] = useState([])
  const [estrellas, setEstrellas] = useState([])

  
   
  

  useEffect(() => {
 const cargarTodo = async () => {
      setLoading(true);
      const porFecha = await axios.get(`${process.env.REACT_APP_API_URL}/api/b`);
      setNovedades(porFecha.data)
      const porEstrellas = await axios.get(`${process.env.REACT_APP_API_URL}/api/a`);
      setEstrellas(porEstrellas.data)
      setLoading(false)
    };
    cargarTodo();
  }, []);

  
    return (
        <div>
            <main class="mainIndex">
   

<div class="contenedorCarrusel">
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/portada-encantojpeg.webp"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3  class="titulos">Encanto</h3>
      <p class="pDelCarrusel">En lo alto de las montañas de Colombia hay un lugar encantado llamado Encanto. Aquí,
                en una casa mágica, vive la extraordinaria familia Madrigal donde todos tienen habilidades fantásticas.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/F9-Poster.webp"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3  class="titulos">Rapido y Furioso 9</h3>
      <p  class="pDelCarrusel">Dom Toretto y su equipo se unen para detener un complot del asesino más hábil y el
                conductor más exitoso que jamás hayan conocido: el hermano abandonado de Dom.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/portada-para-la-caratula-de-el-hobbit-un-viaje-inesperado-original.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 class="titulos">El Hoobit</h3>
      <p  class="pDelCarrusel">Dentro de dicha ficción, el argumento de El hobbit se sitúa en el año 2941 de la
                Tercera Edad del Sol,​ y narra la historia del hobbit Bilbo Bolsón, que junto con el mago Gandalf y un
                grupo de enanos, vive una aventura en busca del tesoro custodiado por el dragón Smaug en la Montaña
                Solitaria.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>












    <div class="Destacados-Y-Novedades-General">

      <h2 class="DYN">Novedades</h2>

<div className='card-deck'>
      {
            loading ? (
              <p>Cargando...</p>
            ) : (
              novedades.map(item => <NovedadItem key= {item.id}
                title={item.titulo}  sinopsis={item.sinopsis} estrellas={item.estrellas} estreno={item.estreno}
                imagen={item.imagen}  body={item.cuerpo} />)
            )
           }
           </div>
    </div>


    <div class="Destacados-Y-Novedades-General">

      <h2 class="DYN">Destacados</h2>

      <div class="card-deck">
      {
            loading ? (
              <p>Cargando...</p>
            ) : (
              estrellas.map(item => <Nuevas key= {item.id}
                title={item.titulo}  sinopsis={item.sinopsis}
                estrellas={item.estrellas} estreno={item.estreno}
                imagen={item.imagen}  body={item.cuerpo} />)
            )
           }
        
       
          </div>
        
      
    </div>

  </main>
        </div>
        )
}
export default HomePage