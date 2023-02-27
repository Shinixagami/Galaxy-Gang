import styled from 'styled-components';


//THIS IS LEFT TRAITS CONTAINER
export const TimerBGContainer = styled.div`

  display: fixed;
  position: relative;
  z-index: 12; /*hero section is 10 */

  transform: skewY(2deg);
  
  margin-top: -7%;
  
  width: 100%;
  height: 110vh;
  
  border: 15px solid magenta;
  padding: 50px;

  font-size: 2em;
  color: white;


  &:hover{
  }


    /* turns off display if its over 1000 */
   @media screen and (max-width: 600px) {


      padding: 10px;


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

  padding: 10px;
  width: 100%;
  font-size: 3.5rem;
  
  /*text-shadow: horizontal-offset vertical-offset blur color;*/
  text-shadow: 2px 4px 3px rgba(0,0,0,0.3);

  z-index: 120; /*100 is the higest element */


  &:hover{

  }

`