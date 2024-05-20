
import {ErrorSituation} from './props/errorManageRoutes/errorPageConcs.jsx'
import './Css-Gen/payPage.css'
import { useEffect, useRef, useState } from "react";

import {SeatsSelect} from './Api/EventsApi/manageEventsApi.jsx'
import {SendEmail} from './Api/EventsApi/manageEventsApi.jsx'

import {text} from './components/header/Header.jsx'

const SeatSealect = ()=>{

   


    let eventDataShop  = localStorage.getItem("Event");
    let correoUser = sessionStorage.getItem("EmailPetition");


    if(!eventDataShop){
        return(
              <ErrorSituation errorTx="Something went wrong!" infoAct="please Reload" />
          )
       } 
       let objet = JSON.parse(eventDataShop);
       let capSet = objet.capacity;
       let idset = objet.id;


       const [capacity, setCapacity] = useState(2); 
       const [selectedSeats, setSelectedSeats] = useState([]);
       const [correo, setCorreo] = useState('');




       const [type ,setType] = useState("")
     
       const seats = Array.from({ length: capacity }, (_, i) => i + 1); 
     
       const handleSeatClick = (seatNumber) => {
         setSelectedSeats((prevSelectedSeats) => {
           if (prevSelectedSeats.includes(seatNumber)) {
             return prevSelectedSeats.filter((seat) => seat !== seatNumber);
           } else {
             return [...prevSelectedSeats, seatNumber];
           }
         });
       };

       console.log(selectedSeats)

       const selectSeats = (e)=>{
            e.preventDefault();
            SeatsSelect(idset,selectedSeats);
            
       }

       useEffect(() => {
         setCapacity(capSet);
         SendEmail(idset,correo)

       }, [capSet]);
        
       useEffect(() => {
            if(objet.category == "Funny"){
                setType("Escenario")
            }
            if(objet.category == "Conferences"){
                setType("Pantalla")
            }
            if(objet.category == "Higgest"){
                setType("Palco")
            
            }
      }, [type]);
    
       return (
         <div className="container-form">
                <div className='logo-back'>
                <a href="/" className="logo">{text.Text}<b className="RS-Logo">{text.bold}</b>{text.textlag}
            </a>
                </div>
                <div className='text-info'>
                    <h1>{type}</h1>
                </div>
            
           <div className="seats-container">
             {seats.map((seat) => (
               <div
                 key={seat}
                 className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
                 onClick={() => handleSeatClick(seat)}
               >
                 {seat}
               </div>
             ))}
           </div>
           <div className='info-set-select'>
             <h3>Has Escogido:{selectedSeats.sort((a, b) => a - b).join(', ')}</h3>
           </div>
             <form action="" className='shop-form' onSubmit={selectSeats}> 
                <input type="email" placeholder="Ingrese su correo" value={correo} onChange={(e) => setCorreo(e.target.value)}/>
                <input type="text"  placeholder='Ingrese sus nombres'/>
                <input type="text"  placeholder='Ingrese sus Apellidos'/>
                <input type="text"  placeholder='Ingrese su Cedula'/>
                <div className='infosensible'>
                    <input type="text"  placeholder='Ingrese su numero de targeta'/>
                    <input type="text"  placeholder='Codigo postal'/>
                </div>
                <input type="text"  placeholder='Ingrese su direccion'/>
                <input type="submit" value="comprar" className='btn-send-ticket' />
             </form>
         </div>
       );

}


export default SeatSealect;
