import styled from 'styled-components'

/* This has styling and Logic */

//links for other webpages
/* we can have a alias for the specific link*/

//redirect
import { Link as LinkRouter } from 'react-router-dom'
//scroll 
import { Link as LinkScroll } from 'react-scroll'

//import key frames
import { keyframes } from 'styled-components'

export const Nav = styled.nav`
  

  
  

  /* makes code unselectable */
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */

  /* glass paint */
  background: rgba(146, 4, 158, 0.18);
  border: none;
/*   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
  backdrop-filter: blur(3.2px);
  -webkit-backdrop-filter: blur(3.2px);
  border: 1px solid rgba(146, 4, 158, 0.3);
  


  

  /*if you want an invisble background delete this color gradient (2 lines below) */
  
/*   background-color: #000000;
  background-image: linear-gradient(147deg, #000000   0%, #04619f 74%); */

  /* margin-top: -80px;   -uses less atm*/
  /* conten properties */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  /* Navbar properties */
  position: fixed;
  height: 59px;  /* 5% or 65px */
  width: 100%;
  top: 0;

  /*Hide Navbar on scroll dowm -useState*/

  /*shadow*/
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: 0px -6px 13px 8px #000000, 10px 4px 13px 14px rgba(0,0,0,0.16);
  
  z-index: 99; /*z index max is 100*/

  /* random media screen flexbox*/
  @media screen and (max-width: 1900px) {
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 480px){
    transition: 0.8s all ease;
    height: 53px;
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





//------------------Nav Animation FadeUp
const fadeUpNav = keyframes`

  0% {
    opacity: 0;
    transform: translateY(70px);
  }
  20% {
    opacity: 0.8;
    transform: translateY(0px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`

export const NavbarContainer = styled.div`

  display:flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;

/* important max width: */
  max-width: 1350px;

  animation: ${fadeUpNav} 7s ease;
  
`

export const NavLogo = styled(LinkRouter)`

  text-shadow: black 0.1em 0.1em 0.2em
      
  

  
  color: #0099ff;
  justify-self: flex-start;
  cursor: pointer;
/*   font-size: 1.5rem; */
  display: flex;
  align-items: center;
  margin-left: 22px;
  font-weight: bold;
  text-decoration: none;

  font-size: 100px;




  @media screen and (max-width: 768px) {
    font-size: .9rem;
  }
  
  
   &:hover{
     
    transform: scale(1.1);
     
    /*animations here*/
    transition: all 0.2s ease-in-out;

  }

  /* button press */
  &:active{
    transform: scale(.6);
  }

`


export const NavLogoText = styled.div`

  
  font-size: 28px;
  font-family: 'VT323', monospace;
  font-weight: bold;

  background-color: #000000;
background-image: linear-gradient(315deg, #000000 0%, #a29bfe 74%);


  background-size: 200% 200%;

 

  

  /* text shadow */
  /*
  text-shadow: black 0.1em 0.1em 0.2em


  */

 



  
  

  

  
  
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;


  @media screen and (max-width: 768px) {
    font-size: 27px;
    transition: all 0.2s ease-in-out;
  }


`






//image imports ---------------------------------------------
import Blue from  '../../images/Alphabots/Blue.png'  
import Green from  '../../images/Alphabots/Green.png'  
import Purple from  '../../images/Alphabots/Purple.png'

import RimuruFace from  '../../images/Slime/RimuruFace.jpg'

export const NavImage = styled.img.attrs({
  src: `${Blue}`
  })`

  width: 55px;
  height: 55px;

  border-radius: 20%;
`

//end of testing  -----------------------------------------




//hamburger menu - when on mobile
export const MobileIcon = styled.div`

  
  display: none;

  align-items: center;
  justify-content: center;
  
  
  /*turns on as soon as it hits less than 768 px */
  @media screen and (max-width: 768px) {

    align-self: center;

    transform: translate(-15px, 0px);
    
    display: block;
    positon: absolute;
    top: 0;
    right: 0;

    /* use this to move hamburger menu */ 

    cursor: pointer;

    /* old */
/*     color: #03E1FF; */

    color: #5170ad;

    
    


    
  }

`

export const NavMenu = styled.ul`

  font-family: 'VT323', monospace;
  
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }

`

//li = list -styled list 
export const NavItemScrollTo = styled.li`
  height: 80px; 

  font-family: 'VT323', monospace;
  

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

//scroll - remember dependency
export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center; 
  text-decoration: none ;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:active{
    border-botton: 3px solid #01bf71;
  }
`

//button -placement
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;


  

  @media screen and (max-width: 768px){
    display: none;
  }

  
`
//button decorations
/* BUTTON button */ 


export const NavBtnLink = styled(LinkRouter)`
/*   border-radius: 50px; */
  background: #0099ff;
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 21px;
  font-weight: bold;
  outline: none;


  border-style: solid;
  border-width: .5px;
  border-color: black;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;


  cursor: pointer;

  background: -webkit-linear-gradient(left, #46abe6, #2ad1b5, #46abe6);
  background-size: 200% 200%;

  /*animations here*/

  transition: all 0.2s ease-in-out;
  text-decoration: none;


  &:hover{

    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    /*background-size: 400% 400%;*/

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
    
  }
`



export const SendToPage_Container = styled.li`

  text-decoration: none ;

  font-size: 16px;

  
  height: 80px; 

   &:hover{
    transform: scale(1.07);
    /*animations here*/
    transition: all 0.3s ease-in-out;

  }

  /* button press */
  &:active{

    transform: scale(.8);
    
  }

`


export const SendToPage_Link = styled(LinkRouter)`

  /*takes away underscores*/
  text-decoration: none ;

  color: #fff;
  display: flex;
  align-items: center; 

  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:active{
    border-botton: 3px solid #01bf71;
  }

`



