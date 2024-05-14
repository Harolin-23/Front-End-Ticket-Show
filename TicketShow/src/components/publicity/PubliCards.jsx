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
                            <h6>Dias</h6>
                        </div>
                        <div className='H num'>
                            <p>{hours}</p>
                            <h6>Horas</h6>
                        </div>
                        <div className='M num'>
                            <p>{minutes}</p>
                            <h6>Minutos</h6>
                        </div>
                        <div className='S num'>
                            <p>{seconds}</p>
                            <h6>Segundos</h6>
                        </div>
                    </div>
                <div className='bto-more'>
                    <button>Show More</button>
                    
                </div>
            </div>
            <div className='image-public-event'>
                <img src="../../../public/Assets/samantha-gades-fIHozNWfcvs-unsplash.jpg" alt="" />
            </div>
        </div>
    )
}

