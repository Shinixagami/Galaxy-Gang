import styled from 'styled-components'


export const InfoContainerBG = styled.div`

  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 11; /*hero section is 10 */

  
  transform: skewY(-2deg);

  
  width: 100%;

  /* added css*/
  min-height: 110vh;
  height: auto;
  
  border: 15px solid yellow;
/*   padding: 5%; */
  margin-top: -2%;

  /* centers to middiel Y VALUE*/
  justify-content: center;


  font-size: 2em;
  color: white;


  /* over flow to auto resize div */
  overflow: hidden;



  

  &:hover{


    
    }

`


export const InfoWrapper = styled.div`


  width: 100%;
  border: 15px solid green;

  display: flex;
   /* over flow to auto resize div */
  overflow: hidden;
  



  /*if it is less than 1116 it will go to this */
  @media screen and (max-width: 1000px) {

    /* pushes items to center*/
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;

    /* height */

    height: 100% ;

  } 
  

  



  &:hover{

    

    }

`

//left 
export const InfoRowOne = styled.div`

  

  width: 100%;0
  border: 15px solid purple;
 
  &:hover{


  }

`


export const ImgContainer = styled.div`

  object-fit: 

  width: 100%;
  border: 10px solid orange;
 
  &:hover{


  }

`



export const ImageOne = styled.img`

  object-fit: cover;

  width: 100%;

  transform: translate(-42px, 50px) scale(1.2);;
 
  border: 5px dashed red;
 
  &:hover{


  }


   /*if it is less than 600 it will go to this */
  @media screen and (max-width: 600px) {

    /* pushes items to center*/
    transform: translate(-15px, 20px)  scale(1.5);

  } 



  
`




//right
export const InfoRowTwo = styled.div`

  width: 100%;
  border: 8px solid cyan;
 
  font-size: 85%;

  &:hover{

    

  }

`


export const InfoRowTwoTitle = styled.div`

  width: 100%;
  font-size: 3rem;
  border: 8px dashed yellow;
 

  &:hover{

  }


  /*if it is less than 1116 it will go to this */
  @media screen and (max-width: 1116px) {
    

  } 


  

`





export const InfoRowTwoBody = styled.div`

  width: 100%;
  font-size: 2.5rem;
  border: 8px dashed yellow;

  
  &:hover{


    
  }


    /*if it is less than 1116 it will go to this */
  @media screen and (max-width: 1116px) {

    /* pushes items to center*/

    font-size: 1.6rem;
    

  } 


  /*if it is less than 600 it will go to this */
  @media screen and (max-width: 600px) {

    /* pushes items to center*/

    font-size: 1.5rem;
    

  } 


`







