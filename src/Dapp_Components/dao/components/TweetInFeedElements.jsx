import styled from 'styled-components';

//import key frames
import { keyframes } from 'styled-components'


import abot from '../images/pfp1.png';

 /* transform: scale(.9); */


const slideInto = keyframes`

   0% {
      opacity: 0;

      transform: translateY(180px);

      background-color: white;
  
    }

    25% {


        
    }
  
    50% {
      opacity: 0.5;


      
      transform: translateY(-100px);
  
    }
  
    90% {

      transform: translateY(50px);

  
  
    }

  
    100% {
      opacity: 1;

  



    }


`








/* array messages / replies here */
export const Dao_RectangleArrayWrapper  = styled.div`

  animation-name: ${slideInto};
  animation-duration: 2s;
  animation-iteration-count: initial;


  

  background: rgba(88, 112, 233, 0.78);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.4px);
  -webkit-backdrop-filter: blur(4.4px);



/*   margin-top: 20px; */

  margin-top: 15px;
  
  margin-left: auto;
  margin-right: auto;

  overflow: scroll;
  overflow-x: hidden;

   overflow-y: hidden;


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


  
  position: relative;
  
/*   width: 560px; */
  
  width: 95%;
  height: 300px;
  

  padding-bottom: 15px;

`

export const TweetContainer = styled.div`

  padding: 10px;

`





export const Dao_Pfp_Pic = styled.img`

  position: absolute;
  width: 70px;
  height: 70px;
  left: 18px;
  top: 15px;

  border-radius: 50%;
  background-size: cover;

`
