/*usesState for action triggers*/
import React, { useEffect, useState } from 'react'

import {FaBars} from 'react-icons/fa'

/*no need to import keyframes */

import { ethers } from "ethers";

/*css for test navbar*/
import './Nav.css';  

import { networks } from './NetworkElements'


//remember to import to stop the page from being white
import {
  
  Nav,
  NavbarContainer,  
  NavLogo,
  NavLogoText,
  MobileIcon,
  NavMenu,
  NavItemScrollTo,
  NavLinks,
  
  NavBtn,
  NavBtnLink,
  NavImage,

  SendToPage_Container,
  SendToPage_Link
 } from './NavbarElements' 



import {

  SidebarContainer,
  Icon,
  CloseIcon,

  SidebarWrapper,
  SidebarMenu,

  SendToPage_LinkR,
  SidebarLink,

  SideBtnWrap,
  SidebarRouter,

  SidebarImage

} from './Sidebar/SidebarElements' 





//framer motion
import { motion } from 'framer-motion'




/*

   <SendToPage_Container>
          <SendToPage_Link to = '/about'> About </SendToPage_Link>
        </SendToPage_Container>


        <SendToPage_Container>
          <SendToPage_Link to = '/roadmap'> Roadmap </SendToPage_Link>
        </SendToPage_Container>

        
        <SendToPage_Container>
          <SendToPage_Link to = '/dao'> DAO </SendToPage_Link>
        </SendToPage_Container>

        
        <SendToPage_Container>
          <SendToPage_Link to = '/waveportal'> Wave Portal </SendToPage_Link>
        </SendToPage_Container>

        <SendToPage_Container>
          <SendToPage_Link to = '/'  alt="this will drop down below the page"> FAQ </SendToPage_Link>

    </SendToPage_Container>


*/

/* new hamburger menu*/
import { Squash as Hamburger } from 'hamburger-react'


//this is where it gets its name 
const Navbar01 = () => {

  

  /* API ------------------------ */

  /*
  const { authenticate, isAuthenticated, Moralis, account, user } = useMoralis();

  const Web3Auth_Login_Moralis = async () => {

    if (!isAuthenticated) {

      await authenticate({
        provider: "web3Auth",
        clientId: "BInHY_Y5hbcSrVUELpQeeG-F224pVCysvq_XPioBOCHju5dE1d-Mii0hW87qmSz7YBtbO78QwuU8Xg_gLh6SJNo",
        appLogo: "https://c.tenor.com/zRTuJBiCD_UAAAAd/rimuru-eren.gif",
        signingMessage: "Welcome to my domain :)"

      })
        .then(function(user) {
          console.log(user ?.get("ethAddress"));
          console.log("No Web3uikit");
        })
        .catch(function(error) {
          console.log(error);
        });

    } //end of not auth

  }// end of logins

/*

  const MetaMask_Login_Moralis = async () => {
    if (!isAuthenticated) {

      await authenticate({

        signingMessage: "Welcome to my domain :) -Gabe"

      })
        .then(function(user) {
          console.log(user!.get("ethAddress"));
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }

  const disconnectWallet = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      toast("Disconnecting...");
      setTimeout(function() {
        // Code to run after the pause
        Moralis.User.logOut().then(() => {
          window.location.reload();
        });
      }, 3100);

    };
    return;
  };
  
  */
  
  // end of moralis login -----------------------------------








  


 
    /*for navbar hamburger menu*/
  const [isOpen, setIsOpen] = useState(false);

  /*for navbar to side bar toggle */
  const toggle = () => {
    setIsOpen(!isOpen)

    //if false sidebar will show
    console.log("Toggled Status isOpen: ", isOpen);
    
  };


  /*
  <div className= {`nav ${show && 'nav_yellow'}`}> </div>
  */
  return(

    <>
  
    <Nav>
      <NavbarContainer>

        <NavLogo to = '/'> 
          <NavLogoText>Shinixagami</NavLogoText>
        </NavLogo>

        <MobileIcon onClick={toggle}> 
          <Hamburger size={26}  

            toggled={isOpen} toggle={setIsOpen}
          />
        </MobileIcon>
      
      <NavMenu> 

        <SendToPage_Container>
          <SendToPage_Link to = '/about'> About </SendToPage_Link>
        </SendToPage_Container>


        <SendToPage_Container>
          <SendToPage_Link to = '/roadmap'> Roadmap </SendToPage_Link>
        </SendToPage_Container>

        
        <SendToPage_Container>
          <SendToPage_Link to = '/dao/home'> DAO </SendToPage_Link>
        </SendToPage_Container>

        <SendToPage_Container>
          <SendToPage_Link to = '/waveportal'> Wave Portal </SendToPage_Link>
        </SendToPage_Container>

        <SendToPage_Container>
          <SendToPage_Link to = '/'  alt="this will drop down below the page"> FAQ </SendToPage_Link>
        </SendToPage_Container>
  

      </NavMenu>
    
        <NavBtn>
          <NavBtnLink to= 'mint'> Mint </NavBtnLink>
        </NavBtn>

      </NavbarContainer>
      
    </Nav>



      
     <SidebarContainer isOpen={isOpen} onClick={toggle}>
      
      <SidebarWrapper>

        <SidebarMenu>

          <SendToPage_LinkR to = '/' >
          Home
          </SendToPage_LinkR>

          <SendToPage_LinkR to = '/waveportal' >
          .Me
          </SendToPage_LinkR>

          <SendToPage_LinkR to = '/dao/settings' >
          DAO
          </SendToPage_LinkR>

          
        </SidebarMenu>
        
      </SidebarWrapper>


      <SidebarImage/>

      <SideBtnWrap>
        <SidebarRouter to="/mint"> Mint </SidebarRouter> 
      </SideBtnWrap>


    </SidebarContainer>
  


    </>
    


    


    


  );

}

export default Navbar01