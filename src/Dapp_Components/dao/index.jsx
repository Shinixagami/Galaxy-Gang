import React from 'react'

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//do not use BrowserRouter - it only works in main directory. or shinixagami.net/
//remember this page is nested 

import { Main_DaoContainer } from './dao-container.jsx' 

import { ToastContainer, toast } from 'react-toastify';

//import 'react-toastify/dist/ReactToastify.css';

//contract address:
//0x1d1888F7F98e2D647564f36797c8E203be300939
// https://cronos.org/explorer/testnet3/address/0x1d1888F7F98e2D647564f36797c8E203be300939/transactions

import DaoHome from "./pages/Home.jsx";
import DaoProfile from "./pages/Profile.jsx";
import DaoSettings from "./pages/Settings.jsx";

import {

  LeftSideBar,
  DaoPfpContainer,
  PfpImage,
  DaoPfpContainerTextAddrs,
  DaoPfpDivider,
  DaoConnectWalletBtn,
  DaoConnectWalletText

} from './components/SidebarElementsDao' 

//left
import Sidebar from "./components/Sidebar"
// <Sidebar/>

//Right
import Rightbar from "./components/Rightbar"
// <Rightbar/>

import TweetInFeed  from "./components/TweetInFeed.jsx"
// <Sidebar/>

import "./mainpage-app.css"
import { defaultImgs } from "./defaultimgs";

//text css 
import "../../styles/Text.css"


/* MORALIS DATABASE API */
import {useMoralis} from "react-moralis"
import {ConnectButton, Icon } from "web3uikit"
import { Link as LinkR, Outlet } from "react-router-dom";


//import box one and two
const DaoMainPage = () => {

  /* 
  Import Methods
  */
  const {isAuthenticated, Moralis, account} = useMoralis();

  /*
  CAUSES ERRORS? BUT WORKS ON PROFILE PAGE
  */
  /* DEFENSIVE CLAUSE */

  /*
  if (isAuthenticated &&  account){
    
    toast("Auth -Authenticated & account found");


      if (isAuthenticated &&  account ){
      document.getElementById("testingTest").src=defaultImgs[0] ;
      }
  
  };
  */

/* user from  moralis*/
    // let user = Moralis.User.current();
// document.getElementById("testingTest").src= defaultImgs[0];
  // src={theUser.attributes.pfp};



  
  const disconnectWallet = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      toast("Disconnecting...");
      setTimeout(function(){
        // Code to run after the pause
        Moralis.User.logOut().then(()=> {
        window.location.reload(); 
        });
      }, 3100);
      
    };
    return;
  };



  return (
    
    <>

    <ToastContainer position="bottom-left" autoClose={3100}/>

    {isAuthenticated ? ( 

       <Main_DaoContainer>

          <div className="daoMainPage">
      
      <div className="daoLeftSideBar">

          <LeftSideBar>
          
              <Sidebar/>
            
          </LeftSideBar>
      </div>

        <div className="daoMainWindow">
          <Outlet/>
        </div>

        <div className="daoRightBar">
          <Rightbar>
          </Rightbar>
        </div>
      </div>
         
      </Main_DaoContainer>

    ) : (  
      
      <div className ="loginPage">
        
        <Icon fill="white" size={45} svg="chainlink" />
        <ConnectButton 
          signingMessage="Welcome! Please sign to authenticate."   
          style={{
             'backgroundColor' : 'yellow',
             'border' : 'none',
          }}
        />
        
      </div>
        
        )} 


   
    </>

  )

}
export default DaoMainPage


    // <button onClick={authWalletConnect}>
    //   test test
    //   </button>
