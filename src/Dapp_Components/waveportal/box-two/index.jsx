import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { ToastContainer, toast } from 'react-toastify';

/* import 'react-toastify/dist/ReactToastify.css'; */

//abi smart contract file
import abi from "../utils/WavePortal.json";


  /*
  Add chain if chains do not exist
  */

  const networks={

    cronosTestnet: {
      chainId: `0x${Number(338).toString(16)}`,
      chainName: "Cronos Testnet",
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


import {

  BoxTwo_WavePortal_Container,

  BoxTwo_Rectangle_1,

  BoxTwo_Refresh_button,
  BoxTwo_Refresh_text,

  BoxTwo_CRO_button,
  
  BoxTwo_GetTCro_button,
  BoxTwo_GetTCro_text,

  BoxTwo_Matic_button,
  
  
  BoxTwo_Transactions_Bar,
  BoxTwo_Transactions_BarButton,
  BoxTwo_Transactions_BarButtonText,

  BoxTwo_RectangleArrayWrapper,
  BoxTwo_NoWalletMsg,
  BoxTwo_Transactions_Bar_Text,

  BoxTwo_PostContainer,
  
  BoxTwo_SenderTextBox,
  BoxTwo_SenderText,
  BoxTwo_SenderAddress,

  BoxTwo_DateContainer,
  BoxTwo_DateContainerText,

  BoxTwo_PostBoxMsg,

  BoxTwo_Pfp_Pic
 
} from './style-box-two' 


/*css ToDoList -for gradients*/
// import './ToDoList.css';  


//rename this box two

const WavePortalUI01_BoxTwo = () => {

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


  //wave --------------------------------------------------

  /*
  * All state property to store all waves
  */
  const [allWaves, setAllWaves] = useState([]);

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
        console.log("Found an authorized account(box-two):", account);
        setCurrentAccount(account)

        getAllWaves();
        
        
        
      } else {
        console.log("No authorized account found")
      }
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
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);

      //struct waves here   -ONLY WORKING FOLDER.
      console.log("--- Connecting Wallet ----");
      getAllWaves();
      
    } catch (error) {
      console.log(error)
    }
  }

  
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

        console.log("--- getAllWaves (box-two) ---");
        

        /*
         * Call the getAllWaves method from your Smart Contract
         */
        const waves = await wavePortalContract.getAllWaves();


        notifyTransactionLogRefreshed();


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
        console.log("~Retrieved total transaction count(box two)...", count.toNumber());

        
        // it changes the original array.
        // console.log('Default Order:', wavesCleaned);
        
        wavesCleaned.reverse();

        console.log('Reversed Order:', wavesCleaned);
    
        /* UPDATED - use to be wavesCleaned*/
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

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        /* using abi smart contract here */
        const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);

        let count = await wavePortalContract.getTotalWaves();
        console.log("~Retrieved total wave count (box two)...", count.toNumber());


        /*grab data*/
        let TheMessage = document.querySelector('#TheMessage').value ; 
        console.log("------The message made is:", TheMessage);     

        
        /*
        * Execute the actual wave from your smart contract


        */
        const waveTxn = await wavePortalContract.wave(TheMessage);
        console.log("Mining... (New Transaction)", waveTxn.hash);

        //clear queary selector
        document.querySelector('#TheMessage').value = "";

        await waveTxn.wait();
        console.log("Mined -- ", waveTxn.hash);


        count = await wavePortalContract.getTotalWaves();
        console.log("~Retrieved total array count...", count.toNumber());


        getAllWaves();


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

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        /* using abi smart contract here */
        const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);

        let count = await wavePortalContract.getTotalWaves();
        console.log("Retrieved total wave count...", count.toNumber());

        count = await wavePortalContract.getTotalWaves();
        console.log("Retrieved total wave count...", count.toNumber());

        //you can use getElementBy Id to change messages! 

        // let text1 = "";
        // let text2 = account; 
        // let result = text1.concat(text2, "/owned");

        document.getElementById("totalcl9").innerHTML = count;

        /*function here*/
        // getAllWaves();
        

        
      } else {
        console.log("Ethereum object doesn't exist!");

      }
    } catch (error) {
      console.log(error);
    }
  }

  
  /* swithces button */
  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])


  const goToFaucetEth = () => {
    window.open("https://faucets.chain.link/rinkeby");
  };

  const goToFaucetCro = () => {
    window.open("https://cronos.org/faucet");
  };


  const notifyTransactionLogRefreshed = () => toast("Transactions Refreshed!");

  return (
    
    <BoxTwo_WavePortal_Container>

      <BoxTwo_Rectangle_1>

        <BoxTwo_CRO_button onClick={() => handleNetworkSwitch("cronosTestnet")}/> 

        <BoxTwo_GetTCro_button onClick={goToFaucetCro}>
          <BoxTwo_GetTCro_text>
            Get TCRO
          </BoxTwo_GetTCro_text>
        </BoxTwo_GetTCro_button>

        <BoxTwo_Matic_button onClick={() => handleNetworkSwitch("polygon")}/> 

        <BoxTwo_Refresh_button onClick={getAllWaves}>
          <BoxTwo_Refresh_text>
            Refresh
          </BoxTwo_Refresh_text>
        </BoxTwo_Refresh_button>

        

        <BoxTwo_Transactions_Bar/>
          
        <BoxTwo_Transactions_Bar_Text>
          Transactions:
        </BoxTwo_Transactions_Bar_Text>

        <BoxTwo_Transactions_BarButton onClick={goToFaucetEth}>
          
          <BoxTwo_Transactions_BarButtonText>
            Get ETH
          </BoxTwo_Transactions_BarButtonText>
          
        </BoxTwo_Transactions_BarButton>
    
        
    <BoxTwo_RectangleArrayWrapper>

        <BoxTwo_NoWalletMsg>
        Please connect wallet to see post. 
        <h4>Deployed on Rinkeby Testnet.</h4>
        </BoxTwo_NoWalletMsg>

        {allWaves.map((wave, index) => {
          return (
            <BoxTwo_PostContainer key={index}>

              <BoxTwo_SenderTextBox>
              <BoxTwo_SenderText>
              Sender:
              </BoxTwo_SenderText>
              </BoxTwo_SenderTextBox>

              <BoxTwo_DateContainer/>
              <BoxTwo_DateContainerText>
              {wave.timestamp.toString()}
              </BoxTwo_DateContainerText>
              
            
              <BoxTwo_SenderAddress>{wave.address}</BoxTwo_SenderAddress>

              <BoxTwo_PostBoxMsg>
              {wave.message}
              </BoxTwo_PostBoxMsg>

            <BoxTwo_Pfp_Pic/>
              
            </BoxTwo_PostContainer>
          )
        })}

        
        </BoxTwo_RectangleArrayWrapper>
      
      </BoxTwo_Rectangle_1>
      
    </BoxTwo_WavePortal_Container>


  )

}


export default WavePortalUI01_BoxTwo

