
import { callSearch } from "../../Api/search/styleSearch/Search.jsx";
import React from "react";
import { useEffect, useRef, useState } from "react";
import LinksDin from "./LinksComponents/DynamicLinks";
import "./header.css";
import "./LinksComponents/ModalStyle.css";
import ModalAccount from "./Modals/AccountModal";

let SearchEd = "";

export const text = {
  Text: "Ticket",
  bold: "S",
  textlag: "how",
};

export function HeaderGen() {
  const [isLoggedd, setIsLogged] = useState(false);


    // let sesion = sessionStorage.getItem("sessionToken");

   
    // useEffect(() => {
    //   if(sesion){
    //     console.log("active")
    //     setIsLogged(true);
    //     localStorage.setItem("status","active")
    //   }else{
    //     setIsLogged(false);
    //   }
    

    // },);






  //  Estado de cuenta activo
 

  //Busqueda Logic-------------------
  //Estado de Busqueda
  const [searched, SetSearched] = useState("");

  const keyPress = (event) => {
    if (event.key === "Enter") {
      SearchEd !== "" ? callSearch(SearchEd) : null;
    }
  };
  const handleChanged = (event) => {
    SetSearched(event.target.value);
    SearchEd = event.target.value;
  };
  //--------------------------------

  //Initializacion de Modal Desactivado
  const [modalOpen, setModalOpen] = useState(false);

  const clickedModad = (event) => {
    modalOpen === true ? setModalOpen(false) : setModalOpen(true);
    ModalVerified(modalOpen);
  };

  //----------------------------------------------------

  //--------------------------------------------

  return (
    <>
      <header>
        <div className="header-Page">
          <div className="logo">
            <a href="/" className="logo">
              {text.Text}
              <b className="RS-Logo">{text.bold}</b>
              {text.textlag}
            </a>
          </div>
          <div className="input-Search">
            <input
              type="text"
              placeholder="Search your tickets her"
              id="told-BarSearch"
              onChange={handleChanged}
              onKeyDown={keyPress}
            />
          </div>
          <LinksDin />

          <div className="sesionBlock" onClick={clickedModad}>
            {isLoggedd ? (
              <i class="fa-regular fa-circle"></i>
            ) : (
              <i className="fa-solid fa-user"></i>
            )}
          </div>
          {modalOpen ? <ModalAccount /> : <div></div>}
        </div>
      </header>
    </>
  );
}
