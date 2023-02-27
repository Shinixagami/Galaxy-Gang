
import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const HeroContainer = styled.div`

  font-family: 'VT323', monospace;
  

  border: none;

  position: relative;

  

  z-index: 10;
  display: flex;
  
  justify-content: center;
  align-items: center;
  padding: 0 30px;


  /* size here*/
  height: 110vh;
  width: auto; 

  max-width: 100%;
  max-height: 100%;

  padding-bottom: 20%;
  
  /* add before styles */
  :before{
    content: '';
    position: absolute; 

    top 0;
    left 0; 
    right: 0;
    bottom: 0;

    background: linear-gradient (
        180deg, 
        rgba(0,0,0,0.2) 0%, 
        rgba(0,0,0,.6) 100%
        ),

        linear-gradient (180deg, rgba(0,0,0.2) 0%, transparent 100%);
    z-index:11;
   }

`


export const HeroBg = styled.div`

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  rigt: 0;

  width: 100%;
  height: 100%;
  overflow: hidden; 

  border: none;

  object-fit: cover;

`


export const VideoBg = styled.video`

  /*set to two so profile picture does not overalp*/
  z-index: 1;
  width: 100%;
  height: 100%;

  -o-object-fit: cover; 

  object-fit: cover;
  background:  #232a34;
`

export const GifBg = styled.div`

  width: 100%;
  height: 100%;
  
/*   background-image: url("  https://www.teahub.io/photos/full/11-111194_cyberpunk-pixel-art-gif.gif");
 */
  /* whale */

/*   background-image: url("https://i.imgur.com/Mgw1Q0J.png"); */


  background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );

  background-repeat: no-repeat;
  background-size: cover;

 
`





export const HeroContent = styled.div`

  /*z index of 1 is the lowest value*/
  z-index: 1;
  
  max-width: 1200px;
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items:center;

  padding-top: 25%;

   @media screen and (min-width: 800px) {
   padding-top: 30%;
  }
  

  @media screen and (min-width: 1200px) {

   padding-top: 32%;
  }

  @media screen and (min-width: 1400px) {

   padding-top: 25%;
  }


`

export const HeroH1 = styled.div`

  color: #fff;

  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }

`

export const HeroP = styled.div`

  margin-top 20px;
  color: #fff;

  font-size: 24px; 
  text-align: center;

  max-width: 600px; 

  @media screen and (max-width: 768px) {
    font-size: 24px
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;


// not used
export const HeroButton = styled.div`

  background-color: blue;
  background: blue;
  padding: 20px 10px;

  &:hover{

  }

`