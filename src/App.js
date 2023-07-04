import './App.css';
import Header from './Components/Header';
import Marquee from './Components/Marquee';
import Home from './pages/Home'
import Footer from './Components/Footer';
import Medical from './pages/results/medical';
import Non_Medical from './pages/results/nonMedical';
import Broad from './pages/results/broad';
import Others from './pages/results/others';
import AboutUs from './pages/AboutUs';
import Career from './pages/Career';
// import ContactUs from './pages/ContactUs';
import ContactUs from './pages/contactUs';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Marquee />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/medical' element={<Medical />} />
          <Route exact path='/non-medical' element={<Non_Medical />} />
          <Route exact path='/broad' element={<Broad />} />
          <Route exact path='/others' element={<Others />} />
          <Route exact path='/aboutUs' element={<AboutUs />} />
          <Route exact path='/career' element={<Career />} />
          <Route exact path='/contactUs' element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router >
    </>

  );
}

export default App;

