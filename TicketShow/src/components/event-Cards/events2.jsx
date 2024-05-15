import React from 'react';
import './eventsDraws.css'
import './publicity.css'

import {useEffect, useRef, useState} from 'react';
import {publicity} from '../../props/cardsTemp/eventsD.js';
import {getEvents} from '../../Api/EventsApi/manageEventsApi.jsx'


export function DrawEvents2(){
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const eventData = await getEvents(2,4);
                setEvents(eventData);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div className='card-e'>
            <div className='name-section'>
                <h6>Events</h6>
            </div>
            <div className='container-cards-Events'>
                {events.length > 0 ? (

                    

                    events.map((e, index) => (
                        <div className='cardE' key={index}>
                            <div className='image-event'>
                                <img src={e.image_url} alt="" />
                            </div>
                            <div className='infoContain-card-event'>
                                <h6>{e.title}</h6>
                                <p>{e.description}</p>
                                <button>Get more info</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p><i class="fa-solid fa-link-slash"></i></p>
                )}
            </div>
            <Publicity />
        </div>
    );
    
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