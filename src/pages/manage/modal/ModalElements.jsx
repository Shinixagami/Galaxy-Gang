import styled from 'styled-components'
import { MdClose } from 'react-icons/md';

import { keyframes } from 'styled-components'


/* UNUSED BUT IMPORTANT */
export const Text1 = styled.div`

  text-align: center;

  font-size: 1.6rem;
  
`;


export const PaddingMiddle = styled.div`

  padding: 1vh;

  text-align: center;

  font-size: 1.6rem;

  
  
`;



/* UNUSED BUT IMPORTANT */
export const ModalContainer = styled.div`

  font-family: 'VT323', monospace;



  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;

  z-index: 1000;
  
  width: 100%;
  height: 100vh;
  
`;

export const Background = styled.div`

  font-family: 'VT323', monospace;

  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  
  z-index: 1000;
  width: 100%;
  height: 100%;
  
  background: rgba(0, 0, 0, 0.6);
  
`;

/* Modal Box */
export const ModalWrapper = styled.div`
/*   
  width: 800px;
  height: 600px; */

  max-width: 900px;
  max-height: 600px;

  height: 60vh;
  width: 70vh;
  
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;


  display: flex;
  flex-direction: row;
  
  
  position: relative;
  z-index: 10;
  border-radius: 10px;


  @media screen and (max-width: 1000px) {

    /* pushes items to center*/
    align-items: center;
    justify-content: center;
    flex-direction: column;

    flex-basis: 100%;
    flex: 1;
    background: cyan;
  
    /* height */
    width: 50vh;
    height: 60vh;

  } 
  

  @media screen and (max-width: 700px) {

    /* pushes items to center*/
    align-items: center;
    justify-content: center;
    flex-direction: column;

    flex-basis: 100%;
    flex: 1;
    background: orange;
    
    /* height */
    width: 80vw;
    max-height: 55vh;
    height: 55vh;
    

  } 


  
`;


export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

export const ModalContent = styled.div`

  border: 15px solid purple;
  

  width: 100%;
  
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;




export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;



const gradientAnimation = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`




/* BUTTON */
export const ModalBtn = styled.div`

  /*   border-radius: 50px; */

  background: #0099ff;
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 21px;
  font-weight: bold;
  outline: none;


  border-style: solid;
  border-width: .5px;
  border-color: black;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;

  cursor: pointer;

  background: -webkit-linear-gradient(left, #46abe6, #2ad1b5, #46abe6);
  background-size: 200% 200%;

  /*animations here*/

/*   transition: all 0.3s ease-in-out; */
  text-decoration: none;


  &:hover{

    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    /*background-size: 400% 400%;*/

    animation: ${gradientAnimation} 7s ease;

    transform: scale(1.07);

    /*background: -webkit-linear-gradient(-60deg, #e9fa01,orange,gold,#c3d101,orange);
    background-size: 200% 200%;*/

    /*animations here*/

    transition: all 0.25s ease-in-out;
    
  }

  /* button press */
  &:active{

    transform: scale(.8);
    
  }
`


  
  



