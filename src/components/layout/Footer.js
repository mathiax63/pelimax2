import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'
import axios from "axios"
import React, {useState} from "react"
 
const Footer = (props) => {

  const initialFrom = {   
    email:'',
    pedido: ''
  }

  const [sending, setSending] = useState(false);
  const [msg, setMsg] =useState("");
  const [formData,setFromData] =useState(initialFrom);

  const handleChange = e =>{
    const {name, value} = e.target;
    setFromData(oldData => ({
      ...oldData,
      [name]:value
    }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg("");
    setSending(true)
    const response = await axios.post("http://localhost:3000/api/contacto", formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false){
    setFromData(initialFrom)
  }
  }
  //console.log(formData)




    return ( 
      <div>
      <footer>
    <div class="DivFooter">
      <div class="contact">
    <h3>Quienes somos</h3>
    <p>Somos una pagina que recopila peliculas para que pueda obtener mas informacion de las mismas tanto en critica como en donde ouede verlas</p>
    </div>
    <div class="contact">
      <h3>Contactos</h3>
      <section>
        <article>
          <p class="pDeFooter"> Email : PeliMax@hotmai.com</p>
        </article>
        <article>
          <p class="pDeFooter">Numero De Telefono : 23456122</p>
        </article>
        <article > <FontAwesomeIcon icon={faInstagram} style={{lineHeight: 2  , color: "rgb(219, 149, 221)"}}/>
          <p class="pDeFooter">Instagram : PeliMax007</p>
        </article>
        <article><FontAwesomeIcon icon={faFacebookSquare}style={{lineHeight: 2, color: "blue"}}/>
      

          <p class="pDeFooter">facebook : PeliMax</p>
        </article>
        <article>
          
        <FontAwesomeIcon icon={faTwitter}  style={{lineHeight: 2, color: "rgb(84, 184, 230)"}} />
          <p class="pDeFooter">Twitter : PeliMaxima</p>
        </article>
      </section>
    </div>
      <form className="formPP" action="/contacto" onSubmit={handleSubmit} method='post'>
        <h3>¿No encuentra su pelicula?</h3>
        <p>Envienos un email con el nombre d la pelicula y envrebe la estaremos añadiendo</p>
        <div class="contenedorDePedirPeliculas">
        <div class="divPedirPeliculas">
          <label class="labelDePedirPelicula" for="email">Su Email :</label>
        <input class="inputPedirPeli" type="text" name="email" value={formData.email} onChange={handleChange}/>
      </div>
      <div class="divPedirPeliculas">
        <label class="labelDePedirPelicula" for="pedido">pelicula a añadir :</label>
        <input class="inputPedirPeli" type="text" name="pedido" value={formData.pedido} onChange={handleChange}/>
        
        
    </div>

    <button type="submit" class="btn-btn-primary" className="margin: 0px;">Enviar</button>
  </div>

    </form>
    
    {sending ? <p>Enviando.....</p> : null}
    {msg ? <p>{msg}</p> : null}

      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
    crossorigin="anonymous"></script>
    </div>
  </footer>
  </div>
  
       
    )
}
export default Footer