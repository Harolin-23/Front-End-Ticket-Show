import './header.css'
import {useState} from 'react'
import {callSearch} from '../../Api/Search'
import LinksDin from './LinksComponents/DynamicLinks'
import React from 'react';

let SearchEd = "";
export const text = {
  Text:"Ticket",
  bold:"S",
  textlag: "how"
}
 const links = {
      link_c: "categories",
      link_cI: "Ciudades",
      link_cII: "home",
      link_CIII: "about",
      link_IV : "Contact"  
  }
export function HeaderGen() {

  const [searched, SetSearched] = useState('');

  const [activeModal,setModel] = useState("active");

  const keyPress = (event)=>{
    if(event.key === 'Enter'){
        callSearch(SearchEd)
      }
  }
  const handleChanged = (event) =>{
    SetSearched(event.target.value);
    SearchEd = event.target.value;
  }
    return (
    <>
      <header>
        <div className="header-Page">
            <div className="logo">
                <a href="/" className='logo'>{text.Text}<b className="RS-Logo">{text.bold}</b>{text.textlag}</a>
            </div>
            <div className='input-Search'>
              <input
              type="text" 
              placeholder='Search your tickets her' 
              id='told-BarSearch' 
              onChange={handleChanged}
              onKeyDown={keyPress}
              />
            </div>
            <LinksDin />

            <div className='sesionBlock'>
              
            </div>
      </div>
      </header>
      </>
    )
  }