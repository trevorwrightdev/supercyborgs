import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// * Pages
import Home from './pages/Home'
import Clan from './pages/Clan'
import Error from './pages/Error'
import Play from './pages/Play'

import reportWebVitals from './reportWebVitals';

import './styles/globals.css';

// TODO: Add a showcase for each clan mask in the clan of the mask page
// TODO: Fix stylesheet conflicts

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/clan' element={<Clan />} />
        <Route path='/play' element={<Play />} />
        <Route path='*' element={<Error />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
