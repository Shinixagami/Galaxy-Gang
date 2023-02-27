//import key frames
import  styled from 'styled-components'

import { keyframes } from 'styled-components'

import { motion } from 'framer-motion'


import Green from  '../../images/Alphabots/Green.png'
import Gold from  '../../images/Alphabots/Gold.png'
import Blue from  '../../images/Alphabots/Blue.png'



/*
export const ShowcaseImage = styled.img.attrs({
    src: `${Blue}`
    })`
  
    width: 75%;
    height:75%;

    border-radius: 4%;

  @media screen and (min-width: 870px) {

    width: 50%;
    height:50%;
  }

  @media screen and (min-width: 1200px) {

    width: 30%;
    height: 30%;
  }

`
*/ 

export const ShowcaseImage = styled.img`

  
   &:hover{

    transform: scale(1.1);

    background: -webkit-linear-gradient(-60deg, #e9fa01,orange,gold,#c3d101,orange);
    background-size: 200% 200%;

    /*animations here*/

    transition: all 0.2s ease-in-out;

  }

  /* button press */
  &:active{

    transform: scale(.5);
    
  }

  width: 70%;
  height:70%;
  border-radius: 15%;

  @media screen and (min-width: 870px) {



    width: 50%;
    height:50%;
  }

  @media screen and (min-width: 1200px) {


    width: 30%;
    height: 30%;
  }

  
`


/*
export const ShowcaseImage = styled.div`

  background-image: url(${Blue.png});

`;
*/

/* section */ 


export const Image_Container = styled.div`
/* 
  border-style: dotted;
  border-radius: 20%;
   */
/*  padding-top: 20%;
  padding-bottom: 20%; */


   @media screen and (max-width: 480px){
    transition: 0.8s all ease;
    

  }
  

`


export const CenterItem = styled.section`


  /* pushes image to a higher layer */
  /*z-index - higher is better */
  z-index: 11;
  display: flex;
  margin: 0 auto;

  /*border-style: dotted;*/
  border-radius: 20%;
  padding-top: 15%;

  padding-bottom: 21%;


  @media screen and (min-width: 800px) {
    padding-top: 40%;
    padding-bottom: 0%;
     
  }
  

  @media screen and (min-width: 1200px) {
    padding-top: 48%;
    padding-bottom: 0%;
  }

  @media screen and (min-width: 1400px) {
    padding-top: 48%;
    padding-bottom: 0%;
  }

`


const FadeUpImage = keyframes`

  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  20% {
    opacity: 1;
    transform: translateY(0px);
  }
  85% {
    opacity: 1;
    transform: translateY(0px);
  }
  100% {
    opacity: 0;
    transform: translateY(-10px);
  }
`
/*image container */
export const ImageBorder = styled.div`

  /*border-style: dotted;*/
  border-radius: 30% ;

  /*animate here*/

  /*problem here*/
  /* animation-name: $FadeUpImage ; */
  
  animation-duration: 1s;
  animation-iteration-count: infinite;

`




