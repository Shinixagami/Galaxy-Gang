import React from "react";
import "./Home.css";
import { defaultImgs } from "../defaultimgs";
import { TextArea, Icon } from "web3uikit";
import { useState, useRef } from "react";

import TweetInFeed from "../components/TweetInFeed";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";


const DaoHome = () => {

  /* function that grabs selcted files on devices*/
  const inputFile = useRef(null);
  const [selectedFile, setSelectedFile] = useState();

  /* gets input from click*/
  const onImageClick = () => {
    inputFile.current.click();
  };

  /* 
  what ever event happened in the input store it
  -create a link to img, img is target file
 */
  const changeHandler = (event) => {
    const img = event.target.files[0];
    setSelectedFile(URL.createObjectURL(img));
  };

  
  

  return (
    <>
      
    <div className="pageIdentify"> Home </div>
      
      <div className="mainContent">
    
        <div className="profileTweet">

          <img  
            src={defaultImgs[0]} 
            className="profilePic"
          /> 

          <div className="tweetBox"> 
            <TextArea
              autoComplete
              label = ""
              name = "tweetTxtArea"
            
              placeholder = "Good morningg!!"
              type = "text"
              width = "95%"
            /> 
            {selectedFile && (
              <img src={selectedFile} className="tweetImg"></img>
            )}

              
            <div className="imgOrTweet">
              <div className="imgDiv" onClick = {onImageClick}>

                <input 
                  type="file"
                  name="file"
                  ref={inputFile}
                  onChange={changeHandler}
                 
                  style={{display: "none"}}
                />
                
                
                <Icon 
                  fill="lime"
                  size="20"
                  svg="image"
                  >
                </Icon>
              </div>

              <div className="tweetOptions">
                
                <div className="tweet">  Post </div>
                
                <div className="tweet" style={{backgroundColor: "#8b79f2"}}> 
                  
                    <Icon 
                      fill="purple"
                      size="20"
                      svg="matic"
                      >
                    </Icon>
                  
                </div>

              </div>


                


    
            </div>
          </div>
        </div>



        <TweetInFeed profile={false}>
        
        
        </TweetInFeed>

        
        


      </div>

      
     
    </>
  );
};

export default DaoHome;