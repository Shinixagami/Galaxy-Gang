import styled from 'styled-components'

/* SWIPER */
export const SwipeContainer = styled.div`

  position: relative;
  display: flex;

  flex-direction: column;
  z-index: 12; /*hero section is 10 */

  transform: skewY(2deg);
  
  margin-top: -7%;
  
  width: 100%;
  height: 110vh;
  
  border: 15px solid yellow;


  font-size: 2em;
  color: white;

  


  &:hover{


    
  }

`


export const SwipeWrapper = styled.div`

  width: 100%;
  border: 10px solid limegreen;

  flex-direction: row;


  &:hover{

    

  }

`




//left 
export const SwipeItemOne = styled.div`

  flex-direction: row;

 width: 80%;
  border: 15px solid purple;

  &:hover{


  }

`

//right
export const SwipeItemTwo = styled.div`

    width: 80%;
  border: 15px solid cyan;



  &:hover{

    

  }

`




export const SwipeImgContainer = styled.div`

  object-fit: 

  width: 100%;
  border: 10px solid orange;
 
  &:hover{


  }

`
/*
https://swiperjs.com/react
*/
export const SwipeImage = styled.img`

/*   object-fit: cover; */

  align-self: center;
  width: 100%;
  height: auto;

/*   transform: translate(-42px, 50px) scale(1.2);; */
 
  border: 5px dashed red;
 
  &:hover{


  }

`
