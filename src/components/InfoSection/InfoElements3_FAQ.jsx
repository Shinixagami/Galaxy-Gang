import styled from 'styled-components'

//Q AND A
export const InfoContainerQABG = styled.div`

  display: flex;
  position: relative;

  /* this changes the layout */
/*   flex-direction: column;  */
  
  z-index: 12; /*hero section is 10 */

  transform: skewY(2deg);
  
   
  margin-top: -7%;
  
  width: 100%;

  /* added to extend componenet*/
  min-height: 110vh;
  height: auto;
  
  border: 15px solid #1988ff;
  padding: 50px;

  font-size: 2em;
  color: white;


  &:hover{

  }


    /* turns off display if its over 1000 */
   @media screen and (max-width: 600px) {

      padding: 30px;

  } 


`


export const InfoWrapperQA = styled.div`

   width: 100%;
  border: 8px solid green;


  &:hover{

  

    }

`

//left 
export const InfoRowOneQA = styled.div`

 width: 80%;
  border: 15px solid purple;

  &:hover{


  }

`

//right
export const InfoRowTwoQA = styled.div`

    width: 80%;
  border: 15px solid cyan;



  &:hover{

    

  }

`








