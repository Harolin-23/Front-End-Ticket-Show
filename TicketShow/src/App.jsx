
import './Css-Gen/global.css'
import {useState} from 'react'
import React from 'react';

import {HeaderGen} from './components/header/Header.jsx'
import {CarrucelG} from './components/carrucel/carrucel.jsx'

 



function App() {

  return (
    <>
     <HeaderGen />
        <CarrucelG />
    </>
  )
}

export default App;