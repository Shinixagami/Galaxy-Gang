import React from "react";
import { Link } from "react-router-dom";
import "./Settings.css";
import { useState, useRef, useEffect } from "react";
import { Input } from "web3uikit";

import pfp1 from "../images/pfp1.png";
import pfp2 from "../images/pfp2.png";
import pfp3 from "../images/pfp3.png";
import pfp4 from "../images/pfp4.png";
import pfp5 from "../images/pfp5.png";
import pfp6 from "../images/pfp6.png";

import { ToastContainer, toast } from 'react-toastify';
/* import 'react-toastify/dist/ReactToastify.css'; */

import { defaultImgs } from "../defaultimgs";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

const DaoSettings = () => {

  /* usestate */
  /* start at empty array*/
  /* gets declared later */
  const [tempArray, setTempArray] = useState([]); 

  const [tempArrayMP4, setTempArrayMP4] = useState([]); 
  
  /* for referencing if a profile picture is picked */
  const [selectedPFP, setSelectedPFP] = useState();
  const inputFile = useRef(null);
  const [selectedFile, setSelectedFile] = useState(defaultImgs[1]);

  /* database use ref - uploading to ipsf*/
  const [theFile, setTheFile] = useState();
  const [username, setUsername] = useState();
  const [bio, setBio] = useState();

  
  const { Moralis, isAuthenticated, account } = useMoralis();
  const user = Moralis.User.current();

  // console.log("default Name:", user.attributes.username);

  if (user.attributes.bio == null){

    // console.log("default Bio NULL:", user.attributes.bio);

    var placeHoldeName = "Input your awesome Username!";
    var placeHoldeBio = "Create an amazing bio!";

    
  } else {

    var placeHoldeName = user.attributes.username;
    var placeHoldeBio = user.attributes.bio;
    
  }

 
  
/* 
  this gives back the data from the database
*/
  
  /*useEffect*/
  const Web3Api = useMoralisWeb3Api();

  /*ips link formatting*/
  const formatLink = (url) => {
    if (!url || !url.includes("ipsf://")) return url;
    return url.replace("ipsf://","https://gateway.ipfs.io/ipfs/");
  };


  
/* 
  grabs NFTs from user address 
*/
  useEffect(()=>{
    
    const fetchNFTs = async () => {

      /* options for getting NFTs*/
      const options = {
        /* remember this can be set to anything*/
        chain: "rinkeby",
        /*account is the account connected */
        address: account
      }

      const getTestNfts = await Web3Api.account.getNFTs(options);

      /*formatLink here to map through them*/
      const images = getTestNfts.result.map(
        
        (e) => formatLink(JSON.parse(e.metadata)?.image)

      );

    /* ARRAY GET SET HERE */
    setTempArray(images);
    }

    /* gets called on load */
    fetchNFTs();
    
  },[isAuthenticated, account])

  
  /* for changing banner */
  const onBannerClick = () => {
    inputFile.current.click();
  };

  /* for selecting the files for banner */
  const changeHandler = (event) => {
    
    const img = event.target.files[0];
    /* file is set*/
    setTheFile(img);

    /* remporary image to push*/
    setSelectedFile(URL.createObjectURL(img));
  };


  const saveEdits = async () => {

    if ( selectedPFP || bio || username || theFile) {
      
      toast("Saving Edits...");
    
      const User = Moralis.Object.extend("_User");
      const query = new Moralis.Query(User);
  
      /* my details a a object that stores */
      const myDetails = await query.first();

      if (selectedPFP){
        myDetails.set("pfp", selectedPFP)

      }
  
      if (bio){
        myDetails.set("bio", bio);       
      }

      
      if(username){
        myDetails.set("username", username);
      }
  
      /* this function uploads and calls the banner
      from ipsf*/
      if(theFile){
        const data = theFile;
        const file = new Moralis.File(data.name, data);
        
        /*ipsf function calling save */
        await file.saveIPFS();
        
        /*setting that banner for the user*/
        myDetails.set("banner", file.ipfs());
      }
  
      console.log("SAVING..");
      await myDetails.save();
      
      setTimeout(() => {
        // window.location.reload();
        window.open("https://app.shinixagami.net/dao/profile",'_self')
        
      }, "3000");
      
    } else {
      toast("You silly goose you have no changes!");
    };

    

  };

  return (
    <>
      <div className="pageIdentifyS">Settings</div>
      
      <div className="settingsPage">


        

        <div className="pfp">

          <div id="inputStylesText">
           User Name:
          </div>
        
        <Input 
          id="inputStyles"
          autoComplete
          name="NameChange"
          placeholder= {placeHoldeName}
          width="100%"
          labelBgColor="#5caeff"
          onChange={(e)=> setUsername(e.target.value)}
        
          labelBgColor="black"
        />
        </div>

        
        <div className="pfp">

          <div id="inputStylesText">
           Bio:
          </div>
          
        <Input
          id="inputStyles"
          
          autoComplete
          name="bioChange"
  
          placeholder= {placeHoldeBio}

          width="100%"
          onChange={(e)=> setBio(e.target.value)}
        />
          
         </div>
        

      
        <div className="pfp">
          
          Profile Image (Your NFTs)

          <div className="pfpOptions">
            
            {tempArray.map((e,i) => {

              if(e){

                if( tempArray[i].includes(".png" ) ){
                  
                  return(
                    <div key={i}>
                    
                      <img 
                      src={e} 
                      className={
                        selectedPFP === e ? "pfpOptionSelected" : "pfpOption"
                      }
                        
                      onClick={()=>{setSelectedPFP(tempArray[i]); }}
                      ></img>
                      
                    </div >
                  
                  )// end of return 
                  
                }; //end of PNG
                
              }// end of validation e

            })} 
            
          </div>
          
        </div>


        
        <div className="pfp">
        
        Animated NFTs
           
          <div className="pfpOptions">

            
            {tempArray.map((e,i) => {

              if(e){
                
                if( tempArray[i].includes(".mp4" )    ){

                    return(
                      <div key={i}>
                      
                      
                        <video autoPlay loop
                          className={selectedPFP === e ? "pfpOptionSelected" : "pfpOption"} 
                          onClick={()=>{setSelectedPFP(tempArray[i]); }}
                        >

                      
                          
                          <source src={e} type="video/mp4" />

                        </video>
                                                           
                      </div >
                      
                    ); //return      
                  
                } //if temp 
    
              } //if e

               

  
        


            //END OF DIV
            })}
            
          </div>

          
        </div>

        
        <div className="pfp">
          Profile Banner
          <div className="pfpOptions">
            <img
              src={selectedFile}
              onClick={onBannerClick}
              className="banner"
            ></img>
            
            <input
              type="file"
              name="file"
              ref={inputFile}
              onChange={changeHandler}
              style={{ display: "none" }}
            />
            
          </div>
        </div>
        
        <div className="save" onClick={() => saveEdits()}>
          Save
        </div>


        
      </div>
    </>
  );
};

export default DaoSettings;


/*

  
        <div className="pfp">
          Profile Image (Your NFTs)

          <div className="pfpOptions">
            
            {pfps.map((e,i) => {

              return(
                <>
                <img
                src={e}
                className={
                  selectedPFP === e ? "pfpOptionSelected" : "pfpOption"
                }
                onClick={() => {setSelectedPFP(pfps[i]);}}
                ></img>
                </>
              )
            })}
            
          </div>
          
        </div>

        
        <div className="pfp">
          Profile Banner
          <div className="pfpOptions">
            <img
              src={selectedFile}
              onClick={onBannerClick}
              className="banner"
            ></img>
            <input
              type="file"
              name="file"
              ref={inputFile}
              onChange={changeHandler}
              style={{ display: "none" }}
            />
          </div>
        </div>
        <div className="save" onClick={() => saveEdits()}>
          Save
        </div>








*/