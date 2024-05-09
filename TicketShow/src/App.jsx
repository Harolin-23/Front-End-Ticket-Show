
import './Css-Gen/global.css'
import {useState} from 'react'
import React from 'react';

import {HeaderGen} from './components/header/Header.jsx'
import {CarrucelG} from './components/carrucel/carrucel.jsx'
import {BotomCategories} from './components/catBotoms/botomsCategories.jsx'

 
function App() {

  return (
    <>
     <HeaderGen />
        <CarrucelG />
        <BotomCategories />
    </>
  )
}

export default App;