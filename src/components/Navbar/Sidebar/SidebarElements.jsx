import styled from 'styled-components'

import {FaTimes} from 'react-icons/fa'


//scroll and link imports
//redirect
import { Link as LinkRouter } from 'react-router-dom'
//scroll 
import { Link as LinkScroll } from 'react-scroll'



/* animations */
import { keyframes } from 'styled-components'

//exports
// import Blue from  '../../../images/Alphabots/Blue.png'  
// import Green from  '../../../images/Alphabots/Green.png'  

import Purple from  '../../../images/Alphabots/Purple.png'

  
/*whole slide down menu*/
export const SidebarContainer = styled.aside`

  /* makes code unselectable */
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */


  /* padding here does not work
  padding-top: 100px;
*/

  position: fixed;
  /* z-index of 100 is the highest layer */
  z-index: 14;


  width: 100%;
  height: 100%;

  



   background: rgba(146, 4, 158, 0.18);
  border: none;
/*   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
  backdrop-filter: blur(3.2px);
  -webkit-backdrop-filter: blur(3.2px);
  border: 1px solid rgba(146, 4, 158, 0.3);

  display: grid;
  align-items: center;

  top: 0;
  left: 0;


/*   box-shadow: 0px -6px 13px 8px #000000, 10px 4px 13px 14px rgba(0,0,0,0.16); */

  /* animations */
  transition: 1s ease-in-out;
 
/*   opacity: ${({ isOpen }) => (isOpen ? '100%' : '50%')}; */
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')}; 


/* important */
  margin-top: 59px;
  padding-bottom: 30%;


   @media screen and (max-width: 480px){
    transition: 0.8s all ease;
    margin-top: 53px;
/*     padding-bottom: 40px; */
  }

  /* added redundancy -hides menu*/
  @media screen and (min-width: 768px){
    display: none;
  }


`

export const CloseIcon = styled(FaTimes)`
  margin-top: 50px;
  color: #fff;
  
`


export const Icon  = styled.div`
  
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;

`


/*
SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRouter,
*/


export const SidebarWrapper = styled.div`


  padding-top: 6%;
  color: #fff;


  /* added redundancy -hides menu*/
  @media screen and (min-width: 768px){
    display: none;
  }
  
`




export const SidebarMenu = styled.ul`

  display: grid;
  grid-template-columns: 1fr;

  /* change with how much list are there */
  grid-template-rows: repeat(3, 45%);

  text-align: center;

  @media screen and (max-width: 480px){

    
    /* change with how much list are there */
    grid-template-rows: repeat(3, 44px);

  }

  

`

/* added new -not needed*/
export const SendToPage_ContainerR = styled.li`

  text-decoration: none ;
  
  height: 80px; 

   &:hover{
    transform: scale(1.1);
    /*animations here*/
    transition: all 0.3s ease-in-out;

  }

  /* button press */
  &:active{

    transform: scale(.8);
    
  }  

`

/* added new */
export const SendToPage_LinkR = styled(LinkRouter)`

  /*takes away underscores*/
  text-decoration: none ;

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

  &:hover{
    transform: scale(1.05);
    color: #0fd2f5;
    transition: 0.2s ease-in-out;
  }


   &:active{

    transform: scale(.95);
    
  }  


  

`







export const SidebarLink = styled(LinkScroll)`

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

  &:hover{
    color: #0fd2f5;
    transition: 0.2s ease-in-out;
  }

`

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  
    
`

/* animations */
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
/*this is actually the button -style has to be updated in the future*/
export const SidebarRouter = styled(LinkRouter)`

/*   transform: translate(0, -20px); */

/*   border-radius: 8px; */

  background: -webkit-linear-gradient(left, #46abe6, #2ad1b5, #46abe6);
  background-size: 200% 200%;
  color: white;

  white-space: nowrap;

  padding: 15px 60px;

  font-family: 'VT323', monospace;
  font-weight: bold;

  font-size: 30px;

  /* outline */
  border-style: solid;
  border-width: 1px;
  border-color: black;

  /* shadow */
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;






  transition: all 0.2s ease-in-out;

  text-decoration: none;

  &:hover{

    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;

    animation: ${gradientAnimation} 7s ease;
    

    transform: scale(1.1);

    /*background: -webkit-linear-gradient(-60deg, #e9fa01,orange,gold,#c3d101,orange);
    background-size: 200% 200%;*/

    /*animations here*/

    transition: all 0.2s ease-in-out;
    
  }

  /* button press */
  &:active{

    transform: scale(.6);
    transition: all 0.2s ease-in-out;
    
  }
`


/*center image */
export const SidebarImage = styled.img.attrs({
  src: `https://i.imgur.com/rcCC5dD.png`
  })`


  width: 48%;
  
  height: auto;
  
  object-fit: contain;

  margin-left: auto;
  margin-right: auto;

/*   border-radius: 10%; */

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  
  border-style: solid;
  border-width: 2px;
  border-color: black;
  

   @media screen and (min-width: 980px){

  width: 20%;
  height: auto;
    

  }

`



