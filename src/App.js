import './App.css';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import About from './About';
import Pharmacy from './Pharmacy';
import Services from './Services';
import Contact from './Contact';
import Physiotherapy from './Physiotherapy';
import Booking from './Booking';
import Urology from './Urology';
import Nephrology from './Nephrology';
import Internal from './Internal';
import Mother from './Mother';
import Oncology from './Oncology';
import Brain from './Brain';
import Gastroenterology from './Gastroenterology';
import Accident from './Accident';
import Transplant from './Transplant';
import Laser from './Laser';
import Critical from './Critical';
import Blood from './Blood';
import Diagnostic from './Diagnostic';
import Doctor from './Doctor';
import Orthopedics from './Orthopedics';




import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Services' element={<Services/>} />
          <Route path='/About' element={<About/>} />

          <Route path='/Pharmacy' element={<Pharmacy/>} />
          <Route path='/Physiotherapy' element={<Physiotherapy/>} />
          <Route path='/Blood' element={<Blood/>} />
          <Route path='/Diagnostic' element={<Diagnostic/>} />
          <Route path='/Orthopedics' element={<Orthopedics/>} />
          
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Doctor' element={<Doctor/>} />
          <Route path='/Booking' element={<Booking/>} />
          <Route path='/Urology' element={<Urology/>} />
          <Route path='/Nephrology' element={<Nephrology/>} />
          <Route path='/Internal' element={<Internal/>} />
          <Route path='/Mother' element={<Mother/>} />
          <Route path='/Oncology' element={<Oncology/>} />
          <Route path='/Brain' element={<Brain/>} />
          <Route path='/Gastroenterology' element={<Gastroenterology/>} />
          <Route path='/Accident' element={<Accident/>} />
          <Route path='/Transplant' element={<Transplant/>} />
          <Route path='/Laser' element={<Laser/>} />
          <Route path='/Critical' element={<Critical/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Register' element={<Register/>} />
          
          


        </Routes>
      </Router>
    </div>
  );
}

export default App;