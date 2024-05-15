
import './Css-Gen/global.css'

import React from 'react';

import {DrawEvents} from './components/event-Cards/Events.jsx'
import {HeaderGen} from './components/header/Header.jsx'
import {CarrucelG} from './components/carrucel/carrucel.jsx'
import {BotomCategories} from './components/catBotoms/botomsCategories.jsx'

import {DrawPublicity} from './components/publicity/PubliCards.jsx'
import {InfoUs} from './hooks/p-info.jsx'
import {FooterApp} from './components/footer/Footer.jsx'

function App() {

  return (
    <>
     <HeaderGen />
        <CarrucelG />
        <BotomCategories />
        <DrawEvents/>
        <DrawPublicity />
         <DrawEvents/>
         <InfoUs />
         <FooterApp />

    </>
  )
}
export default App;