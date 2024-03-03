import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/layouts/header/Header';
import Footer from './components/layouts/footer/Footer';
import Web from './pages/web-development/Web';
import Digital from './pages/digital-marketing/Digital';
import ContactCenter from './pages/contact-center/ContactCenter';
import BackOffice from './pages/back-office/BackOffice';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/web-development" element={<Web />} />
          <Route exact path="/digital-marketing" element={<Digital />} />
          <Route exact path="/contact-center-services" element={<ContactCenter />} />
          <Route exact path="/back-office-services" element={<BackOffice />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
