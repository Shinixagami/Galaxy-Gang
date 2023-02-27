import React from "react";
import './TweetInFeed.css';

import { TextArea, Icon } from "web3uikit";

import { defaultImgs } from "../defaultimgs"
import golf from "../images/golf.png"


import pfp1 from "../images/pfp1.png"
import pfp2 from "../images/pfp2.png"
import pfp3 from "../images/pfp3.png"

import {

  Dao_RectangleArrayWrapper,
  TweetContainer,
  Dao_Pfp_Pic
  
} from './TweetInFeedElements'


// import canoe from ""


/* give this box a scroll */


const TweetInFeed = () => {
  

  return (

    <>

       <div className="feedTweet">
        <img src={defaultImgs[2]} className="profilePic"></img>

        <div className = "completeTweet">

          <div className="who"></div>
  
          <div className="accWhen">0x32..313 -1h </div>
  
            <div className="tweetContent">
              Sup
    
              <img src={pfp2} className="tweetImg"></img>



            </div>

            <div className="interactions">
              <div className="interactionNums">
                <Icon fill="white" size={25} svg="messageCircle" />
                
              </div>
              <div className="interactionNums">
                 <Icon fill="white" size={25} svg="star" />
                
              </div>

              <div className="interactionNums">
                 <Icon fill="white" size={24} svg="chainlink" />
                
              </div>

        
            </div>

        </div>


      </div>





      
       <div className="feedTweet">
        <img src={defaultImgs[2]} className="profilePic"></img>

        <div className = "completeTweet">

          <div className="who"></div>
  
          <div className="accWhen">0x32..313 -1h </div>
  
            <div className="tweetContent">
              Sup1
    
              <img src={pfp3} className="tweetImg"></img>



            </div>

            <div className="interactions">
              <div className="interactionNums">
                <Icon fill="white" size={25} svg="messageCircle" />
                
              </div>
              <div className="interactionNums">
                 <Icon fill="white" size={25} svg="star" />
                
              </div>

              <div className="interactionNums">
                 <Icon fill="white" size={24} svg="chainlink" />
                
              </div>

        
            </div>

        </div>
      </div>


        
       <div className="feedTweet">
        <img src={defaultImgs[2]} className="profilePic"></img>

        <div className = "completeTweet">

          <div className="who"></div>
  
          <div className="accWhen">0x32..313 -1h </div>
  
            <div className="tweetContent">
              Sup
    
              <img src={pfp1} className="tweetImg"></img>



            </div>

            <div className="interactions">
              <div className="interactionNums">
                <Icon fill="white" size={25} svg="messageCircle" />
                
              </div>
              <div className="interactionNums">
                 <Icon fill="white" size={25} svg="star" />
                
              </div>

              <div className="interactionNums">
                 <Icon fill="white" size={24} svg="chainlink" />
                
              </div>

        
            </div>

        </div>
      </div>

      




      

      




      



      

      

      
      

      



      
      
    </>
  );
};

export default TweetInFeed;
