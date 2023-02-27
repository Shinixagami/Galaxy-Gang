//react library
import React, {useState, Component } from 'react'

import Faq from 'react-faq-component';
/* FAQ DATA -QUESTIONS HERE */
import {data} from './FAQ_Data' 



// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



//lure page
import {

  InfoContainerBG,
  InfoWrapper,
  InfoRowOne,
  ImgContainer,
  ImageOne,
  InfoRowTwo,
  InfoRowTwoTitle,
  InfoRowTwoBody
  
} from './InfoElements1' 

//traits page
import {

  InfoContainerTraitsBG,
  InfoWrapperTraits,
  InfoRowOneTraits,
  InfoRowTwoTraits,
  
} from './InfoElements2' 


//traits page FOR MOBILE
import {

  InfoContainerTraitsBGMobile,
  InfoWrapperTraitsMobile,
  InfoRowOneTraitsMobile,
  InfoRowTwoTraitsMobile,
  MobileTextContainer,
  MobileText,

} from './InfoElements2mobile' 




//Q&A page
import {

  InfoContainerQABG,
  InfoWrapperQA,
  InfoRowOneQA,
  InfoRowTwoQA,
  
} from './InfoElements3_FAQ' 


//SWIPER SLIDES - MUST EDIT
import {

  SwipeContainer,
  SwipeWrapper,
  SwipeItemOne,
  SwipeItemTwo,
  SwipeImgContainer,
  SwipeImage
  
} from './SwiperElements' 


import {

  TimerBGContainer,
  TimerWrapper,
  TimerContainer
  
} from './Timer' 









import orca from '../../images/whales/Orca.png';



/* counnt down */
import Countdown from "react-countdown";

/* TOAST */
import { ToastContainer, toast } from 'react-toastify';


// ReactModal.setAppElement('#main');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
     position: 'fixed',
    overlay: {zIndex: 1000},
  },
};



const InfoSection01 = () => {


  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }




  const CompletionistMSG = () => {

    toast("FINISHED");

  }



   const Completionist = () =>
    <span>Timer is UP!!</span>;


    
  

  
  return(



    

    <div>

          <ToastContainer position="bottom-left" autoClose={3100}/>
      
      <InfoContainerBG>

        LURE

        <InfoWrapper>
          
          <InfoRowOne>
            Left side
            <ImgContainer>
              <ImageOne src={orca} alt="Logo" />
            </ImgContainer>
          
          </InfoRowOne>

          
          <InfoRowTwo>
            <InfoRowTwoTitle>
            Right Lure
            </InfoRowTwoTitle>
            
            
            <InfoRowTwoBody>
            The difference between rem units and em units is that em units are relative to the font size of their own element, not the root element. As such they can cascade and cause unexpected results. Let’s consider the following example, where we want lists to have a font size of 12px, in the case where the root font size is the default 16px:
            </InfoRowTwoBody>
        

          
          </InfoRowTwo>

          
        </InfoWrapper>
      
      </InfoContainerBG>


      
      <InfoContainerTraitsBG>

          Traits
        <InfoWrapperTraits>

          <InfoRowOneTraits>
           one
          </InfoRowOneTraits>
          
          <InfoRowOneTraits>
          two
          
          </InfoRowOneTraits>
         
          <InfoRowOneTraits>
          
          three
          </InfoRowOneTraits>


          <InfoRowOneTraits>
          
          four
          </InfoRowOneTraits>

        </InfoWrapperTraits>
      
      </InfoContainerTraitsBG>


      <InfoContainerTraitsBGMobile>

        THIS IS THE MOBILE ELEMENT (ONLY SHOWS ON MOBILE)

        <InfoWrapperTraitsMobile>

              <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
         
      <SwiperSlide> <div> Image One <SwipeImage src={orca} alt="Logo" />   
        <MobileTextContainer>
             <MobileText>
              DESCRIPTION BLAH BLAH BLAH BLAH 
              DESCRIPTION BLAH BLAH BLAH BLAH 
              DESCRIPTION BLAH BLAH BLAH BLAH 
              DESCRIPTION BLAH BLAH BLAH BLAH 
              WRAPPING ENABLED
               
             </MobileText>
        </MobileTextContainer> </div>   
      </SwiperSlide>

                
      <SwiperSlide> <div> Image TWO <SwipeImage src={orca} alt="Logo" />  
        <MobileTextContainer>
             <MobileText>
              DESCRIPTION BLAH BLAH BLAH BLAH 
             </MobileText>
        </MobileTextContainer> </div>   
      </SwiperSlide>

                
      <SwiperSlide>  
        <div> Image THREE <SwipeImage src={orca} alt="Logo" />   
          <MobileTextContainer>
             <MobileText>
              DESCRIPTION BLAH BLAH BLAH BLAH 
             </MobileText>
          </MobileTextContainer> </div>  
      </SwiperSlide>


       <SwiperSlide>  
        <div> Image Four <SwipeImage src={orca} alt="Logo" />   
          <MobileTextContainer>
             <MobileText>
              DESCRIPTION BLAH BLAH BLAH BLAH 
             </MobileText>
          </MobileTextContainer> </div>  
      </SwiperSlide>

              
      
    </Swiper>


          
          
       
        
        
        </InfoWrapperTraitsMobile>
      
      
      </InfoContainerTraitsBGMobile>




      
      <InfoContainerQABG>
        Q&A
        <InfoWrapperQA>

           <div>
            <Faq 
              data={data}
               styles={{
                bgColor: "white",
                titleTextColor: "#48482a",
                rowTitleColor: "#78789a",
                rowTitleTextSize: 'large',
                rowContentColor: "#48484a",
                rowContentTextSize: '16px',
                rowContentPaddingTop: '2px',
                rowContentPaddingBottom: '2px',
                rowContentPaddingLeft: '5px',
                rowContentPaddingRight: '5px',
                arrowColor: "black",
                }} 
        
            />
          </div>
        
        </InfoWrapperQA>
      </InfoContainerQABG>



      
      <TimerBGContainer>
        <TimerWrapper>
        
             Count Down

          <TimerContainer>
          
            <Countdown date={'2022-06-26T07:30:00'} onComplete={CompletionistMSG} >
              <Completionist/>
            </Countdown>
          
          </TimerContainer>


          Insert NFT Mint Here.
        
  
         </TimerWrapper>
      </TimerBGContainer>


      


      


      
      



  
      
    </div>
  
  );

}

export default InfoSection01