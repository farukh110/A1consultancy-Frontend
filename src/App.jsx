import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/layouts/header/Header';
import Footer from './components/layouts/footer/Footer';
import Digital from './pages/digital-marketing/Digital';
import ContactCenter from './pages/contact-center/ContactCenter';
import InboundCalls from './pages/inbound-calls/InboundCalls';
import OutboundCalls from './pages/outbound-calls/OutboundCalls';
import LeadGeneration from './pages/lead-generation/LeadGeneration';
import Contact from './pages/contact/Contact';
import Careers from './pages/careers/Careers';
import AboutUs from './pages/about/AboutUs';
import TawkMessenger from '@tawk.to/tawk-messenger-react';
import ReactGA from 'react-ga';

const App = () => {

  useEffect(() => {

    ReactGA.initialize('G-VYD0TR3HJ6');
    ReactGA.pageview(window.location.pathname + window.location.search);

    const unlisten = ReactGA.pageview(window.location.pathname + window.location.search);

    return unlisten;

  }, []);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/inbound-calls" element={<InboundCalls />} />
          <Route exact path="/outbound-calls" element={<OutboundCalls />} />
          <Route exact path="/lead-generation" element={<LeadGeneration />} />
          <Route exact path="/digital-marketing" element={<Digital />} />
          <Route exact path="/contact-center-services" element={<ContactCenter />} />
          <Route exact path="/careers" element={<Careers />} />
          <Route exact path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer />
        <TawkMessenger
          propertyId="663a57189a809f19fb2e61fd"
          widgetId="default"
        />
      </div>
    </Router>
  );
}

export default App;
