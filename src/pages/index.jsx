import React, {useState} from 'react'

//dependencies 
//if the imports fuck up the page will be white 
import {BrowserRouter as Router} from 'react-router-dom'

//imports another jsx file -make sure its a jxs file
import Navbar01 from '../components/Navbar/';

import Showcase01 from '../components/Showcase/';
//  <Showcase01 /> 

import Icon01 from '../bubble_menu/home/';
//  <Icon01 /> 

//media player componenet
import MediaPlayer01 from '../components/MediaPlayer/';

//hero section
import HeroSection01 from '../components/HeroSection/';
//    <HeroSection01/>

//infor section
import InfoSection01 from '../components/InfoSection/';
//    <InfoSection01/>

//media player componenet
import ToDoList01 from '../components/ToDoList/';
//    <ToDoList01/>


//connect btn for testing
import ConnectSection from '../components/ConnectSection/';




import { HomeBG, Home_Footer } from './HomeElements'

//need a css import for text 
//css and webpage styling -actual reference in index.html
// import '../styles/App.css';  
// import '../styles/Text.css';  

//connect mediaplayer and hero section together and merge them using flex, cus they WILL NOT MERGE

//modal import THIS IS MESSAGE DROP DOWN MENU
import Modal from '../components/DropDownMSG'

//framer motion
import { motion } from 'framer-motion'

//css for text
// <ToDoList01/>

  
/* Actual Home page */
const Home = () => {

  const close =() => setModalOpen(false);
  const open = () => setModalOpen(true);

  return(

    <>
    <HomeBG>

      <HeroSection01/>
      
      <InfoSection01/>

      <ConnectSection/>



        <Home_Footer>
          All Rights Reserved. Under Development.
        </Home_Footer>

    </HomeBG>
    </>

  
 
  )
    
}

export default Home;