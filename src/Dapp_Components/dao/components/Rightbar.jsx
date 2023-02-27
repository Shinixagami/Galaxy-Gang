import React from "react";
import './Rightbar.css';


import doc from "../images/doc.png";

import { RightbarSearch } from "./RightbarElements.jsx"

import { Input } from 'web3uikit';

/*


   {
      img: spaceshooter,
      text: "Learn how to build a Web3 FPS game using unity...",
      link: "https://moralis.io/moralis-projects-learn-to-build-a-web3-space-fps-game/",
    },
    {
      img: netflix,
      text: "The fisrt Moralis Project! Let's Netflix and chill...",
      link: "https://moralis.io/moralis-projects-learn-to-build-a-web3-netflix-clone/",
    },
    {
      img: academy,
      text: "Master DeFi in 2022. Start  at the Moralis Academy...",
      link: "https://academy.moralis.io/courses/defi-101",
    },
    {
      img: js,
      text: "Become a Web3 Developer with just simple JS...",
      link: "https://academy.moralis.io/all-courses",
    },
    {
      img: youtube,
      text: "Best youtube channel to learn about Web3...",
      link: "https://www.youtube.com/channel/UCgWS9Q3P5AxCWyQLT2kQhBw",
    },


*/





const Rightbar = () => {
  
  const trends = [
    {
      img: doc,
      text: "Roadmap",
      link: "https://docs.google.com/document/d/1194zj4cSzxvEqXScw151mfKIEc6wIvpoeF7HqGwjdYI/edit?usp=sharing",
      id: "Rb0x1"
    },
    {
      img: doc,
      text: "Moralis Web 3 API",
      link: "https://docs.moralis.io/moralis-dapp/web3-api",
      id: "Rb0x2"
    },
    {
      img: doc,
      text: "Web3UI Interactive Docs ",
      link: "https://web3ui.github.io/web3uikit/?path=/docs/1-web3-nft-balance--default",
      id: "Rb0x3"
    },
     {
      img: doc,
      text: "Web3UI Quickstart ",
      link: "https://github.com/web3ui/web3uikit",
      id: "Rb0x4"
    },

    
    {
      img: doc,
      text: "Ethereum Remix",
      link: "https://remix.ethereum.org",
      id: "Rb0x5"
    },
    {
      img: doc,
      text: "NFT Mint Information",
      link: "https://docs.google.com/document/d/1hSut4XLVtP25w3OS9ABHXJqSja5SukzJgZTb5d7MYBg/edit",
      id: "Rb0x6"
    },

     {
      img: doc,
      text: "Replit Link",
      link: "https://replit.com/@Shinixagami/DAOSocial#src/Dapp_Components/dao/components/Rightbar.jsx",
      id: "Rb0x7"
    }

  
    
  ];
  

  return (
    <>

     <div className="rightbarContent">
       
       <Input

         autoComplete

          placeholder= "Search"
         
          labelBgColor="transparent"
          
          name="Test text Input"

          prefixIcon="search"


         style={{
           'backgroundColor': 'whitesmoke',
           'alignSelf': 'center',
           'margin' : 'auto',
           'borderColor' : 'black',
           'border' : 'none',

           
        }}

          
        />


       

       

        <div className="trends"   >

          Trending

          {trends.map((e) =>{

            return(

              <div key={e.id}>
                
                <div className="trend"  onClick={() => window.open(e.link)}>

                  <img src = {e.img}    className ="trendImg"  />

                  <div className ="trendText"     > {e.text} </div>
                  
                </div>
              
              
              </div>

            )

      
          })}
        
        
        
        </div>


       
             
     
     </div>
      
    </>
  );
};

export default Rightbar;