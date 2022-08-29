import { Link } from "react-router-dom"
const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/paginasParaVer">Plataformas para ver sus peliculas</Link></li>
                    <li><Link to="/todasLasPeliculas">Todos los productos</Link></li>
                    <li><Link to="/admin">Soy administrador</Link></li>
                </ul>
            </div>
        </nav>
       
    )
}
export default Nav