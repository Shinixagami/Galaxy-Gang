//YOU ARE LOOKING AT THE SOCIAL MEDIA BRANCH OF THE GIT


import React, {useState} from 'react'

//dependencies 
//if the imports fuck up the page will be white 
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
///test

//css and webpage styling -actual reference in index.html
// import './styles/App.css';  
// import './styles/Text.css';   

//imports another jsx file -make sure its a jxs file
import Navbar01 from './components/Navbar/';
/* <Navbar01 toggle={toggle} />*/ 

// import Sidebar01 from './components/Sidebar/';
// <Sidebar01/>
//<Sidebar01 isOpen={isOpen} toggle={toggle}/>

import  Mint01  from './pages_Dapp/mint/mint.jsx';

import  Roadmap01  from './pages_Dapp/roadmap/roadmap.jsx';

import  WavePortal01  from './pages_Dapp/waveportal/waveportal.jsx';

import  DAOPage01  from './pages_Dapp/dao/dao.jsx';
// <DAOPage01/>

import  TestingPage01  from './pages_Dapp/testing/testing.jsx';

/* new*/
import  TeamPage01  from './pages_Dapp/team/team.jsx';

import  AboutPage01  from './pages_Dapp/about/about.jsx';

import ToDoList01 from './components/ToDoList/';
//    <ToDoList01/>

// import Icon01 from./components/Icon/';
//  <Icon01 /> 

//Nested routes for DAO - is first loaded on main
import  DaoHome  from './Dapp_Components/dao/pages/Home.jsx';

import  DaoProfile  from './Dapp_Components/dao/pages/Profile.jsx';

import  DaoSettings  from './Dapp_Components/dao/pages/Settings.jsx';

import GuiTesting from './Dapp_Components/dao/gui/';



//testing
import CaylaPage from './pages/cayla/';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//--------------------------------------------

//--------------------------------------------


//Extra Pages (Not used)
import  SocialHomePage01  from './pages_Dapp/social_home/home.jsx';
//  <SocialHomePage01 /> 

import  ProfilePage01  from './pages_Dapp/social_profile/profile.jsx';
//import problems
//import { MoralisProvider } from "react-moralis";


import Home from './pages/';

/*
import DaoHome from "./pages/Home.jsx";
import DaoProfile from "./pages/Profile.jsx";
import DaoSettings from "./pages/Settings.jsx";
*/

<script src="https://cdnjs.cloudflare.com/ajax/libs/react-modal/3.14.3/react-modal.min.js"
   integrity="sha512-MY2jfK3DBnVzdS2V8MXo5lRtr0mNRroUI9hoLVv2/yL3vrJTam3VzASuKQ96fLEpyYIT4a8o7YgtUs5lPjiLVQ=="
   crossorigin="anonymous"
   referrerpolicy="no-referrer"></script>


// import Modal from 'react-modal';
// import ReactModal from 'react-modal';


const App = () =>  {

  /* MAKE A NEW COMPONENET */
  
  return (

    <>

      <Router>

        <Navbar01/>
        
        <Routes>

          <Route path="/" element ={<Home />} />
          <Route path="/mint" element ={<Mint01/>} />
          <Route path="/waveportal" element ={<WavePortal01/>} />
          <Route path="/me" element ={<WavePortal01/>} />
          <Route path="/roadmap" element ={<Roadmap01/>} />
          <Route path="/about" element ={<AboutPage01/>} />
          <Route path="/team" element ={<TeamPage01/>} />
          <Route path="/test" element ={<TestingPage01/>} />
          <Route path="/todo" element ={<ToDoList01/>} />

          <Route path="/extra" element ={<SocialHomePage01/>} />
          <Route path="/pfp" element ={<ProfilePage01/>} />

          <Route path="/cayla" element ={<CaylaPage/>} />

          
          <Route path="/dao" element ={<DAOPage01/>} >
          
            <Route path="home" element ={<DaoHome/>} />
            <Route path="profile" element ={<DaoProfile/>} />
            <Route path="settings" element ={<DaoSettings/>} />
            
            <Route path="test" element ={<GuiTesting/>} />
            
          </Route>
          
        </Routes>
        
      </Router>

    </>


  );
}

export default App;