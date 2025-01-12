import React from 'react';
import AddDoctor from './components/AddDoctor';
import ShowDoctors from './components/ShowDoctors';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Patients from './components/Patients';
import Doctors from './components/Doctors';
import Contact from './components/Contact';
import BookAppointment from './components/BookAppointment';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adddoctors" element={<AddDoctor />} />
          <Route path="/showdoctors" element={<ShowDoctors />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/about" element={<Doctors/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/appointment" element={<BookAppointment />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;