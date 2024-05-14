import React from 'react';
//components imports
import {HeaderGen} from './components/header/Header.jsx'
import {BusquedaFuction} from './Api/Search.jsx'
import {FooterApp} from './components/footer/Footer.jsx'

function ResultsComponent() {
  return (
    <>
      <HeaderGen />
      <BusquedaFuction />

    </>
  );
}

export default ResultsComponent;