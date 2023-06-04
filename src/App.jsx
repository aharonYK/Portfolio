import './App.css';
import { BrowserRouter as Router, Route, Routes,useLocation } from 'react-router-dom';

import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import About from './components/about';
import AOS from 'aos';
import React,{ useEffect }  from 'react';
import 'aos/dist/aos.css';
import Projects from './components/projects';
import Resume from './components/resume';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


function App() {
  

  useEffect(() => {
    AOS.init({
      duration: 1500
    });
  }, []);
  
  return (
    



      
     
<Router>
<ScrollToTop />
      <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          
        </Routes>
        <Footer/>
    </Router>
   
     
    
  );
}

export default App;
