
import './Css-Gen/global.css'
import {useState} from 'react'
import React from 'react';

import {DrawEvents} from './components/event-Cards/Events.jsx'
import {HeaderGen} from './components/header/Header.jsx'
import {CarrucelG} from './components/carrucel/carrucel.jsx'
import {BotomCategories} from './components/catBotoms/botomsCategories.jsx'


 
function App() {

  return (
    <>
     <HeaderGen />
        <CarrucelG />
        <BotomCategories />
        <DrawEvents/>
    </>
  )
}

export default App;