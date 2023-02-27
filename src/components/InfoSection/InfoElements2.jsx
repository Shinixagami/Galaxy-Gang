import styled from 'styled-components'

//THIS IS LEFT TRAITS CONTAINER
export const InfoContainerTraitsBG = styled.div`

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  z-index: 12; /*hero section is 10 */

  transform: skewY(-2deg);
  

  width: 100%;
  padding: 10px;
  
  /* added css*/
  min-height: 130vh;
  height: auto;
  
  border: 10px solid orange;
  padding-bottom: 12%;
 
  font-size: 2em;
  color: white;



  &:hover{
  }


    /* turns off display if its over 1000 */
   @media screen and (max-width: 1000px) {

    display: none;

  } 

`

//THIS IS LEFT TRAITS CONTAINER
export const InfoWrapperTraits = styled.div`

  
  
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
  height: 100vh;
  
  border: 15px solid green;

 
  &:hover{


  }




  /*if it is less than 600 it will go to this */
  @media screen and (min-width: 1300px) {

     height: 125vh;

  } 


  

`

//left 
export const InfoRowOneTraits = styled.div`

  justify-content: space-between;
  

  
  /* important */
  height: 50%;
  width: 50%;

  display: inline-block;
  
  border: 15px solid purple;

  &:hover{

  }

  /*if it is less than 600 it will go to this */
  @media screen and (min-width: 1300px) {

    border: 15px solid cyan;

  } 


  
`

//right
export const InfoRowTwoTraits = styled.div`

  
  width: 80%;
  border: 15px solid cyan;
 
  &:hover{

    

  }

`








