import React from "react";
import './Sidebar.css';

import{ Icon }from"web3uikit";

import{ CryptoLogos }from"web3uikit";

import { Link as LinkR, Outlet } from "react-router-dom";


import {useMoralis} from "react-moralis"

import { ToastContainer, toast } from 'react-toastify';
/*import 'react-toastify/dist/ReactToastify.css'; */


import {

  MenuDao,
  DaoSendToPage_LinkR,
  DaoSendToPage_Na,
  DaoMenuBtn,
  DaoMenuBtnText

} from './SidebarElementsDao' 


import {

  DaoPfpContainer,
  PfpImage,
  DaoPfpContainerTextAddrs,
  DaoPfpDivider,
  DaoConnectWalletBtn,
  DaoConnectWalletText
  
} from './SidebarElementsDao' 


import { defaultImgs } from "../defaultimgs";


const Sidebar = () => {

  const {isAuthenticated, Moralis, account} = useMoralis();
  const user = Moralis.User.current();

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



  var storeIt = user.attributes.pfp; 
  // console.log("check (sidebar):", storeIt);

  if(storeIt){

    if(storeIt.includes(".mp4")){
    // console.log("MP4 FOUND LEFT SIDEBAR:", storeIt);

    var isVideo = 1; 
    } else {
      var isVideo = 0;
    }
    
  } else {
    var isVideo = 0;
  }

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




  
  const goToMint = () => {
    window.open("https://dapp.shinixagami.net/");
  };

  
  

  return (
  <>

    <div className="siderContent">

      
      <MenuDao>

        <div className="details">

          <div className="logoContainer">
        
          <CryptoLogos
            bgColor=""
            chain="ethereum"
            onClick={function noRefCheck(){}}
            size="52px"
          />

          </div>
                    
        </div>

        
      
        <DaoSendToPage_LinkR to="/dao/home" >
          <DaoMenuBtn> 
            <DaoMenuBtnText>
              <Icon fill="#ffffff"size={33}svg="list"/>
              Home
            </DaoMenuBtnText>
          </DaoMenuBtn>
        </DaoSendToPage_LinkR>

        <DaoSendToPage_LinkR to="/dao/profile" >
          <DaoMenuBtn> 
             <DaoMenuBtnText>
                <Icon fill="#ffffff"size={33}svg="user"/>
                Profile
           </DaoMenuBtnText>
          </DaoMenuBtn>
        </DaoSendToPage_LinkR>

        <DaoSendToPage_LinkR to="/dao/settings" >
          <DaoMenuBtn> 
             <DaoMenuBtnText>
                <Icon fill="#ffffff"size={33}svg="cog"/>
                Settings    
            </DaoMenuBtnText>
          </DaoMenuBtn>
        </DaoSendToPage_LinkR>


         <DaoSendToPage_LinkR to="/dao/test" >
          <DaoMenuBtn> 
             <DaoMenuBtnText>
                 <Icon fill="#ffffff"size={33}svg="externalLink"/>
                Mint    
            </DaoMenuBtnText>
          </DaoMenuBtn>
        </DaoSendToPage_LinkR>
        

        <DaoSendToPage_LinkR to="">
          <DaoMenuBtn onClick={goToMint}> 
             <DaoMenuBtnText>
                <Icon fill="#ffffff"size={33}svg="externalLink"/>
                Mint Page 
              </DaoMenuBtnText>
          </DaoMenuBtn>
        </DaoSendToPage_LinkR>

        


      </MenuDao>
    
    </div>


    
              <DaoPfpContainer>


                 { isVideo  ? 

                    <video className="daoLeftPFP" autoPlay loop>
                    <source src={user.attributes.pfp} type="video/mp4" />
                    </video>
                    
                    
                    
                    : 
                    
                     <img className="daoLeftPFP" src={user.attributes.pfp ? user.attributes.pfp : defaultImgs[0]}></img>
          
                  }


            
                



                

                  

  
                  <DaoPfpContainerTextAddrs id="changeToAddress">
                  {user.attributes.ethAddress}
                  </DaoPfpContainerTextAddrs>
      
                  <DaoPfpDivider/>
                
                  <DaoConnectWalletBtn>
          
                  <DaoConnectWalletText onClick={disconnectWallet}>
                    Logout
                  </DaoConnectWalletText>

                      
                  </DaoConnectWalletBtn>
              </DaoPfpContainer>


    


    
    
  </>
  
  );
};

export default Sidebar;



/*

  <DaoSendToPage_LinkR to="">
          <DaoMenuBtn onClick={goToMint}> 
             <DaoMenuBtnText>
                <Icon fill="#ffffff"size={33}svg="externalLink"/>
                Mint    
              </DaoMenuBtnText>
          </DaoMenuBtn>
        </DaoSendToPage_LinkR>
*/