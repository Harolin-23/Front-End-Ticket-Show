import React from "react";
import { useEffect, useState } from "react";

import "./Busquedastyles.css";
import { SectionConfig } from "../../../components/SectionConfig/btns-ConfigSearch.jsx";
import { getEventByID } from "../../EventsApi/manageEventsApi.jsx";
import { GetTitule } from "./CallApis.jsx";



let busquedaGen = "";
let bLocal = localStorage.getItem("search");
busquedaGen = bLocal;

//Searched call of api
export async function callSearch(busqueda) {
  localStorage.setItem("search", busqueda);

  window.location.href = "/search";
  busquedaGen = busqueda;
  BusquedaFuction();
}

export function BusquedaFuction() {
  if (!isNaN(busquedaGen)) {
    getEventByID();
  } else {
    GetTitule();
  }

  return (
    <>
      <div className="infoBusq">
        <h6>
          Resultados de Busqueda - <p> " {busquedaGen} " </p>
        </h6>
      </div>
      <SectionConfig />
      <DrawsSearch />
    </>
  );
}

export function DrawsSearch() {
  BusquedaFuction();

  const [eventosList, setEventosList] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventData = await GetTitule();

        setEventosList(eventData);
        const intervalId = setInterval(fetchEvents, 50000);
        return () => clearInterval(intervalId);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);
  console.log(eventosList);


  const clickedEvent = async (id) =>{
    const eventData = await getEventByID(id);
    console.log(eventData);
    localStorage.setItem("Event",JSON.stringify(eventData))
    window.location.href = "/Events"
  }






  return (
    <>
      <div className="container-Events-search">
        {eventosList.length > 0 ? (
          eventosList.map((e, index) => (
            <div className="card-ev" key={index}>
              <div className="imageEvent">
                <img src={e.image_url} alt="" />
              </div>
              <div className="infoEvent">
                <h1>{e.title}</h1>
                <p>City: {e.city}</p>
                <p>Date: {e.date}</p>
                <a onClick={() => clickedEvent(e.id)}>
                  <h6 >Purchase Tickets</h6>
                </a>
              </div>
            </div>
          ))
        ) : (
          <>
            <div className="cardE notCharged loding1 b"></div>
            <div className="cardE notCharged loding2 b"></div>
            <div className="cardE notCharged loding3 b"></div>
            <div className="cardE notCharged loding4 b"></div>
          </>
        )}
      </div>
    </>
  );
}
