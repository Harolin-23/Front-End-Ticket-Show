import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages Nav IMPORTS
import ResultsComponent from './SearchedPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
   <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/search" element={<ResultsComponent />} />
      </Routes>
    </Router>
</>
)
