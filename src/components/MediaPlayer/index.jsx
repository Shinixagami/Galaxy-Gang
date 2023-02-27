import React from 'react'

//media player css
import './MediaPlayer.css';  

import {
  Center_Elements,
  Spaced_Text,
  Video_Styled,
  Heading_Text1,
  Heading_Text2
} from './MediaPlayerElements' 


const MediaPlayer01 = () => {

  return(

   <div className="UI_Center-Items">

   <Center_Elements>


      <Spaced_Text>

        <Heading_Text1>What are NFTs?</Heading_Text1>
       
    </Spaced_Text>
     
    <Video_Styled>

        <video controls width="55%" height="55%"  >

        <source src="src/video/NFT_Vid.mp4"
            type="video/mp4" />

        Sorry, your browser doesn't support embedded videos.
        </video>

    </Video_Styled>


    <Heading_Text2>
       +Decentralized
    </Heading_Text2>
     <Heading_Text2>
       +Anonymous
    </Heading_Text2>
     <Heading_Text2>
       +Secure
    </Heading_Text2>
     


   </Center_Elements>

    </div>

     
  );

}

export default MediaPlayer01