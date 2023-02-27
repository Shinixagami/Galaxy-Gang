 
//componenet
import {

  ConnectBtnBGContainer,
  NavSpacer,
  
 

  BtnContainer,
  BtnConnectWallet,
  BtnDisconnect,
  BtnMint,

  Footer,

  Container

} from './ConnectSectionStyles' 






const ConnectSection = () => {


  /*Logic for connect button*/ 
  const connectWallet = async () => {

    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Please use this app along side a wallet.\n");

        if (window.confirm('Would you like to download MetaMask? If you click "OK" you will be redirected.')) {
        window.open("https://metamask.app.link/dapp/www.dvcblockchain.com/", '_blank');

        };
        
        return;
      }

      /*
      * Fancy method to request access to account.
      */
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      /*
      * Boom! This should print out public address once we authorize Metamask.
      */
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);


      //change elemen
      document.getElementById("changeText").innerHTML = accounts[0];


      
      toast("Wallet Connected!");
      
      let printUser = "User: "  + accounts[0];

      setTimeout(function(){ toast(printUser); }, 2100);

      
        /*if the user is not on the right chang*/
                let chainId = await ethereum.request({ method: 'eth_chainId' });
                console.log("Connected to chain " + chainId);
            
                // String, hex code of the chainId of the Rinkebey test network
                //declared as variable VGF
                var goerliChainId = "0x5";  //this is the chain ID
            
                if (chainId !== goerliChainId) {
            
            
                    toast("Switching Networks");
               
                    //switch networks
                    await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ 
                    chainId: '0x5'  //0x5 is goerli
                      }], // chainId must be in hexadecimal numbers
                    });
                }

    } catch (error) {
      console.log(error)
    }
  }//end of Connect Wallet Function


  const disconnectWallet = () => {
   
      toast("Disconnecting...");
      window.location.reload(false);
      Moralis.User.logOut();
      
  };
  
  return(

    <>

      <ConnectBtnBGContainer>

       <BtnConnectWallet  onClick={connectWallet}>
          Connect Wallet
       </BtnConnectWallet>

         <BtnConnectWallet  onClick={connectWallet}>
          Pause Smart Contract
       </BtnConnectWallet>

        <BtnConnectWallet  onClick={connectWallet}>
          Add Whitelist 
       </BtnConnectWallet>

       <BtnConnectWallet  onClick={connectWallet}>
          Mint Whitlist  
       </BtnConnectWallet>

      <BtnConnectWallet  onClick={connectWallet}>
         Mint Public 
       </BtnConnectWallet>
        
      <BtnConnectWallet  onClick={connectWallet}>
        Resume Smart Contract
       </BtnConnectWallet>


       <BtnConnectWallet  onClick={connectWallet}>
        Token Uri Reveal 
       </BtnConnectWallet>
      
      </ConnectBtnBGContainer>
      
    </>

  );

}

export default ConnectSection