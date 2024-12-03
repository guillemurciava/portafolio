import React from 'react';
import { BrowserRouter as Router, Reoutes, Reoute, Route, Routes} from 'react-router-dom'; 
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='background'>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />          
        </Routes>
        <Footer />
      </div>
      </Router>
  );
}

export default App;
