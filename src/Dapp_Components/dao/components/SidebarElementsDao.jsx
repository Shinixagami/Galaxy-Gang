import styled from 'styled-components'

//redirect -to new page /dao/~
import { Link as LinkRouter } from 'react-router-dom'
//scroll 
import { Link as LinkScroll } from 'react-scroll'

/* animations */
import { keyframes } from 'styled-components'


import pfp1 from '../images/pfp1.png';

import pfp2 from '../images/pfp2.png';

import pfp3 from '../images/pfp3.png';

import pfp4 from '../images/pfp4.png';

import pfp5 from '../images/pfp5.png';

import pfp6 from '../images/pfp6.png';



export const MenuDao = styled.ul`

  padding: 5px;
  padding-bottom: 20px;

  width: 280px;

/*   width: 220px; */

/*  padding-left: 25px;
  padding-right: 25px; 
   */

  /* From https://css.glass */
/*  
  background: rgba(27, 208, 247, 0.24);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.8px);
  -webkit-backdrop-filter: blur(4.8px);
  border: 1px solid rgba(27, 208, 247, 0.03); */
  
  
`



/* is the spacer */
export const DaoSendToPage_LinkR = styled(LinkRouter)`


  padding-right: 5px;
  padding-left: 5px;

  /* space of menu items*/
  padding-top: 15px;

  
  white-space: nowrap;

  /*takes away underscores*/
  text-decoration: none ;

  /* important padding for buttons */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decorations: none; 
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

`

export const DaoSendToPage_Na = styled.div`


  user-select:none;


  padding-right: 5px;
  padding-left: 5px;

  /* space of menu items*/
  padding-top: 15px;

  
  white-space: nowrap;

  /*takes away underscores*/
  text-decoration: none ;

  /* important padding for buttons */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decorations: none; 
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

`





//button insde 
export const DaoMenuBtn = styled.div`

  padding: 7px;

  width: 235px;
  
  white-space: nowrap;


   &:hover{

    /* From https://css.glass */
    background: rgba(255, 253, 0, 0.07);
    border-radius: 50px;

    -webkit-backdrop-filter: blur(0.7px);

    
  }


   &:active{
    

  }  


`



export const DaoMenuBtnText = styled.div`

  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  white-space: nowrap;
  
`


export const DaoPfpContainer = styled.div`


  position: absolute;
  
  width: 100%;

  height: 400px;



  align-items: center;
  justify-content: center;

 
`

export const PfpImage = styled.div`

  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;

  position: absolute;
  width: 170px;
  height: 170px;
  
  left: 96px;
  top: 89px;

  opacity: 0.9;

  object-fit: cover;
  background-size: cover;

  border-radius: 20px;

 
`



export const DaoPfpContainerTextAddrs = styled.div`


overflow-wrap: break-word;


   position: absolute;

    width: 176px;
    height: 32px;
  
    left: 92px;
    top: 290px;

    white-space: normal;
  
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
  
    color: #FFFFFF;


  
`



export const DaoPfpDivider = styled.div`

  position: absolute;
  width: 168px;
  height: 3px;
  
  left: 96px;

  top: 336px;

  background: rgba(255, 252, 252, 0.21);
  border-radius: 18px;

`




export const DaoConnectWalletBtn = styled.button`

  border: none;

  position: relative;
  
  width: 188px;
  height: 37px;

  left: 84px;
  top: 360px;
  
  background-color: #60609f;
  color:blue;

  border-radius: 20px;


  
  &:hover{
    
    transform: scale(1.07);
    transition: all 0.1s ease-in-out;
    cursor: pointer;

    
    
  }

  /* button press */
  &:active{

    transform: scale(.95);
    cursor: pointer;
    
  }

 
`



export const DaoConnectWalletText = styled.a`

  position: absolute;
  width: 86px;
  height: 15px;
  left: 53px;
  top: 12px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */


  color: #FFFFFF;


  

 
`




export const LeftSideBar = styled.div`

  height: 1080px;
  
  position: sticky;

  top: 7%;

  
`
 


