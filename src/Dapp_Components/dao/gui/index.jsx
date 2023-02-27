import React, { useEffect, useState } from "react";

import { ethers } from "ethers"; //ethers

/* CSS styles */
import './mint/LoadingStyles.css';
import './mint/MintStyles.css';

/* input style */
import { Input } from 'web3uikit';


/* gif */
import animation from './mint/animation.gif';


/* calls smart contract ABI*/
//MRKT.abi
import MRKT from './utils/SmartContract.json';

//this is the contract address
const CONTRACT_ADDRESS = "0x826Ff398B98bec73018c0BcBD6166915feE55C50"; 




import { useMoralis } from "react-moralis";

const GuiTesting = () => { 

  const {isAuthenticated, Moralis, account} = useMoralis();
  const user = Moralis.User.current();

  /* de-renders connect wallet button  DISABLED*/
  const renderNotConnectedContainer = () => (
    <button onClick={connectWallet} className="cta-button connect-wallet-button">
      Connect to Wallet
    </button>
  );
  

  //this is to call the contract
  const askContractToMintNft = async () => {

    //minting button 
    try {
      const { ethereum } = window;

        if (ethereum) 
        {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();

          //This is where an error might stem
          //What ever the contract name is.
          //put it there example: contractname = CronoVerse
          //CronoVerse.abi, signer ....

          const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, MRKT.abi, signer);

          console.log("Going to pop wallet now to pay gas...")
          let nftTxn = await connectedContract.makeAnEpicNFT();

          // console.log("Start of loading animation ~");

          // const grabElement = document.querySelector('#el'); //picks element

          // grabElement.classList.remove("hidden-class");  //shows loading symbol

          console.log("Mining...please wait.")
          await nftTxn.wait();

          // console.log("End of loading animation ~");

          // grabElement.classList.add("hidden-class");

          console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);

          //need a function to bring rarible account activity
          //like going to the your collection page for your address
          if (window.confirm('Success!\nWould you like to visit the rarible link for the NFT? If you click "OK" you will be redirected.', signer)) {


            //IMPORTED ---------------------------
            /*
            * Check if we're authorized to access the user's wallet
            */
            const accounts = await ethereum.request({ method: 'eth_accounts' });

              /*
              User can have multiple authorized accounts, we grab the first one if its there!
              */
              if (accounts.length !== 0) {
                
                //var is enable globally
                var account = accounts[0];
                console.log("Account grabbed:", account);

              } else {
                console.log("account error 0x1")
              }
            //--------------------------------
            let text1 = "https://rinkeby.rarible.com/user/";
            let text2 = account; //account is declared up above
            let result = text1.concat(text2, "/owned");

            console.log("Rarible Link:\n --", result)

            //NEW RNG function confirm
            window.open(result, '_blank');

          };    
          
        } else {
          console.log("Ethereum object doesn't exist!");
        }// end of if (ethereum) 

    } catch (error) {
      console.log(error)
    }

  }// end of Const askContractToMintNft - mint button




  return(

    <div>


      <div className="container">

        <div className="header-container">

          <p className="header gradient-text">Mint your own NFT</p>

          <p className="sub-text">
            Each unique. Each beautiful. Discover your NFT today.
          </p>

          <div>
            <img alt="all.gif" className="picture-svg" src={animation} />
          </div>

          

          <div id= 'el' className= "hidden-class">  

            <div className="sub-text-loading">
              Please wait your NFT is being minted.
            </div>

            <div className= "loadingicon">
          
                <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                </ul>

            </div>
          </div>
         </div>

        <div className="first-mint-btn-container"> 
          <button onClick={askContractToMintNft} className="cta-button connect-wallet-button">
           Mint Random NFT
        </button>
        
        </div>
        


        <div className="input-container"> 
           <Input
           placeholder= "NFT ID"
          labelBgColor="transparent"
          name="Test text Input"
         style={{
           'backgroundColor': 'whitesmoke',
           'alignSelf': 'center',
           'margin' : 'auto',
           'borderColor' : 'black',
           'border' : 'none',
          }} />
        </div>

          <div className="input-container"> 
           <Input
           placeholder= "Quantity"
          labelBgColor="transparent"
          name="Test text Input"
         style={{
           'backgroundColor': 'whitesmoke',
           'alignSelf': 'center',
           'margin' : 'auto',
           'borderColor' : 'black',
           'border' : 'none',
          }} />
        </div>

        <div className="second-mint-btn-container">
           <button onClick={askContractToMintNft} className="cta-button second-mint-button">
           Mint NFT
        </button>

        </div>
       
      


        
       </div>
      

     




      




      

    
    </div>

  )

}

export default GuiTesting;