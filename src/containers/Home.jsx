import React, { useState } from 'react'
import Topbar from "../components/Topbar";
import Header from '../components/Header';
import Mobilenav from '../components/Mobilenav';
import Search from '../components/Search';
import Slider1 from '../components/Slider1';
import Slider2 from '../components/Slider2';
import Slider3 from '../components/Slider3';
import Section4 from '../components/Section4';
import Slider4 from '../components/Slider4';
import Slider5 from '../components/Slider5';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import FooterPara from '../components/FooterPara';
import PopUp from '../components/PopUp';
import { useContext } from 'react';
import { TestContext } from '../config/context';
const Home = () => {
  const profileData = useContext(TestContext)
  console.log(profileData);
  // const [popUp,usePopPup] = useState()
  const popUp = false
  return (
    <>
      <Topbar />
      <Header />
      <Mobilenav />




      {/* BANNER START */}

      <section className='banner_bg'>
        <div className="container">
          <div className="row">
            <div className="col">
              <Search />
            </div>
          </div>
        </div>
      </section>

      {/* BANNER END */}

      {/* SignIn PopUp */}
 
      {/* {popUp} ? <PopUp/>  */}

      <Slider1 />
      <Slider2 />
      <Slider3 />
      <Section4 />
      <Slider4 />
      <Slider5 />
      <Faq />

      {/* <FooterPara/> */}
      <Footer />
    </>
  )
}


export default Home;