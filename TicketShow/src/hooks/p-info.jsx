import React from 'react';
import {useState} from 'react'
import '../Css-Gen/info.css'

export function InfoUs(){
    return(
        <div className='info-s'>
            <div className="cd-icon">
                <i class="fa-solid fa-percent"></i>
                <h6>Sin tasas de interes <br></br>Acumulativo</h6>
                <p>Tenemos el mejor manejo de los pagos para tu mejor Economia</p>
            </div>
            <div className="cd-icon">
                <i class="fa-solid fa-shield-halved"></i>
                <h6>La mayor seguridad <br></br>En tus compras</h6>
                <p>Nos encargamos de verificar posibles fraudes en voltos</p>
            </div>
            <div className="cd-icon">
                <i class="fa-solid fa-shop"></i>
                <h6>Tiendas Fisicas<br></br>y faciles para todos</h6>
                <p>Tenemos muchas otras maneras accesibles de compras de ticketes </p>
            </div>
            <div className="cd-icon">
                <i class="fa-solid fa-location-dot"></i>
                <h6>Mucho mas cerca<br></br>Estamos disponibles</h6>
                <p>Eventos Cercanos a ti para una mayor ingracion</p>
            </div>
        </div>

    )
}