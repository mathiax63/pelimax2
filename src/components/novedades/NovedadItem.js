import React from "react"
import { Link } from "react-router-dom"

const novedadItem = (props => {
    const {  title, imagen, body} = props;
    return (
        <div className="divCompTodasP"><Link className="aDelCT" to="/detalles/{id}">
            
            
            <img className="imgTp" src={imagen} />
            <h5>{title}</h5>
            <div dangerouslySetInnerHTML={{__html:body}} />
            <hr /></Link>
        </div>
    )
})

export default novedadItem