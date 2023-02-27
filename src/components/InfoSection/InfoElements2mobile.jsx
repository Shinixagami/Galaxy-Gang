import styled from 'styled-components'

//THIS IS LEFT TRAITS CONTAINER
export const InfoContainerTraitsBGMobile = styled.div`

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  z-index: 12; /*hero section is 10 */

  transform: skewY(-2deg);
  

  width: 100%;
  padding: 10px;
  
  /* added css*/
  min-height: 130vh;  /* CHANGE */
  height: auto;
  
  border: 10px solid orange;
  padding-bottom: 12%;
 
  font-size: 2em;
  color: white;



  &:hover{
  }

    /* if 1000 do not show */
   @media screen and (min-width: 1000px) {
    display: none;
    } 

  
`

//THIS IS LEFT TRAITS CONTAINER
export const InfoWrapperTraitsMobile = styled.div`

  
  
  justify-content: space-between;
  align-items: center;

  text-align: center;


/*   display: flex;
 */
  margin: auto;
  flex-direction: row;

  
  /* over flow to auto resize div */
  overflow: hidden;


  /* important */
  width: 100%;
  height: 100vh;  /* CHANGE */
  border: 15px solid green;

 
  &:hover{

  }

`

//left 
export const InfoRowOneTraitsMobile = styled.div`

  justify-content: space-between;
  

  /* important */
  height: 50%;
  width: 50%;

   display: inline-block;
  
  border: 15px solid purple;

  &:hover{

  }

  /*if it is less than 600 it will go to this */
  @media screen and (max-width: 600px) {

    padding: 20%;
    width: 100%;
    height: 40vh;

  } 

  
`

//right
export const InfoRowTwoTraitsMobile = styled.div`

  
  width: 80%;
  border: 15px solid cyan;

  &:hover{


  }

`


export const MobileTextContainer = styled.div`


  background-color: cyan;

  padding: 9vh;
  padding-top: 2vh;
  padding-bottom: 5vh;

  /* centers text */
  justify-content: center;
  display: flex;

  &:hover{

  }

  @media screen and (max-width: 600px) {

    padding: 3vh;
    padding-top: 2vh;
    padding-bottom: 4vh;
    
  } 

`


export const MobileText = styled.div`

  background-color: cyan;

  width: 90%;
  overflow: hidden;
  
  
  /*text-shadow: horizontal-offset vertical-offset blur color;*/
  text-shadow: 2px 4px 3px rgba(0,0,0,0.3);

  

  &:hover{
  }


  @media screen and (max-width: 600px) {

    
    background-color: yellow;
    font-size: 1.6rem;
    width: 100%;
    
  } 
  

`
















export const TimerWrapper = styled.div`


    
  justify-content: space-between;
  align-items: center;
  text-align: center;


/*   display: flex;
 */
  margin: auto;
  flex-direction: row;

  
  /* over flow to auto resize div */
  overflow: hidden;


   border: 15px solid yellow;
  
    font-size: 3.5rem;
  
  /*text-shadow: horizontal-offset vertical-offset blur color;*/
    text-shadow: 2px 4px 3px rgba(0,0,0,0.3);

  position: relative;
  z-index: 120; /*100 is the higest element */


  width: 100%;
  height: 100%;


  &:hover{


  }

`



export const TimerContainer = styled.div`


  background-color: cyan;

  padding: 30%;
  width: 90%;
  font-size: 3.5rem;
  
  /*text-shadow: horizontal-offset vertical-offset blur color;*/
  text-shadow: 2px 4px 3px rgba(0,0,0,0.3);

  position: fixed;
  z-index: 120; /*100 is the higest element */


  &:hover{


  }

`







