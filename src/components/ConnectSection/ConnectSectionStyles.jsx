/*CSS*/


import styled from 'styled-components';
import { keyframes } from 'styled-components'


//THIS IS LEFT TRAITS CONTAINER
export const ConnectBtnBGContainer = styled.div`


  
  display: flex;
  position: relative;
  z-index: 12; /*hero section is 10 */

  


  

  transform: skewY(2deg);
  
  margin-top: -7%;
  
  width: 100%;
  height: 110vh;
  
  border: 15px solid magenta;
  padding: 50px;

  font-size: 2em;
  color: white;

  background-color: yellow;

  &:hover{
  }

    /* turns off display if its over 1000 */
   @media screen and (max-width: 600px) {
      padding: 10px;
  } 

`


export const Footer = styled.div`

  /* ONLY SHOWS ON MOBILE*/
   /* From https://css.glass */
  background: rgba(39, 63, 245, 0.8);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.2px);
  -webkit-backdrop-filter: blur(5.2px);

    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
    
    display: inherit; 
    width: 100%;
  
    /* text */
    text-align: center;
    font-size: 18px;
    color: cyan;
    
    
    height: 36px;
    padding-top: 10px;
   
    
    text-align: center;
    margin: auto;

  @media screen and (max-width: 1116px) {
  
  } 
  
`


export const Container = styled.div`


  background-color: green;


  display: in-line-bl


`


const gradientAnimation = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`


export const BtnContainer = styled.nav`

  margin-bottom: 3%;
  
/*   max-width: 500px;
  max-height: 50px; */

/*    margin: auto; */
  
   width: 100%;
  
/*    border: 15px solid green; */
  
  
  text-align: center;

  font-family: 'VT323', monospace;

  display: flex;
  align-items: center;
  justify-content: center;



  @media screen and (max-width: 400px) {

      transform: scale(.8);
    
  }

  
`


export const BtnConnectWallet = styled.div`
  

  width: 40%;

  max-height: 50px;

  align-self: center;
  

/*   font-family: 'VT323', monospace; */

  font-family: 'Inter', sans-serif;

/*   border-radius: 50px; */


  border-radius: 25px 25px;

  background: linear-gradient(-45deg, #8436d1, #6722ab ,#715bb0, #c852f2);
  
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  
  font-size: 19px;
  font-weight: bold;
  outline: none;

  text-align: center;

  color: whitesmoke;
  
/*   border-style: solid;
  border-width: .5px; */
/*   border-color: black; */

  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;

  cursor: pointer;
  text-shadow: 1px 1px purple;




  /*animations here*/

/*   transition: all 0.3s ease-in-out; */
  text-decoration: none;


  &:hover{

    background: linear-gradient(-45deg, , #b746e0, #23a6d5, #23d5ab);
    /*background-size: 400% 400%;*/

    animation: ${gradientAnimation} 7s ease;

    transform: scale(1.07);

    /*background: -webkit-linear-gradient(-60deg, #e9fa01,orange,gold,#c3d101,orange);
    background-size: 200% 200%;*/

    /*animations here*/

    transition: all 0.25s ease-in-out;
    
  }

  /* button press */
  &:active{

    transform: scale(.8);

    
    
  }


  @media screen and (max-width: 500px) {
    
    font-size: 1rem;
    width: 55%;

  }


  


  

`
export const BtnMint = styled.div`

  width: 40%;

  max-height: 50px;

  align-self: center;
  

/*   font-family: 'VT323', monospace; */

  font-family: 'Inter', sans-serif;

/*   border-radius: 50px; */

  background: #0099ff;
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  
  font-size: 19px;
  font-weight: bold;
  outline: none;

  text-align: center;
  


/*   border-style: solid;
  border-width: .5px;
  border-color: black; */

  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;

  cursor: pointer;

  background: linear-gradient(-45deg, #8436d1, #6722ab ,#715bb0, #c852f2);
  background-size: 200% 200%;

  /*animations here*/

/*   transition: all 0.3s ease-in-out; */
  text-decoration: none;


  &:hover{

    background: linear-gradient(-45deg, #8436d1, #6722ab ,#715bb0, #c852f2);

    /*background-size: 400% 400%;*/

    animation: ${gradientAnimation} 7s ease;

    transform: scale(1.07);

    /*background: -webkit-linear-gradient(-60deg, #e9fa01,orange,gold,#c3d101,orange);
    background-size: 200% 200%;*/

    /*animations here*/

    transition: all 0.25s ease-in-out;
    
  }

  /* button press */
  &:active{

    transform: scale(.8);

    
    
  }


  @media screen and (max-width: 400px) {
    
    font-size: 15px;
    
    

  }


  
  @media screen and (max-width: 400px) {

    font-size: 1rem;
    width: 55%;
    
  }

  

`



export const BtnDisconnect = styled.div`

 max-width: 80px;
 max-height: 50px;
 
  align-self: center;
  

/*   font-family: 'VT323', monospace; */

  font-family: 'Inter', sans-serif;

/*   border-radius: 50px; */

  background: #0099ff;
  white-space: nowrap;
  padding: 9px 15px;
  color: white;
  
  font-size: 19px;
  font-weight: bold;
  outline: none;

  text-align: center;
  
/*   border-style: solid;
  border-width: .5px;
  border-color: black; */

  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;

  cursor: pointer;

  background: linear-gradient(-45deg, #8436d1, #6722ab ,#715bb0, #c852f2);
  background-size: 200% 200%;

  /*animations here*/

/*   transition: all 0.3s ease-in-out; */
  text-decoration: none;


  &:hover{

    background: linear-gradient(-45deg, #8436d1, #6722ab ,#715bb0, #c852f2);
    /*background-size: 400% 400%;*/

    animation: ${gradientAnimation} 7s ease;

    transform: scale(1.07);

    /*background: -webkit-linear-gradient(-60deg, #e9fa01,orange,gold,#c3d101,orange);
    background-size: 200% 200%;*/

    /*animations here*/

    transition: all 0.25s ease-in-out;
    
  }

  /* button press */
  &:active{
    transform: scale(.8);    
  }


  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }


`


export const ImageNFT1 = styled.img`


  max-width: 700px;

  background: rgba(50, 50, 50, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);


  
    
  

  




  position: relative; 
  width: 50%;
  height: 50vh;

  
/*   left: 1800px; */
/*   top: 15px; */

    border-top-left-radius: 20%;
    border-bottom-right-radius: 20%;
/*   
  border-radius: 20px; */
  
  background-size: cover;
  object-fit: contain;

  align-self:center;



  
  @media screen and (max-width: 1000px) {

    width: 70%;

    height: 70%;
    
  }

  
  @media screen and (max-width: 400px) {
    
    margin: 5%;

  }
  
  
`



export const ExternalLink = styled.a`
  
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;

  
`;



export const ContainerInfo = styled.div`
  
  padding-top: 2%;
  width: 100vw;
  /*   border: 15px solid green; */
  
`;


export const InfoText = styled.button`

  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: .5px solid rgba(255, 255, 255, 0.3);
    
  padding: 25px;

  //nneded for button
  width: 95%;

  font-size: 1rem;


   word-wrap: break-word;
  
  color: red;

   &:active{
    transform: scale(.9);  
    transition: all 0.25s ease-in-out;
     
  }
  
  
`;


export const InfoTextGForm = styled.button`

/*   padding-bottom: 10%;
 */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: .5px solid rgba(255, 255, 255, 0.3);
    
  padding: 25px;


  width: 95%;

  font-size: 1rem;


   word-wrap: break-word;
  
  color: Green;


   &:active{
    transform: scale(.9);    
    transition: all 0.25s ease-in-out;
  }
  
  
`;


export const InfoTextGetEth = styled.button`



/*   padding-bottom: 10%;
 */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: .5px solid rgba(255, 255, 255, 0.3);
    
  padding: 25px;


  width: 95%;

  font-size: 1rem;


   word-wrap: break-word;
  
  color: Purple;


   &:active{
    transform: scale(.9);    
    transition: all 0.25s ease-in-out;
  }
  
  
`;




export const TextVT323 = styled.div`

  font-family: 'VT323', monospace;
  
`;

export const newFont = styled.div`

  font-family: 'VT323', monospace;
  
`;



export const ContainerSocials = styled.div`
  
  padding-top: 10%;
  width: 100vw;
/*   border: 15px dashed yellow; */
  
`;



export const SocialWrapper = styled.div`


  
/*     border: 15px dashed green; */

    display: flex;
  
`;



export const SocialIcon = styled.div`

    -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
  


    width: 100%;
  
/*     border: 15px dashed blue; */

   &:active{
    transform: scale(.9);    
    transition: all 0.25s ease-in-out;
  }

   &:hover{
    transform: scale(1.1);    
    transition: all 0.25s ease-in-out;
  }

  
  
`;







