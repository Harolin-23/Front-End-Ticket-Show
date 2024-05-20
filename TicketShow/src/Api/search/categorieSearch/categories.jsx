import { HeaderGen } from '../../../components/header/Header.jsx';
import { FooterApp } from '../../../components/footer/Footer.jsx';
import { useEffect, useState } from 'react';
import { GetCategorie } from '../../../Api/search/styleSearch/CallApis.jsx';
import  { GetCategorieOther } from '../../../Api/search/styleSearch/CallApis.jsx';


import { getEventByID } from "../../EventsApi/manageEventsApi.jsx";

import './categories.css';
import '../../../Css-Gen/global.css';

function CategireCast() {

    const value = localStorage.getItem("categories");

    const [eventCategorie, setEventCategorie] = useState([]);
    const [pagination, setPagination] = useState(1);
    const [size, setSize] = useState(1);



    const clickedEvent = async (id) =>{
        const eventData = await getEventByID(id);
        console.log(eventData);
        localStorage.setItem("Event",JSON.stringify(eventData))
        window.location.href = "/Events"
      }
    




    useEffect(() => {
        const fetchEvents = async () => {
            try {
                if(value == "More"){
                    const eventData = await GetCategorie(pagination);
                    setEventCategorie(eventData || []); 
                    setSize(eventData.total || 1); 
                }else{
                    const eventData = await GetCategorieOther(pagination);
            
                setEventCategorie(eventData || []); 
                setSize(eventData.total || 1); 
            }
            } catch (error) {
                console.error('Error fetching events:', error);
                setEventCategorie([]); 
            }
        };
        
        fetchEvents();
        const intervalId = setInterval(() => fetchEvents(pagination), 30000);
        return () => clearInterval(intervalId);
    }, [pagination]);

    const handleNextPage = () => {
        setPagination(pagination + 1);
    };

    const handlePreviousPage = () => {
             setPagination(pagination - 1);
    };
    return (
        <>
            <HeaderGen />
            <div className='infoSec-categories'>
                <h6>Categoria:<p>{value}</p></h6>
            </div>
            <div className='categories-Conten'>
                <div className='slider-vertical'>
                    <img src="../../../../public/Assets/noiseporn-JNuKyKXLh8U-unsplash.jpg" alt="" />
                </div>
                <div className='container-cards'>
                    {eventCategorie.length > 0 ? (
                       eventCategorie.slice(0, 6).map((e, index) => (
                            <div className='cardE' key={index}>
                                <div className='image-event'>
                                    <img src={e.image_url} alt="" />
                                </div>
                                <div className='infoContain-card-event'>
                                    <h6>{e.title}</h6>
                                    <p>{e.description}</p>
                                    <button onClick={() => clickedEvent(e.id)}>Get more info</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <>
                            <div className='cardE notCharged loding1'></div>
                            <div className='cardE notCharged loding2'></div>
                            <div className='cardE notCharged loding3'></div>
                            <div className='cardE notCharged loding4'></div>
                            <div className='cardE notCharged loding4'></div>
                            <div className='cardE notCharged loding4'></div>
                        </>
                    )}
                </div>
            </div>
            <div className='pagination'>
                <div
                    className={`prev arrow ${pagination <= 1 ? 'disabled' : ''}`}
                    onClick={handlePreviousPage}
                >
                    <i className="fa-solid fa-chevron-left"></i>
                </div>
                <div className='marker'>
                    <h6>{pagination}</h6>
                </div>
                <div
                    className={`next arrow ${pagination >= size ? 'disabled' : ''}`}
                    onClick={handleNextPage}
                >
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
            </div>
            <FooterApp />
        </>
    );
}

export default CategireCast;
