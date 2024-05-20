import React from 'react';
//components imports
import {HeaderGen} from './components/header/Header.jsx'
import {BusquedaFuction} from './Api/search/styleSearch/Search.jsx'
import {FooterApp} from './components/footer/Footer.jsx'

import './Css-Gen/eventShop.css'


import ReactDOM from 'react-dom/client'



function ResultsComponent() {
  return (
    <>
      <HeaderGen />
      <BusquedaFuction />
    </>
  );
}

export default ResultsComponent;