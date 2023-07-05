import './App.css';
import Header from './Components/Header';
import Marquee from './Components/Marquee';
import Home from './pages/Home'
import Footer from './Components/Footer';
import AboutUs from './pages/AboutUs';
import Career from './pages/Career';
import ContactUs from './pages/contactUs';
import Api from './resultsAPI';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Results from './pages/Results';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Marquee />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/medical' element={<Results heading="Medical" path={Api.medical} />} />
          <Route exact path='/non-medical' element={<Results heading="Non Medical" path={Api.non_medical} />} />
          <Route exact path='/broad' element={<Results heading="Broad" path={Api.broad} />} />
          <Route exact path='/others' element={<Results heading="Others" path={Api.others} />} />
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

