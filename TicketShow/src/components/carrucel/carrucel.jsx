import './carrucel.css'
import '../../Css-Gen/global.css'
import {data} from '../../props/cardsTemp/infoCards.js' 

import {useEffect, useRef, useState} from 'react' 


export function CarrucelG() {

        const [event, setEvent] = useState([])


        const GetEvent = async ()=>{
            setEvent(data)
        }

        useEffect(()=>{
            GetEvent();
        },[])

    return(
    <div className='carrucel'>
        <div className='card-containers'>
           {
                event.map((eventF)=>{
                    const colorCard ={backgroundColor: eventF.color}

                    return <div className='card-event' id={eventF.id} style={colorCard}>
                                <img src={eventF.imagenURL} />
                                <div className='text-CardEv'>
                                    <h1>{eventF.tex}</h1>
                                    <p>{eventF.Fecha}</p>
                                </div>
                           </div>
                })
           }
        </div>
    </div>
    )
    
}
