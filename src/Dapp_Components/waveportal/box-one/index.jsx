import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { ToastContainer, toast } from 'react-toastify';
/* import 'react-toastify/dist/ReactToastify.css'; */


/* not used */
import { motion } from 'framer-motion';

  /*
  Add chain if chains do not exist
  */

  const networks={

    cronosTestnet: {
      chainId: `0x${Number(338).toString(16)}`,
      chainName: "Cronos Mainnet",
      nativeCurrency: {
        name: "Cronos Testnet",
        symbol: "TCRO",
        decimals: 18
      },
      rpcUrls: ["https://evm-t3.cronos.org/"],
      blockExplorerUrls: ["https://testnet.cronoscan.com/"]
    },

    cronos: {
    chainId: `0x${Number(25).toString(16)}`,
    chainName: "Cronos Mainnet",
      nativeCurrency: {
        name: "Cronos",
        symbol: "CRO",
        decimals: 18
      },
      rpcUrls: ["https://evm.cronos.org/"],
      blockExplorerUrls: ["https://cronoscan.com/"]
    },

    polygon: {
      chainId: `0x${Number(137).toString(16)}`,
      chainName: "Polygon Mainnet",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18
      },
      rpcUrls: ["https://polygon-rpc.com/"],
      blockExplorerUrls: ["https://polygonscan.com/"]
    },
        
  };

   //add network function
  const addSmartChain = async ({ networkName, setError }) => {
    try {
      if (!window.ethereum) throw new Error("No crypto wallet found");
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            ...networks[networkName]
          }
        ]
      });
    } catch (err) {
      setError(err.message);
    }
  };

  const { ethereum } = window;

  if (!ethereum)
  {
    toast(" 🚫 There was no wallet detected. 🚫");
  }







import {

  BoxOne_WavePortal_Container,

  BoxOne_Rectangle_1,
  BoxOne_Rectangle_2_Counts,
  BoxOne_Counts_TextNum,
  BoxOne_CountsInner,
  BoxOne_Counts_Text,

  BoxOne_Connect_Button,
  BoxOne_Connect_Button_Text,
  BoxOne_Connect_Button_Text2,
  BoxOne_Connect_Button_Divider,

  BoxOne_Rectangle_3_Profile_Background,
  BoxOne_Pfp_Pic,
  BoxOne_Pfp_Divider,
  BoxOne_Emoji,
  BoxOne_HeroText,
  BoxOne_IntroText,
  BoxOne_IntroTextBox,

  BoxOne_TextBox1,
  BoxOne_TextBox2,

  BoxOne_Text_Divider,

  BoxOne_Input_Box,
  
  BoxOne_MakeAPost,
  BoxOne_MakeAPostText
 
} from './style-box-one' 


//abi smart contract file
import abi from "../utils/WavePortal.json";

//rename this box one
const WavePortalUI01_BoxOne = () => {

  
  //this is the wave portal address
  const contractAddress = "0xc37eC9798729371C7DDFF867fCC6672AEf8E1bA1";

  const contractABI = abi.abi;

  //for smart chain switching
  const [error, setError] = useState();

  const handleNetworkSwitch = async (networkName) => {
    setError();
    await addSmartChain({ networkName, setError });
  };
  // onClick={() => handleNetworkSwitch("cronos")}

  const switchNetworkTo = async (networkName) => {
    setError();
    await addSmartChain({ networkName, setError });
  };
  // switchNetworkTo("cronos");    
  
  /*
  * Just a state variable we use to store our user's public wallet.
  */
  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      //imediately creates the post
      // getAllWaves(); //does not work 

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
        
      }

      /*
      * Check if we're authorized to access the user's wallet
      */
      const accounts = await ethereum.request({ method: "eth_accounts" });


      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account(box-one):", account);

        notifyWalletConnected();
        
        setCurrentAccount(account)

        getAllWaves();
        
      } else {
        console.log("No authorized account found")
      }


      /*
      check if Chain is correct (switch chain)
      */
        let chainId = await ethereum.request({ method: 'eth_chainId' });
        console.log("Connected to chain " + chainId + " (box one)");
    
        // String, hex code of the chainId of the Rinkebey test network
        //declared as variable VGF
         var rinkebyChainId = "0x4";  //this is the chain ID
        var cronoTestnetChainId = "0x338";  //this is the chain ID
    
        if (chainId !== rinkebyChainId) {
          
            //switch networks
            await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ 
            chainId: '0x4'  //0x4 is Rinkeby
              }], // chainId must be in hexadecimal numbers
            });
        }

      
        // if (chainId !== cronoTestnetChainId) {
        //   switchNetworkTo("cronosTestnet");
        // }

      
    } catch (error) {
      console.log(error);
    }
  }

  /**
  * Implement your connectWallet method here
  */
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

       if (!ethereum) {

        toast(" 🚫 you cant really use this DApp without a wallet 🚫");
         
        alert("Please use this app along side a wallet.\n\nMetaMask is the best wallet out there -gabe");

        if (window.confirm('Would you like to download MetaMask? If you click "OK" you will be redirected.')) {

        window.open("https://metamask.app.link/dapp/DApp.Shinixagami.net/", '_blank');

        };
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);

      //struct waves here   -ONLY WORKING FOLDER.
      getAllWaves();
      
    } catch (error) {
      console.log(error)
    }
  }



  //wave --------------------------------------------------

  /*
  * All state property to store all waves
  */
  const [allWaves, setAllWaves] = useState([]);

  /*
  * Create a method that gets all waves from your contract
  */
  const getAllWaves = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);

        /*
         * Call the getAllWaves method from your Smart Contract
         */
        const waves = await wavePortalContract.getAllWaves();


        /*
        * We only need address, timestamp, and message in our UI so let's
        * pick those out
        */
        let wavesCleaned = [];
        
        waves.forEach(wave => {
          wavesCleaned.push({
            address: wave.waver,
            timestamp: new Date(wave.timestamp * 1000),
            message: wave.message
          });
        });

       


        let count = await wavePortalContract.getTotalWaves();
        console.log("Retrieved total transaction count...", count.toNumber());

        /* prints transactions */
        // for(var i=0; waves[i] < count ; i++){
        //   console.log("~~~~~~~~~~~~");
        //   console.log("Testing:", waves[i]);
        //   console.log("Array :", i+1);
          
        // }
         

        /*
         * Store our data in React State
         */
        setAllWaves(wavesCleaned);


        
      } else {
        console.log("Ethereum object doesn't exist!")
      }
    } catch (error) {
      console.log(error);
    }
  }
  


  //function
  /*wave function - retrieves total number of waves*/
const wave = async () => {
    try {
      const { ethereum } = window;

      //checking input box 
      let inputBox = document.querySelector('#TheMessage').value;

    
      
      if (!ethereum){
        notifyNoWallet();
      }

      //if there is a wallet connected but no msg
      if(ethereum){

        if (!inputBox){
        notifyNoMsg();
        }
        
      }

      if (ethereum && inputBox) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        /* using abi smart contract here */
        const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);

        let count = await wavePortalContract.getTotalWaves();
        console.log("Retrieved total transaction count...", count.toNumber());


        /*grab data*/
        let TheMessage = document.querySelector('#TheMessage').value ; 
        console.log("------The message made is:", TheMessage);     

        
        /*
        * Execute the actual wave from your smart contract
        */


        const waveTxn = await wavePortalContract.wave(TheMessage);
        console.log("Mining... (New Transaction)", waveTxn.hash);

        notifyMinting();

        //clear queary selector
        document.querySelector('#TheMessage').value = "";

        await waveTxn.wait();
        console.log("Mined -- ", waveTxn.hash);

        count = await wavePortalContract.getTotalWaves();
        console.log("Retrieved total array count...", count.toNumber());


        //you can use getElementBy Id to change messages! 
        // document.getElementById("greeting").innerHTML = count;
      
        

        
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  }



 


  //This smart function was created by Gabe
  const checkTotalWaves = async () => {
    try {
      const { ethereum } = window;


      if (!ethereum){
        notifyNoCount();
      }

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        

        /* using abi smart contract here */
        const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);

        
        console.log("-------Counting function triggered-------");

        let count = await wavePortalContract.getTotalWaves();
        console.log("~Retrieved total transaction count : ", count.toNumber());

        notifyUpdatedCount();

        // count = await wavePortalContract.getTotalWaves();
        // console.log("~Retrieved total wave count : ", count.toNumber());

        //you can use getElementBy Id to change messages! 

        // let text1 = "";
        // let text2 = account; 
        // let result = text1.concat(text2, "/owned");

        document.getElementById("totalcl9").innerHTML = count;
        
  
        /*function here shows all waves */
        getAllWaves();
        

        
      } else {
        console.log("Ethereum object doesn't exist!");

      }
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])


  const goodBye = () => {
    
    alert("Thank you for everything! Till we meet again! :)");

     if (window.confirm('Would you like to join the discord?! If you click "OK" you will be redirected.')) {
      window.open("https://discord.gg/z8zcZshyPC", '_blank');
    }

  };
  
  
  const gotoInsta = () => {
    window.open("https://www.instagram.com/shinixagami");
  };


  const notifyWalletConnected = () => toast("Authorized Wallet Found!");


  const notifyNoWallet = () => toast("Please Connect a Wallet!");

  const notifyMinting = () => toast("Minting Transaction please wait...");

  const notifyNoCount = () => toast("Please Connect Wallet to see Post Count!");

  const notifyUpdatedCount = () => toast("Post Counter Updated!");

  const notifyTransactionLogRefreshed = () => toast("Transactions Refreshed!");

  const notifyNoMsg = () => toast("You Silly Goose! You dont have a message to post! Type an input.");

  return (

    <BoxOne_WavePortal_Container>

      <BoxOne_Rectangle_1>
        
      <BoxOne_Rectangle_2_Counts onClick={checkTotalWaves}>
          
          <BoxOne_CountsInner>
            <BoxOne_Counts_TextNum id="totalcl9">
              0
            </BoxOne_Counts_TextNum>
          </BoxOne_CountsInner>
            
          <BoxOne_Counts_Text>
            ⚡Count : 
          </BoxOne_Counts_Text>


        </BoxOne_Rectangle_2_Counts>


        <BoxOne_Connect_Button onClick={connectWallet}>
            <BoxOne_Connect_Button_Divider/>
            <BoxOne_Connect_Button_Text>     
              Connect Wallet
            </BoxOne_Connect_Button_Text>
  
            <BoxOne_Connect_Button_Text2>
            🦊
            </BoxOne_Connect_Button_Text2>
        </BoxOne_Connect_Button>
        
        

      
        <BoxOne_Rectangle_3_Profile_Background>
          
          <BoxOne_Pfp_Pic onClick={gotoInsta}/> 
          <BoxOne_Pfp_Divider/ >
 
          <BoxOne_Emoji onClick={goodBye}>
          👋
          </BoxOne_Emoji>
            
          <BoxOne_HeroText>
          Hey There!
          </BoxOne_HeroText>

          <BoxOne_IntroTextBox/>
          <BoxOne_IntroText>
          I am Gabe!
           
          </BoxOne_IntroText>
                  
        </BoxOne_Rectangle_3_Profile_Background>


        <BoxOne_TextBox1>
        I worked on building smart contact on the Ethereum blockchain network, so that's pretty cool, right? 
    
          
        </BoxOne_TextBox1>


        
    


        <BoxOne_TextBox2>
        Thank you for connecting your Ethereum Wallet, kindly comment and ⚡smash the Post Button!
        </BoxOne_TextBox2>

        <BoxOne_Text_Divider/>

      <BoxOne_Input_Box id="TheMessage" type="text" name="typedMSG" placeholder="Type an input." type="text" >
      </BoxOne_Input_Box>


      
        
      <BoxOne_MakeAPost onClick={wave}>
        <BoxOne_MakeAPostText>
          ✨Make a Post
        </BoxOne_MakeAPostText>
      </BoxOne_MakeAPost>




        
      </BoxOne_Rectangle_1>
      
    </BoxOne_WavePortal_Container>


  )

}


export default WavePortalUI01_BoxOne

