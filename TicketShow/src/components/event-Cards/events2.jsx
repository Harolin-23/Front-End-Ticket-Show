import React from "react";
import "./eventsDraws.css";
import "./publicity.css";

import { useEffect, useRef, useState } from "react";
import { publicity } from "../../props/cardsTemp/eventsD.js";
import { getEvents } from "../../Api/EventsApi/manageEventsApi.jsx";
import {getEventByID} from '../../Api/EventsApi/manageEventsApi.jsx'

export function DrawEvents2() {
  const [events, setEvents] = useState([]);



  const clickedEvent = async (id) =>{
    const eventData = await getEventByID(id);
    console.log(eventData)
    localStorage.setItem("Event",JSON.stringify(eventData))
    window.location.href = "/Events"
  }







  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventData = await getEvents(2, 4);
        setEvents(eventData);

        const intervalId = setInterval(fetchEvents, 30000);
        return () => clearInterval(intervalId);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="card-e">
      <div className="name-section"></div>
      <div className="container-cards-Events">
        {events.length > 0 ? (
          events.map((e, index) => (
            <div className="cardE" key={index} id={e.id}>
              <div className="image-event">
                <img src={e.image_url} />
              </div>
              <div className="infoContain-card-event">
                <h6>{e.title}</h6>
                <p>{e.description}</p>
                <button onClick={() => clickedEvent(e.id)}>Get more info</button>
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
        )}
      </div>
      <Publicity />
    </div>
  );
}

function Publicity() {
  return (
    <div className="recomends">
      <div className="rec-card">
        <img src="https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

        <div className="text-card">
          <h1>Fun</h1>
          <p>Tap for more Info</p>
        </div>
      </div>

      <div className="rec-card">
        <img
          src="https://images.pexels.com/photos/57980/pexels-photo-57980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />

        <div className="text-card">
          <h1>Meetings</h1>
          <p>Tap for more Info</p>
        </div>
      </div>
    </div>
  );
}
