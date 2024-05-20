import { text } from "./components/header/Header";
import {HeaderGen} from './components/header/Header.jsx'
import './Css-Gen/global.css'

import {ErrorSituation} from './props/errorManageRoutes/errorPageConcs.jsx'
import { useEffect, useRef, useState } from "react";

import {DrawEvents2} from './components/event-Cards/events2.jsx'
import {DrawPublicity} from './components/publicity/PubliCards.jsx'
import {InfoUs} from './hooks/p-info.jsx'
import {FooterApp} from './components/footer/Footer.jsx'
 

function EventPageShop(){

    const redirectPay = ()=>{
        window.location.href = "/shopPay"
    }

    let eventDataShop  = localStorage.getItem("Event");

   if(!eventDataShop){
      return(
            <ErrorSituation errorTx="Something went wrong!" infoAct="please Reload" />
        )
     } 

    let objet = JSON.parse(eventDataShop);

    const date = new Date(objet.date);

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;


    const formattedTime = `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;

    const monthIndex = date.getMonth();
    const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ];



      const countdownDate = date;

      const month = monthNames[monthIndex];


      const [daysCont, setDaysCont] = useState(0);
      const [hourCont, SethourCont] = useState(0);
      const [minutesCont, SetminutesCont] = useState(0);
      const [secondsCont, SetsecondsCont] = useState(0);




      const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = countdownDate - now;
    
        const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hoursLeft = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);
    
        setDaysCont(daysLeft);
        SethourCont(hoursLeft);
        SetminutesCont(minutesLeft);
        SetsecondsCont(secondsLeft);
      };
      setInterval(updateCountdown, 1000);

    return(
        <>
        <HeaderGen/>
        <div className="event-content-shop">
            <div className="image-event-shop">
                <div className="container-img">
                    <img src={objet.image_url} alt="" />
                </div>
            </div>
            <div className="more info-content">
                <h1>{objet.title}</h1>
                <p>{objet.city} <i class="fa-solid fa-location-dot"></i></p>
                <p>hora :{formattedTime}</p>
                <p>Fecha: {monthIndex }{month}</p>
                <p>capacity: {objet.capacity}</p>
                <button onClick={redirectPay}><b>Comprar tickets</b></button>
            </div>
        </div>
        <div className="sep"></div>
        <h1 className="section-name">More dates</h1>
        <div className="moreDates">

                <div className="date">
                    <div className="date-number">
                        <h1> {monthIndex + 10}</h1>
                        <p>{month + 10}</p>
                        <div className="sep"></div>
                        <p>{formattedTime}</p>
                    </div>
                </div>

                <div className="date">
                    <div className="date-number">
                        <h1> {monthIndex + 10}</h1>
                        <p>{month + 10}</p>
                        <div className="sep"></div>
                        <p>{formattedTime}</p>
                    </div>
                </div>

                <div className="date">
                    <div className="date-number">
                        <h1> {monthIndex + 20}</h1>
                        <p>{month + 20}</p>
                        <div className="sep"></div>
                        <p>{formattedTime}</p>
                    </div>
                </div>

                <div className="date">
                    <div className="date-number">
                        <h1> {monthIndex + 30}</h1>
                        <p>{month + 30}</p>
                        <div className="sep"></div>
                        <p>{formattedTime}</p>
                    </div>
                </div>

                <div className="date">
                    <div className="date-number">
                        <h1> {monthIndex + 40}</h1>
                        <p>{month + 40}</p>
                        <div className="sep"></div>
                        <p>{formattedTime}</p>
                    </div>
                </div>
            </div>
            <div className="info-shop">
                <p>    Enjoy our special offers and exclusive discounts. By registering on our website, you will gain access to promotions and stay updated with our latest news. Thank you for choosing us and trusting us with your purchases.
</p>
            </div>
            <div className="contador-cont-evt">
                        <h1>{objet.title}</h1>
                        <div className="sep"></div>
                        <div className='cointer container'>
                            <div className='D num'>
                                <p>{daysCont}</p>
                                <h6>Days</h6>
                            </div>
                            <div className='H num'>
                                <p>{hourCont}</p>
                                <h6>Hours</h6>
                            </div>
                            <div className='M num'>
                                <p>{minutesCont}</p>
                                <h6>Minutes</h6>
                            </div>
                            <div className='S num'>
                                <p>{secondsCont}</p>
                                <h6>Seconds</h6>
                            </div>
                        </div>
                        <div className='bto-more'>
                            <button onClick={redirectPay}>Comprar tickets</button>
                        </div>
            </div>
            <div className="more-btnshow">
                <h3>Show More</h3>
                <div className="sep"></div>
                <DrawEvents2 />
                <DrawPublicity />
                <InfoUs />
                <FooterApp />
            </div>
        
        </>

    )
}


export default EventPageShop;
