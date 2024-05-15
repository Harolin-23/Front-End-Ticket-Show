
import React from 'react';
import {useEffect, useState} from 'react' 



import './Busquedastyles.css'
import {SectionConfig} from '../../../components/SectionConfig/btns-ConfigSearch.jsx'
import {GetById} from '../../CallApis.jsx'


let busquedaGen = null;
let bLocal = localStorage.getItem("search")
busquedaGen = bLocal;




//Searched call of api
export async function callSearch(busqueda){
    localStorage.setItem('search', busqueda);
    window.location.href = '/search';
    BusquedaFuction();    
}
    
export function BusquedaFuction(){
    GetById(busquedaGen);
    
    return(
        <>
            <div className='infoBusq'>
                <h6>Resultados de Busqueda - <p> " {busquedaGen} " </p></h6>
            </div>
            <SectionConfig />
            <DrawsSearch />
        </>  
    )
}





export function DrawsSearch(events){

    const [eventosList, setEventosList] = useState([]);

    const GetEvent = async ()=>{
        setEventosList(events);
    }

    useEffect(()=>{
        GetEvent();
    },[])

  
    return (
      <>
          <div className="container-Events-search">
                     <div className="card-ev">
                    <div className="imageEvent">
                      <img src="" alt="" />
                    </div>
                    <div className="infoEvent">
                      <h1>La mejor Parranda Fest</h1>
                      <p>Ciudad: Medellin</p>
                      <p>Hora: 9:00pm</p>
                      <a href=""> <h6>Comprar Tickets</h6></a>
                    </div>
                    </div>
          </div>
        </>
    );
}
    



