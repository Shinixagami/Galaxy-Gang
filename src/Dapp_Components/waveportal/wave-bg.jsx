import styled from 'styled-components';


export const MainWave_Container = styled.div`


  /* temporary */


  width: 100%;
  height: 100vh;

  /* padding for entire container */
  padding: 15px;
  padding-top: 130px;
  padding-bottom: 20px;

/*   width: 2000px; */

  
  display: flex;
/*   align-items: center; */
  justify-content: center;
  flex-direction: row;
  
  
  /* only for testing */
   
/*   background-color: green;  */


  @media screen and (max-width: 1116px) {

    
    padding-top: 100px;

    /* pushes items to center*/
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;

    /* height */

    height: 100% ;

  } 


  @media screen and (max-width: 570px) {
  /*     display: none; */

    /* gets rid of padding when resizing */
    margin-top: -40px;
    padding-top: 0px;
    
/*     background-color: yellow; */

    transform: scale(.8);
  } 

  @media screen and (max-width: 480px) {
  /*     display: none; */

    /* gets rid of padding when resizing */
    margin-top: -130px;
    padding-top: 0px;
    
/*     background-color: purple; */

    transform: scale(.7);
  } 

  @media screen and (max-width: 403px) {
  /*     display: none; */

    /* gets rid of padding when resizing */
    margin-top: -188px;
    padding-top: 0px;
    
/*     background-color: cyan; */

    transform: scale(.6);
  } 

  
  

`


export const MainWave_Div = styled.div`

  width: 5%;
  max-width: 80px;
  min-width: 10px;
  
  height: 100%;
/*   background-color: green; */


  @media screen and (max-width: 1116px) {
/*     display: none; */

    height: 7vh;
  } 


`

export const MainWave_Footer = styled.div`



  /* ONLY SHOWS ON MOBILE*/
   /* From https://css.glass */
  background: rgba(12, 147, 236, 0.28);
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




