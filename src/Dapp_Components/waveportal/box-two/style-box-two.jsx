import styled from 'styled-components';

//import key frames
import { keyframes } from 'styled-components'

import abot from '../../../images/Alphabots/Gold.png';




const fadeUpBox = keyframes`

  0% {
    opacity: 0;

  }
  20% {
    opacity: 0.5;

  }

  50% {
    opacity: 0.8;

  }

  90% {
    opacity: 0.9;

  }

  100% {
    opacity: 1;
  }
`






export const BoxTwo_WavePortal_Container = styled.div`



  /* animation fade */
  animation-name: ${fadeUpBox};
  animation-duration: 7s;
  animation-iteration-count: initial;
  



  /* error here */
  @media screen and (max-width: 768px) {

  }

  /* for smallest screens */
  @media screen and (max-width: 480px) {



  }


  /* Iphone 8 / 2020 SE here */
  @media screen and (max-width: 464px) {

  }

  /* Iphone SE or lower SMALL SCREENS*/
  @media screen and (max-width: 370px) {

    
  }


  /* fixing center LARGE SCREEN - temporary */


  /* @media screen and (min-width: 1600px) {

    transform: translate(-740px, -10px) scale(1.02);

    transition: 0.8s all ease;
    transition-property: opacity, left;


  } */



`

export const BoxTwo_Rectangle_1  = styled.div`

  position: relative;




  /* shadow */
  box-shadow: 0px 0px 17px 8px #6e8291;



  box-sizing: border-box;

  /* do not edit box */
  width: 544px;
  height: 765px; 

    /*whole box position */
  /* position: absolute;
  left: 742px;
  top: 161px; */
  
  background: #555555;
  border: 2px solid #8CAAC6;
  border-radius: 15px;


  @media screen and (max-width: 768px) {


  
  }


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



export const BoxTwo_Refresh_button = styled.button`


  cursor: pointer;

  border: none;

  position: absolute;

  width: 93px;
  height: 26px;

  left: 354px;
  top: 57px;

  background: linear-gradient(98.5deg, #597493 47.5%, #7770A3 60.48%, #746994 79.86%);
  border-radius: 50px;

  &:hover{
    
    transform: scale(1.07);
    transition: all 0.2s ease-in-out;
    
  }

  /* button press */
  &:active{

    transform: scale(.9);
    
  }

`

export const BoxTwo_Refresh_text = styled.p`

  position: absolute;
  width: 65px;
  height: 18px;

  left: 13px;
  top: 4px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;

  color: #B5C9FF;
  
`



//Cro Button
import cronos from './images/cronos.png'
export const BoxTwo_CRO_button = styled.button`

  cursor: pointer;

  border: none;

  position: absolute;
  width: 93px;
  height: 26px;

  left: 55px;
  top: 57px;

  background-size: cover;
  
  background-image: url(${cronos});

  background-position: center;
  
  border-radius: 50px;

  &:hover{
    
    transform: scale(1.07);
    transition: all 0.2s ease-in-out;
    
  }

  /* button press */
  &:active{

    transform: scale(.9);
    
  }

`

export const BoxTwo_GetTCro_button = styled.button`

  cursor: pointer;

  border: none;

  position: absolute;
  width: 93px;
  height: 26px;

  left: 154px;
  top: 57px;

  background: linear-gradient(98.5deg, #597493 47.5%, #7770A3 60.48%, #746994 79.86%);
  border-radius: 50px;

  &:hover{
    
    transform: scale(1.07);
    transition: all 0.2s ease-in-out;
    
  }

  /* button press */
  &:active{

    transform: scale(.9);
    
  }

`

export const BoxTwo_GetTCro_text = styled.p`

  white-space: nowrap;

  position: absolute;
  width: 73px;
  height: 18px;

  left: 10px;
  top: 4px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;

  color: #B5C9FF;
  
`


//Matic Button
import matic from './images/matic.png'
export const BoxTwo_Matic_button = styled.button`

  cursor: pointer;

  border: none;

  position: absolute;
  width: 93px;
  height: 26px;

  left: 254px;
  top: 57px;

  background-size: cover;
  background-image: url(${matic});
  background-position: center;
  
  border-radius: 50px;

  &:hover{
    
    transform: scale(1.07);
    transition: all 0.2s ease-in-out;
    
  }

  /* button press */
  &:active{

    transform: scale(.9);
    
  }

`




export const BoxTwo_Transactions_Bar   = styled.div`

  position: absolute;

  width: 432px;
  height: 51px;
  left: 55px;
  top: 90px;
  
  background: #4E4848;
  border-radius: 10px;

`

export const BoxTwo_Transactions_Bar_Text   = styled.p`

  position: absolute;
  width: 175px;
  height: 29px;
  left: 73px;
  top: 101px;
  
  font-size: 25px;
  font-family: 'Inter';
  font-weight: 700;
  
  /* identical to box height */
  
  text-align: center;
  
  background: linear-gradient(90deg, #0FC5FF 0.62%, #00A3FE 33.54%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
`





export const BoxTwo_Transactions_BarButton = styled.button`


  cursor: pointer;

  border: none;

  position: absolute;
  width: 127px;
  height: 29px;
  
  left: 341px;
  top: 101px;
  
  background: linear-gradient(95.64deg, #73A6F2 12.9%, #70B9D9 46.92%, #52BDF9 86.11%);
  border-radius: 20px;


  &:hover{
    
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    
  }

  /* button press */
  &:active{

    transform: scale(.95);
    
  }

  
`




export const BoxTwo_Transactions_BarButtonText = styled.p`

  position: absolute;
  width: 49px;
  height: 15px;
  
  left: 39px;
  top: 7px;
  
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  
  text-align: center;
  
  color: #FFFFFF;

  

  
`






/*dynamic arrays*/ 


/* array messages / replies here */
export const BoxTwo_RectangleArrayWrapper  = styled.div`


  overflow: scroll;
  overflow-x: hidden;


  &::-webkit-scrollbar {
    width: 10px;

    /* left top  - does not work*/
    transform: translate(15px, 0px);


  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: linear-gradient(0.23deg, rgba(136, 208, 249, 0.73) 4.86%, rgba(112, 201, 251, 0.81) 38.54%, rgba(69, 169, 225, 0.83) 63.8%, #0788D0 85.69%);
    border-radius: 10px;


  }
  
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #28E1EC; 
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #90e3e8; 

    cursor: default;


  }








  position: absolute;
  width: 432px;
  height: 561px;
  left: 56px;
  top: 152px;
  
  background: linear-gradient(31.05deg, #12DEFA 18.01%, rgba(5, 159, 245, 0.67) 99.14%);
  border-radius: 13px;

  padding-bottom: 15px;

`


/* if there is no wallet  */
export const BoxTwo_NoWalletMsg  = styled.div`

  position: absolute;
  width: 176px;
  height: 36px;

  left: 128px;
  top: 80px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: #FFFFFF;

`





export const BoxTwo_PostContainer  = styled.div`

/*   position: absolute; */

  position: relative;

  /* z-index: 20; */
  width: 411px;
  height: 171px;

/*   padding: 10px;
  margin-top: 13px; */
  
  left: 10px;
  
  top: 6px;


  margin-top: 9px;
  
  background: #55729D;
  border-radius: 10px;

`

export const BoxTwo_SenderTextBox  = styled.div`

  /* z-index: 21; */
  position: absolute;
  width: 57px;
  height: 20px;
  
  left: 98px;
  top: 19px;
  
  background: #00CFFD;
  border-radius: 3px;

`


export const BoxTwo_SenderText  = styled.p`

  position: absolute;
  width: 53px;
  height: 18px;
  
  right: 4px;
  top: 2px;
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  
  color: #FCF9F9;

`


export const BoxTwo_SenderAddress  = styled.p`

  position: absolute;
  width: 296px;
  height: 11px;
  
  left: 86px;
  top: 45px;
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  
  color: #FFFFFF;

`

export const BoxTwo_DateContainer  = styled.div`

  position: absolute;
  width: 218px;
  height: 31px;

  left: 98px;
  top: 63px;
  
  background: #394244;
  border-radius: 4px;
  
`


export const BoxTwo_DateContainerText  = styled.p`

  position: absolute;
  width: 215px;
  height: 14px;

  left: 98px;
  top: 66px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  text-align: center;

  color: #FFFFFF;

`


export const BoxTwo_PostBoxMsg  = styled.div`

  position: absolute;
  width: 364px;
  height: 50px;
  
  left: 24px;
  top: 113px;
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 13px;
  
  color: #FFFFFF;

`



/*picture incase*/



export const BoxTwo_Pfp_Pic = styled.div`

  position: absolute;
  width: 70px;
  height: 70px;
  left: 18px;
  top: 15px;

  border-radius: 50%;
  background-size: cover;

  background-image: url(${abot});

 
`








