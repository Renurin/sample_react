import logo from './logo.svg'
import React from 'react';
import Header from './components/theme/Header';
import Footer from './components/theme/Footer'; 
import './sass/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import NotFound from './components/pages/NotFound'


function App() {
  return (
    <div className="App">
      <Header />
      <div className='container-fluid'>
        <Router>
          <Routes>
            <Route path ='/' element= {< Home />} / >
            <Route path ='/About' element= {< About />} / >
            <Route path ='/Contact' element= {< Contact />} / >
            <Route path ='*' element={<NotFound />} / >
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
