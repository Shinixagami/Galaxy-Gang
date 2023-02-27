import React from "react";
import { Link as LinkRD } from "react-router-dom";
import './Profile.css';
import { defaultImgs } from "../defaultimgs";
import TweetInFeed from "../components/TweetInFeed";
import { useMoralis } from "react-moralis";


import pfp1 from "../images/pfp1.png"
import pfp2 from "../images/pfp2.png"
import pfp3 from "../images/pfp3.png" 







const DaoProfile = () => {
  
  const {isAuthenticated, Moralis} = useMoralis();
  const user = Moralis.User.current();



  var storeIt = user.attributes.pfp; 
  console.log("check(profile):", storeIt);

  if(storeIt){

    if(storeIt.includes(".mp4")){

    console.log("MP4 FOUND:", storeIt);

    var isVideo = 1; 
    } else {
      var isVideo = 0;
    }

  } else {

     var isVideo = 0;

  }

  



  return (
    <>
      
    <div className="pageIdentify">Profile</div>
    
    <img className="profileBanner" src={user.attributes.banner ? user.attributes.banner : defaultImgs[1]} ></img>
      
      <div className="pfpContainer">


      <div>

        { isVideo  ? 


          <video className="profilePFP" autoPlay loop>
          <source src={user.attributes.pfp} type="video/mp4" />
          </video>
          
          
          
          : 
          
           <img className="profilePFP" src={user.attributes.pfp ? user.attributes.pfp : defaultImgs[0]}></img>

        }
      
  
      
      </div>


        
    
       
  
     
  
        <div className="profileName"> {user.attributes.username}  </div>
  
        <div className="profileWallet"> {`${user.attributes.ethAddress.slice(0, 6)}...${user.attributes.ethAddress.slice(38)}`} </div>

         <div className="profileBio"> {user.attributes.bio} </div>
        
      </div>

      <LinkRD to ="/dao/settings"  style={{ 'textDecoration': 'none'  }}>
        <div className="profileEdit"> Edit Profile</div>
      </LinkRD>
      
      
    </>
  );
};

export default DaoProfile;


/*

 <div className="pageIdentify">Profile</div>
      
      <img className="profileBanner" src={user.attributes.banner ? user.attributes.banner : defaultImgs[1]}></img>
      
      <div className="pfpContainer">
        <img className="profilePFP" src={user.attributes.pfp ? user.attributes.pfp : defaultImgs[0]}></img>
        
        <div className="profileName"> {user.attributes.username.slice(0, 6)} </div>
        <div className="profileWallet">{`${user.attributes.ethAddress.slice(0, 4)}...
              ${user.attributes.ethAddress.slice(38)}`}</div>
        <Link to="/settings">
            <div className="profileEdit">Edit profile</div>
        </Link>
        <div className="profileBio">
        {user.attributes.bio}
        </div>
        <div className="profileTabs">
            <div className="profileTab">
            Your Tweets
            </div>
        </div>


        
    </div>
      
    <TweetInFeed profile={true}></TweetInFeed>



*/