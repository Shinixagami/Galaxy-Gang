import styled from 'styled-components'


export const InfoContainerBG = styled.div`

  display: fixed;
  position: relative;
  z-index: 11; /*hero section is 10 */

  transform: skewY(-3deg);
  
  width: 100%;
  height: 110vh;
  
  border: 15px solid yellow;
  padding: 50px;


  font-size: 2em;
  color: white;



  


  &:hover{


    
    }

`


export const InfoWrapper = styled.div`


  width: 90%;
  border: 15px solid green;




  &:hover{

    

    }

`

//left 
export const InfoRowOne = styled.div`

  width: 80%;
  border: 15px solid purple;
 
  &:hover{


  }

`

//right
export const InfoRowTwo = styled.div`

  width: 80%;
  border: 15px solid cyan;
 


  &:hover{

    

  }

`








