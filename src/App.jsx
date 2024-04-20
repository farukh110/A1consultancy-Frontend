import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/layouts/header/Header';
import Footer from './components/layouts/footer/Footer';
import Web from './pages/web-development/Web';
import Digital from './pages/digital-marketing/Digital';
import ContactCenter from './pages/contact-center/ContactCenter';
import BackOffice from './pages/back-office/BackOffice';
import VideoMonitoring from './pages/video-monitoring/VideoMonitoring';
import InboundCalls from './pages/inbound-calls/InboundCalls';
import OutboundCalls from './pages/outbound-calls/OutboundCalls';
import LeadGeneration from './pages/lead-generation/LeadGeneration';
import Contact from './pages/contact/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/inbound-calls" element={<InboundCalls />} />
          <Route exact path="/outbound-calls" element={<OutboundCalls />} />
          <Route exact path="/lead-generation" element={<LeadGeneration />} />
          <Route exact path="/web-development" element={<Web />} />
          <Route exact path="/digital-marketing" element={<Digital />} />
          <Route exact path="/contact-center-services" element={<ContactCenter />} />
          <Route exact path="/back-office-services" element={<BackOffice />} />
          <Route exact path="/video-monitoring-surveillance" element={<VideoMonitoring />} />
          <Route exact path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
