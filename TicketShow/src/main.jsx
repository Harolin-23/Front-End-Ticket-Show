import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages Nav IMPORTS
import ResultsComponent from './SearchedPage.jsx'
import LoginPage from './Login/Login.jsx'
import RegistrerPage from './Login/Registrer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
   <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/search" element={<ResultsComponent />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Registrer" element={<RegistrerPage />} />
        
      </Routes>
    </Router>
</>
)
