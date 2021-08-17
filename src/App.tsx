import React from 'react';
import AboutUs from './Components/AboutUs';
import Features from './Components/Features';
import Landing from './Components/Landing';
import Nav from './Components/Nav';
import OurProjects from './Components/OurProjects';
import OurService from './Components/OurService';
import SucessHistory from './Components/SucessHistory';
import Map from './Components/Map';
import Subscribe from './Components/Subscribe';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';

const App: React.FC = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <Nav />
      {/* Landing section */}
      <Landing />
      {/* OurService section */}
      <OurService />
      {/* Features section */}
      <Features />
      {/* Success history section */}
      <SucessHistory />
      {/* our projects section */}
      <OurProjects />
      {/* about us section */}
      <AboutUs />
      {/* the map section */}
      <Map />
      {/* the subscription section */}
      <Subscribe />
      {/* contact us section */}
      <ContactUs />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
