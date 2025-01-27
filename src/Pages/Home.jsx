import React from 'react'
import Header from '../Components/Header';
import Info from '../Components/Info';
import Aboutme from '../Components/Aboutme';
import Myservices from '../Components/Myservices';
import Myportfolio from '../Components/Myportfolio';
import Choose from '../Components/Choose';
import Testimonials from '../Components/Testimonials';
import ContactMe from '../Components/ContactMe';

const Home = () => {
  return (
    <div>
      <Header/>
      <Info/>
      <Aboutme/>
      <Myservices/>
      <Myportfolio/>
      <Choose/>
      <Testimonials/>
      <ContactMe/>
    </div>
  )
}

export default Home;
