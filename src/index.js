import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Resume } from './Components/Resume';
import { Form } from './Components/Form';
import RegisterUsers from './Components/RegisterUsers.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
       
      <Route path="/resume" element={<Resume />} />

      <Route path="/registerUsers" element={<RegisterUsers />} />

    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
