import React, { useState, useEffect } from "react";
import "../props/ErrorsLogin/errors.css";



import { text } from "../components/header/Header.jsx";
import { roleEject } from "../Api/UserApi/Verified/RoleVerified.jsx";
import {GetAllEvnts} from '../Api/EventsApi/manageEventsApi.jsx'
import {saveEvents} from '../Api/EventsApi/manageEventsApi.jsx'
import {deleteEvents} from '../Api/EventsApi/manageEventsApi.jsx'
import {UpdateEvents} from '../Api/EventsApi/manageEventsApi.jsx'
import {getEventByID} from '../Api/EventsApi/manageEventsApi.jsx'


import {ErrorSituation} from '../props/errorManageRoutes/errorPageConcs.jsx'

import "../Login/StylesLogin/Login.css";
import "./admin.css";





function Admin() {
  function logout() {
    window.location.href = "/";
    sessionStorage.removeItem("sessionToken");
    sessionStorage.removeItem("EmailPetition");
  }

  const [dataToken, setDataToken] = useState('');

  const [selectedOption, setSelectedOption] = useState("Get All");
  const [idToDelete,SetidToDelete] = useState('');
  const  [idToUpdate,SetidToUpdate] = useState(null);

  const  [eventUpdate,SeteventUpdate] = useState([]);
  

  const [even,setEvent] = useState([]);


  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const [price, setPrice] = useState('');
  const [image_url, setImageUrl] = useState('');
  const [category, setCategory] = useState('');
  const [capacity, setCapacity] = useState('');
  const [date, setDate] = useState('');


  const [actualizate, setAtualizate] = useState(false);



  const [uptEv,SetuptEv] = useState([])


  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventData = await GetAllEvnts();
        setEvent(eventData);
        const intervalId = setInterval(fetchEvents, 30000);
        return () => clearInterval(intervalId);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const eventData = {
      title,
      city,
      category,
      description,
      date,
      image_url,
      price,
      capacity,
    };
  
    if (actualizate) {
      await UpdateEvents(idToUpdate, eventData);
    } else {
      await saveEvents(eventData);
    }
  
    setTitle('');
    setDescription('');
    setCity('');
    setPrice('');
    setImageUrl('');
    setCategory('');
    setCapacity('');
    setDate('');
  
    setAtualizate(false);
    setSelectedOption("Get All");
    fetchEvents(); 
  };


  useEffect(() => {
    const token = sessionStorage.getItem("sessionToken");
    setDataToken(token);
  }, []);

 



  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSubmitToDlete();
    }
  };


  const handleSubmitToDlete = async () => {

    if(selectedOption === "Delete"){
      deleteEvents(idToDelete);
      fetchEvents();
    }

    if(selectedOption === "Update"){
      const eventData = await getEventByID(idToUpdate);
      SeteventUpdate(eventData);
      setAtualizate(true)
      setSelectedOption("Add New");
     
  
    }

    fetchEvents();
  };

  useEffect(() => {
    if (eventUpdate && selectedOption === "Add New") {
      addparams();
    }
  }, [eventUpdate, selectedOption]);



  const addparams = ()=>{

    setTitle(eventUpdate.title)
    setDescription(eventUpdate.description)
    setCity(eventUpdate.city)
    setPrice(eventUpdate.price)
    setImageUrl(eventUpdate.image_url)
    setCategory(eventUpdate.category)
    setCapacity(eventUpdate.capacity)
    setDate(eventUpdate.date)
  }







  if (!dataToken) {
    return (
      <ErrorSituation  errorTx="you Don't have a permision" infoAct="please login"/>
    );
    } else {
      return (
      <>
        <div className="container-Admin">
          <div className="menues-interact">
            <div className="Menu">
              <a href="/" className="logo LErrR title">
                {text.Text}
                <b className="RS-Logo">{text.bold}</b>
                {text.textlag}
              </a>

              <div className="home-act">
                <p>home</p>
                <div className="btn-icon">
                  <i class="fa-solid fa-house"></i>
                </div>
              </div>
                <ul>
                  <li>
                    <h5 onClick={() => handleOptionClick("Get All")}>
                      Get All
                    </h5>
                  </li>
                  <li>
                    <h5 onClick={() => handleOptionClick("Add New")}>
                      Add New
                    </h5>
                  </li>
                  <li>
                    <h5 onClick={() => handleOptionClick("Delete")}>Delete</h5>
                  </li>
                  <li>
                    <h5 onClick={() => handleOptionClick("Update")}>Update</h5>
                  </li>
                </ul>
              <div className="sep"></div>
              <div className="ofLow" onClick={logout}>
                <i class="fa-solid fa-power-off"></i><p>Logout</p> 
              </div>
            </div>

            <div className="contain-opt">
              {
              selectedOption === "Get All" ? (

                <>
                  <div className="Busqued-and-info">
                    <form onSubmit={handleSubmit}>
                      <input type="text" placeholder="Search Your Event" />
                    </form>
                  </div>
                  <div className="contain-events-Api">
                    <div className="section-inf">
                      <h1>Get All</h1>
                      <div className="info-but">
                        <p>Powered Search</p>
                      </div>
                      <i class="fa-solid fa-bolt"></i>
                    </div>
                    <div className="data-event  events-info">

                    {even.length > 0 ? (
                      even.map((e, index) => (
                        <div className="card-ev-admin">
                        <div className="minture-img">
                          <i class="fa-solid fa-ticket"></i>
                        </div>
                        <div className="info-event">
                          <h6>{e.title}</h6>
                          <p>{e.description}</p>
                        </div>
                        <div className="more-inf">
                          <h6>{e.city}</h6>
                          <p>{e.date}</p>
                          <h4>{e.category}</h4>
                        </div>
                        <div className="more-inf-dt">
                          <h4>Capacity: {e.capacity}</h4>
                        </div>
                      </div>
                  ))
                  ) : (
                  <>
                    <div className="cardE notCharged loding1"></div>
                    <div className="cardE notCharged loding2"></div>
                    <div className="cardE notCharged loding3"></div>
                    <div className="cardE notCharged loding4"></div>
                  </>
                    )
                  }
                    </div>
                  </div>
                </>
              ) : selectedOption === "Add New" ? (
                <>
                  <div className="Busqued-and-info">
                    <form action="">
                      <input type="text" placeholder="Search your event" />
                    </form>
                  </div>
                  <div className="contain-events-Api">
                    <div className="section-inf">
                      <h1>Save</h1>
                    </div>
                    <div className="data-event">
                      <form className="save-event" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                      <div className="info-location">
                          <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
                          <input type="number" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
                      </div>
                          <input type="text" placeholder="Image Url" value={image_url} onChange={(e) => setImageUrl(e.target.value)}/>
                      <div className="info-MoreDAte">
                          <input type="text" placeholder="Category"value={category} onChange={(e) => setCategory(e.target.value)} />
                          <input type="number" placeholder="Capacity"value={capacity} onChange={(e) => setCapacity(e.target.value)}  />
                          <input type="datetime-local" placeholder="Date"  value={date}  onChange={(e) => setDate(e.target.value)}/>
                      </div>
                          <input type="submit"value="Send"className="btn-send"/>
                        
                      </form>
                    </div>
                  </div>
                </>
              ) : selectedOption === "Delete" ? (
                <>
                  <div className="Busqued-and-info">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <input  type="text" placeholder="Id Event To delete" value={idToDelete} onChange={(e) => SetidToDelete(e.target.value)} onKeyDown={handleKeyDown}/>
                    </form>
                  </div>
                  <div className="contain-events-Api">
                    <div className="section-inf">
                      <h1>Delete</h1>
                    </div>
                    <div className="data-event  events-info">
                    
                    {even.length > 0 ? (
                      even.map((e, index) => (
                        <div className="card-ev-admin">
                             <p>{e.id}</p>
                        <div className="minture-img">
                          <i class="fa-solid fa-ticket"></i>
                        </div>
                        <div className="info-event">
                          <h6>{e.title}</h6>
                          <p>{e.description}</p>
                       
                        </div>
                        <div className="more-inf">
                          <h6>{e.city}</h6>
                          <p>{e.date}</p>
                          <h4>{e.category}</h4>
                        </div>
                        <div className="more-inf-dt">
                          <h4>Capacity: {e.capacity}</h4>
                        </div>
                      </div>
                  ))
                  ) : (
                  <>
                    <div className="cardE notCharged loding1"></div>
                    <div className="cardE notCharged loding2"></div>
                    <div className="cardE notCharged loding3"></div>
                    <div className="cardE notCharged loding4"></div>
                  </>
                    )
                  }
                    </div>
                  </div>
                </>
              ) : selectedOption === "Update" ? (
                <>
                <div className="Busqued-and-info">
                <form onSubmit={(e) => e.preventDefault()}>
                  <input  type="text" placeholder="Id Event To delete" value={idToUpdate} onChange={(e) => SetidToUpdate(e.target.value)} onKeyDown={handleKeyDown}/>
                  </form>
                </div>
                <div className="contain-events-Api">
                  <div className="section-inf">
                    <h1>update</h1>
                  </div>
                  <div className="data-event  events-info">
                  
                  {even.length > 0 ? (
                    even.map((e, index) => (
                      <div className="card-ev-admin">
                           <p>{e.id}</p>
                      <div className="minture-img">
                        <i class="fa-solid fa-ticket"></i>
                      </div>
                      <div className="info-event">
                        <h6>{e.title}</h6>
                        <p>{e.description}</p>
                     
                      </div>
                      <div className="more-inf">
                        <h6>{e.city}</h6>
                        <p>{e.date}</p>
                        <h4>{e.category}</h4>
                      </div>
                      <div className="more-inf-dt">
                        <h4>Capacity: {e.capacity}</h4>
                      </div>
                    </div>
                ))
                ) : (
                <>
                  <div className="cardE notCharged loding1"></div>
                  <div className="cardE notCharged loding2"></div>
                  <div className="cardE notCharged loding3"></div>
                  <div className="cardE notCharged loding4"></div>
                </>
                  )
                }
                  </div>
                </div>
              </>
       
              ) : null}
            </div>
          </div>



          <div className="footer-admin">
            <div className="logo-info">
              <a href="/" className="logo LErrR">
                {text.Text}
                <b className="RS-Logo">{text.bold}</b>
                {text.textlag}
              </a>
              <p></p>
            </div>
            <div className="info-tec">
              <h6>Power By</h6>
              <div className="sep-rect"></div>
              <div className="logo-img">
                <img src="../../public/Assets/React_Logo_SVG 1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Admin;
