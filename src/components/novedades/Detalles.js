import React from "react"

const detalles = (props => {
    const { id, title, sinopsis, imagen, estrellas, etiquetas, estreno, Plataformasparaver, trailer, body} = props;
    return (
        <div>
        <div class="productoDetalle">
            
            <h3>{title}</h3>
            <div class="imgDeDetail"><img src={imagen} style={{height:"100%"}} alt="" /></div>
            <div class="datosDetail">
                <div class="pDeDetail">
                    <h6>Sinopsis: </h6>
                    <p> {sinopsis}</p>
                </div>
                <div class="pDeDetailInferior">
                    <p class="pDeDetailP">Etiquetas:  {etiquetas}</p>
                    <p class="pDeDetailP">Estreno: {estreno}</p>
                    <p class="pDeDetailP">Disponible en: <a href="/PaginasParaVer">{Plataformasparaver + " "}</a></p>    
                    <p class="pDeDetailP">Estrellas: {estrellas}</p>
                </div>
                <div class="video"><h3>Trailer</h3><iframe width="560" height="315" src={trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="text-align: center ;"></iframe>
                    <h3>Imagenes</h3>

                    <div class="imgDeImgDetail">
                        <div class="card1"><img class="imgDeDetail" src={imagen} alt="" /></div>
                        <div class="card1"><img class="imgDeDetail" src={imagen} alt="" /></div>
                    </div>
                    <div class="imgDeImgDetail">
                        <div class="card1"><img class="imgDeDetail" src={imagen} alt="" /></div>
                        <div class="card1"><img class="imgDeDetail" src={imagen} alt="" /></div>
                        <div dangerouslySetInnerHTML={{__html:body}} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
})

export default detalles