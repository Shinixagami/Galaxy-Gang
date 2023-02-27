import styled, { keyframes } from 'styled-components'

import gabe from './images/gabe.jpg'



const fadeUpBox = keyframes`

  0% {
    opacity: 0;

  }
  20% {
    opacity: 0.5;

  }

  50% {
    opacity: 0.8;

  }

  90% {
    opacity: 0.9;

  }

  100% {
    opacity: 1;
  }
`



export const BoxOne_WavePortal_Container = styled.div`


  position: relative;
  
  /* animation fade */
  animation-name: ${fadeUpBox};
  animation-duration: 5s;
  animation-iteration-count: initial;



   /* mobile screen */
  @media screen and (max-width: 768px) {

    
  
  
  }


  /* for smallest screens */
  @media screen and (max-width: 480px) {

  

  }


  /* Iphone 8 / 2020 SE here */
  @media screen and (max-width: 464px) {

   

  }

  /* Iphone SE or lower SMALL SCREENS*/
  @media screen and (max-width: 370px) {

  

  }




  /* fixing center LARGE SCREEN - temporary */

  /* @media screen and (min-width: 1600px) {


    transform: translate(-740px, -10px) scale(1.02);

    transition: 0.8s all ease;


  } */











`

export const BoxOne_Rectangle_1   = styled.div`


  /* shadow */
  box-shadow: 0px 0px 17px 8px #6e8291;





  /* do not edit box */
  width: 544px;
  height: 765px; 


  /* whole box position */
  /* position: absolute;
  left: 157px;
  top: 161px; */


  background: #555555;
  border: 2px solid #8CAAC6;
  border-radius: 15px;


  @media screen and (max-width: 768px) {
  
  }











`

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



export const BoxOne_Rectangle_2_Counts  = styled.button`


  cursor: pointer;

  border: none;

  position: absolute;

  
  width: 175px;
  height: 57px;
  
  left: 53px;
  top: 52px;

  background: linear-gradient(140.34deg, #5EC0F8 10.62%, #369FFF 73.38%);
  border-radius: 11px;


  &:hover{


    transform: scale(1.05);

    transition: all 0.2s ease-in-out;
    
  }

   /* button press */
  &:active{

    transform: scale(.95);
    
  }


  

`

export const BoxOne_Counts_Text  = styled.p`

  position: absolute;

  width: 99px;
  height: 22px;
  
  left: 16px;
  top: 15px;
  
  font-size: 20px;
  font-family: 'Inter';
  font-weight: 600;
  
  line-height: 29px;
  color: #000000;

`

export const BoxOne_Counts_TextNum  = styled.p`

  position: absolute;
  

  width: 21px;
  height: 22px;

  left: 12px;
  top: 9px;



  
  font-size: 20px;
  font-family: 'Inter';
  font-weight: 600;
  
  line-height: 29px;
  color: #000000;

`

/*THIS IS A BOX*/
export const BoxOne_CountsInner  = styled.div`

  position: absolute;
  width: 50px;
  height: 45px;

  left: 119px;
  top: 6px;
  
  background: #FFFFFF;
  border-radius: 10px;


`



export const BoxOne_Connect_Button = styled.button`

  cursor: pointer;

  position: absolute;
  width: 174px;
  height: 41px;

  
  left: 311px;
  top: 60px;
  
  background: linear-gradient(115.23deg, #36CBEC 34.77%, #40ABF9 66.02%);
  border-radius: 12px;

  border: none;

   &:hover{

    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    /*background-size: 400% 400%;*/

    animation: ${gradientAnimation} 7s ease;

    transform: scale(1.1);

    /*background: -webkit-linear-gradient(-60deg, #e9fa01,orange,gold,#c3d101,orange);
    background-size: 200% 200%;*/

    /*animations here*/

    transition: all 0.2s ease-in-out;
    
  }

  /* button press */
  &:active{

    transform: scale(.9);
    
  }

`











export const BoxOne_Connect_Button_Text   = styled.p`
  position: absolute;
  width: 120px;
  height: 18px;
  
  left: 53px;
  top: 12px;
  
  font-family: 'Inter';
  font-weight: 600;
  
  font-size: 14px;
  
  line-height: 18px;
  
  color: #070202;
  
  mix-blend-mode: normal;

`
export const BoxOne_Connect_Button_Text2   = styled.p`
  
  position: absolute;
  width: 27px;
  height: 27px;
  
  left: 10px;
  top: 6px;
  
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  font-size: 24px;

  line-height: 33px;
  
  color: #000000;
`




export const BoxOne_Connect_Button_Divider   = styled.div`
  position: absolute;
  width: 2px;
  height: 28px;
  left: 45px;
  top: 7.5px;
  
  background: #474747;
  border-radius: 6px;
`


export const BoxOne_Rectangle_3_Profile_Background  = styled.div`

  position: absolute;
  width: 432px;
  height: 168px;

  left: 53px;
  top: 128px;
  
  background: #4A4A4A;
  border-radius: 10px;
`


export const BoxOne_Pfp_Pic = styled.button`

  border: none;
  cursor: pointer;

  position: absolute;
  width: 120px;
  height: 120px;

  left: 38px;
  top: 27px;

  border-radius: 50%;
  background-size: cover;

  background-image: url(${gabe});


  &:hover{
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
  }

   /* button press */
  &:active{
    transform: scale(.8);
  }


`


export const BoxOne_Pfp_Divider = styled.div`

  

  position: absolute;
  width: 3px;
  height: 132px;
  left: 182px;
  top: 18px;
  
  background: #929292;
  border-radius: 30px;


  &:hover{
    transform: scale(1.07);
    transition: all 0.2s ease-in-out;
  }
  
 
`

export const BoxOne_Emoji = styled.div`

  cursor: pointer;

  position: absolute;
  width: 35px;
  height: 40px;
  
  left: 212px;
  top: 22px;


  font-size: 40px;
  line-height: 54px;
  
  color: #FFFFFF;


  &:hover{
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }

   /* button press */
  &:active{
    transform: scale(.9);
  }
  
 
`


export const BoxOne_HeroText = styled.p`

  position: absolute;
  width: 144px;
  height: 32px;
  
  left: 207px;
  top: 74px;
  
  /*na*/
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  
  font-size: 25px;
  line-height: 30px;
  
  color: #FFFFFF;


  &:hover{
    transform: scale(1.06);
    transition: all 0.2s ease-in-out;
  }
 
`


export const BoxOne_IntroText = styled.p`

  position: absolute;
  width: 142px;
  height: 29px;
  
  left: 207px;
  top: 105px;
  
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 26px;
  
  color: #10A1F2;

  &:hover{
    transform: scale(1.06);
    transition: all 0.2s ease-in-out;
  }



 
`

export const BoxOne_IntroTextBox = styled.div`

  position: absolute;
  width: 62px;
  height: 14px;
  
  left: 266px;
  top: 116px;
  
  background: #3B546B;
 
`





export const BoxOne_Text_Divider = styled.div`

  position: absolute;
  width: 432px;
  height: 0px;
  left: 53px;
  top: 433px;

  background: #4A4A4A;
  border: 3px solid #4A4A4A;
  border-radius: 100px;
 
`


export const BoxOne_TextBox1 = styled.p`

  position: absolute;
  width: 421px;
  height: 95px;
  
  left: 64px;
  top: 334px;


  font-family: 'Inter';
  font-weight: 500;
  
  font-size: 23px;
  line-height: 27px;
  text-align: center;

  color: #FFFFFF;

`



export const BoxOne_TextBox2 = styled.p`

  position: absolute;
  width: 344px;
  height: 81px;

  left: 97px;
  top: 452px;


  font-family: 'Inter';
  font-weight: 500;
  
  font-size: 23px;
  line-height: 27px;
  text-align: center;
  
  color: #FFFFFF;
 
`





export const BoxOne_Input_Box = styled.input`

  position: absolute;
  width: 432px;
  height: 44px;
  left: 53px;
  top: 597px;
  
  background: #FFFFFF;
  border-radius: 11px;

  font-size: 22px;
  font-weight: bold;

  border: none;

 
`

export const BoxOne_MakeAPost = styled.button`


  cursor: pointer;


  border: none;
  
  position: absolute;
  width: 432px;
  height: 44px;
  left: 53px;
  top: 655px;
  
  background: linear-gradient(271.97deg, #339CFC 29.37%, #55ADF1 39.17%, #5BBAF9 49.47%, #52BDF9 61.79%);
  border-radius: 50px;


  &:hover{

    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    /*background-size: 400% 400%;*/

    animation: ${gradientAnimation} 7s ease;

    transform: scale(1.05);

    /*background: -webkit-linear-gradient(-60deg, #e9fa01,orange,gold,#c3d101,orange);
    background-size: 200% 200%;*/

    /*animations here*/

    transition: all 0.2s ease-in-out;
    
  };


   &:active{

    transform: scale(.9);
    
  };

`

export const BoxOne_MakeAPostText = styled.p`

  position: absolute;
  width: 190px;
  height: 14px;
  
  left: 128px;
  top: 8px;
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 28px;
  text-align: center;
  
  color: #000A0F;

 
`




