
import React from 'react';
import './eventsDraws.css'
import './publicity.css'

import {useEffect, useRef, useState} from 'react';
import {publicity} from '../../props/cardsTemp/eventsD.js';


export function DrawEvents(){

    const [events, setEvent] = useState([]);

    const GetEvent = async ()=>{
        setEvent(publicity);
    }

    useEffect(()=>{
        GetEvent();
    },[])
    return(
        <div className='card-e'>
                <div className='name-section'>
                    <h6>Events</h6>
                </div>
                <div className='container-cards-Events'>
                    {
                    events.map((e)=>{
                        return <div className='cardE'>
                        <div className='image-event'>
                            <img src={e.imagenURL} alt="" />
                        </div>
                        <div className='infoContain-card-event'>
                            <h6>{e.tex}</h6>
                            <p>{e.Description}</p>
                            <button>Get more info</button>
                        </div>
                    </div>
                    })

                    }
                </div>
            <Publicity />
        </div>
    )
}

function Publicity(){
    return(
        <div className='recomends'>

            <div className='rec-card'>
                <img src="" alt="" />

                <div className='text-card'>
                    <h1>Pary Fest</h1>
                    <p>30 de mayo</p>
                </div>
            </div>

            <div className='rec-card'>
            <img src="" alt="" />
                
                <div className='text-card'>
                    <h1>Conferencia</h1>
                    <p>14 de abril</p>
                </div>
            </div>
            </div>
    )
}