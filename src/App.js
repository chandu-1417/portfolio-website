import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';
import ContactMe from './Components/ContactMe';

function App() {
  return (
  
    <div className='overflow-x-hidden'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/portfolio-website' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contactme' element={<ContactMe/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>

  );
}

export default App;
