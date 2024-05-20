import { useState, useEffect } from 'react';
import { GetAllEvnts } from '../../Api/EventsApi/manageEventsApi.jsx'; // Asegúrate de importar tu función de API correctamente
import '../../components/publicity/StyleCont.css'

import {getEventByID} from '../../Api/EventsApi/manageEventsApi.jsx'


export function DrawPublicity() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [event, setEvent] = useState(null); 


    const clickedEvent = async (id) =>{
        const eventData = await getEventByID(id);
        console.log(eventData);
        localStorage.setItem("Event",JSON.stringify(eventData))
        window.location.href = "/Events"
      }

    useEffect(() => {

        const fetchEvents = async () => {
            try {
                const eventData = await GetAllEvnts();
                if (eventData.length > 0) {
                    const randomEvent = eventData[Math.floor(Math.random() * eventData.length)];
                    setEvent(randomEvent);
                    updateCountdown(randomEvent.date); 
                }
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
        const intervalId = setInterval(fetchEvents, 30000);
        return () => clearInterval(intervalId);
    }, []);

    const updateCountdown = (eventDate) => {
        const countdownDate = new Date(eventDate).getTime();
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hoursLeft = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);

        setDays(daysLeft);
        setHours(hoursLeft);
        setMinutes(minutesLeft);
        setSeconds(secondsLeft);
    };

    useEffect(() => {
        if (event) {
            const intervalId = setInterval(() => updateCountdown(event.date), 500);
            return () => clearInterval(intervalId);
        }
    }, [event]);












    return (
        <div className='publicity-cont'>
            {event ? (
                <>
                    <div className='info-event-publi'>
                        <div className='text-nv'>
                            <h1>{event.title}</h1>
                            <p>{event.description}</p>
                        </div>
                        <div className='cointer'>
                            <div className='D num'>
                                <p>{days}</p>
                                <h6>Days</h6>
                            </div>
                            <div className='H num'>
                                <p>{hours}</p>
                                <h6>Hours</h6>
                            </div>
                            <div className='M num'>
                                <p>{minutes}</p>
                                <h6>Minutes</h6>
                            </div>
                            <div className='S num'>
                                <p>{seconds}</p>
                                <h6>Seconds</h6>
                            </div>
                        </div>
                        <div className='bto-more'>
                            <button onClick={() => clickedEvent(event.id)}>Show More</button>
                        </div>

                        
                    </div>
                    <div className='image-public-event'>
                        <img src={event.image_url} alt="" />
                    </div>
                </>
            ) : (
               <div className='loader-div'>
                    <div className='changeLoader'></div>
               </div>
            )}
        </div>
    );
}