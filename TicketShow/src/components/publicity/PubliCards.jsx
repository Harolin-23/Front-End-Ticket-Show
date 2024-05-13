import React from 'react';
import './StyleCont.css'
import { useState } from 'react';

export function DrawPublicity(){

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const countdownDate = new Date('2024-5-25').getTime();

    const updateCountdown = () => {
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
    
      setInterval(updateCountdown, 1000);

    return (
        <div className='publicity-cont'>
            <div className='info-event-publi'>
                    <div className='text-nv'>

                        <h1>Nuevo Festival<br></br>La pachanga Fest</h1>
                        <p>En tu lugar de preferencia</p>
                    </div>
                    <div className='cointer'>
                        <div className='D num'>
                            <p>{days}</p>
                            <p>Dias</p>
                        </div>
                        <div className='H num'>
                            <p>{hours}</p>
                            <p>Horas</p>
                        </div>
                        <div className='M num'>
                            <p>{minutes}</p>
                            <p>Minutos</p>
                        </div>
                        <div className='S num'>
                            <p>{seconds}</p>
                            <p>segundos</p>
                        </div>
                    </div>
                <div className='bto-more'>
                    <button>Show More</button>
                </div>
            </div>
            <div className='image-public-event'>
                <img src="../../../public/Assets/karina-lago-wEucG_sLRsY-unsplash.jpg" alt="" />
            </div>
        </div>
    )
}

