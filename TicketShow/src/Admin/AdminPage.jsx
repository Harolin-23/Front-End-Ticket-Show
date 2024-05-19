import React, { useState, useEffect } from "react";
import "../props/ErrorsLogin/errors.css";



import { text } from "../components/header/Header.jsx";
import { roleEject } from "../Api/UserApi/Verified/RoleVerified.jsx";
import {GetAllEvnts} from '../Api/EventsApi/manageEventsApi.jsx'
import {saveEvents} from '../Api/EventsApi/manageEventsApi.jsx'


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

  const [even,setEvent] = useState([])


  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('');
  const [capacity, setCapacity] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const eventData = {
      title,
      description,
      city,
      price,
      imageUrl,
      category,
      capacity,
      date,
    };
    console.log(eventData)
    saveEvents(eventData)
    setSelectedOption("Get All");
  };


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


  useEffect(() => {
    const token = sessionStorage.getItem("sessionToken");
    setDataToken(token);
  }, []);
  





  if (!dataToken) {
    return (
      <div className="erroToAcces">
        <a href="/" className="logo LErrR">
          {text.Text}
          <b className="RS-Logo">{text.bold}</b>
          {text.textlag}
        </a>
        <h1>
          <br></br>
          <i class="fa-solid fa-xmark"></i>
          <br />
          <i>You do not have access.</i>
          <br></br>
          Please, log in.
        </h1>
      </div>
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
                          <input type="url" placeholder="Image Url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>
                      <div className="info-MoreDAte">
                          <input type="text" placeholder="Category"value={category} onChange={(e) => setCategory(e.target.value)} />
                          <input type="number" placeholder="Capacity"value={capacity} onChange={(e) => setCapacity(e.target.value)}  />
                          <input type="datetime-local"placeholder="Date"  value={date}  onChange={(e) => setDate(e.target.value)}/>
                      </div>
                          <input type="submit"value="Send"className="btn-send"/>
                        
                      </form>
                    </div>
                  </div>
                </>
              ) : selectedOption === "Delete" ? (
                <>
                  <div className="Busqued-and-info">
                    <form action="">
                      <input type="text" placeholder="Id Event To delete" />
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
                <div>
                  <p>Update a ticket</p>
                </div>
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