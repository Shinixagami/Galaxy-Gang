import styled from 'styled-components';




import pfp from './images/pfp2.png';

import gal1 from './images/gal-one.jpg';

import gal2 from './images/gal-two.jpg';

import gal3 from './images/gal-three.jpg';





export const Main_DaoContainer = styled.div`
  
  /* temporary */
  /*  max-height: 1700px; */
  /*  max-width: 100%;

  width: 1400px; */

  
  /* DO NOT ADD FLEX GROW */
  display: flex; 
  align-items: center;
  justify-content: center;

  /*
  flex-wrap: wrap; 
  flex-direction: column; 
  */

  z-index: 500;

  /* EDITED */
  width: auto;
  
  /* error here */
  @media screen and (max-width: 768px) {

    max-height: 3600px;
    overflow-y: hidden;
  
  }


  /* background main page */
/*   background-color: #83eaf1;
  background: green; */

 /* 2 WITH LIGHT BLUE */
 /* 3 WITH DARK BLUE*/ 

/*   background-image: url(${gal2}); */
  background-repeat: no-repeat;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;

  top: 0;


    
/*   background-size: 200vh; */


    

 

  

`

