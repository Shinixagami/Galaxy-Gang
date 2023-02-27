import React from 'react'

//media player css
import './MediaPlayer.css';  

import {
  Center_Elements,
  Spaced_Text,
  Video_Styled,
  Heading_Text1
} from './MediaPlayerElements' 


const MediaPlayer01 = () => {

  return(

   <div className="UI_Center-Items">

   <Center_Elements>


      <Spaced_Text>

        <Heading_Text1>What are NFTs?</Heading_Text1>
       
    </Spaced_Text>
     
    <Video_Styled>

        <video controls width="55%" height="55%" autoplay >

        <source src="src/video/Rene.mp4"
            type="video/mp4" />

        Sorry, your browser doesn't support embedded videos.
        </video>

      
    </Video_Styled>

     

    <Spaced_Text>
       Dj Snake Middle
    </Spaced_Text>
     
    <div className= "AudioPlayerContainer" >
        <audio controls src="src/music/middle.mp3"  type="audio/mp3">
            Your browser does not support the
            <code>audio</code> element.
        </audio>
    </div>

    <Spaced_Text>
      Regard You
    </Spaced_Text>

      <div className= "AudioPlayerContainer" >
        <audio controls src="src/music/song1.mp3"  type="audio/mp3">
            Your browser does not support the
            <code>audio</code> element.
        </audio>
      </div>

     
      <Spaced_Text>
      Random Anime Song
      </Spaced_Text>

      <div className= "AudioPlayerContainer" >
        <audio controls src="src/music/okasama.mp3"  type="audio/mp3">
            Your browser does not support the
            <code>audio</code> element.
        </audio>
      </div>

  
      <Spaced_Text>
      Feel free to tab out - the audio player is continious
      </Spaced_Text>

   </Center_Elements>

    </div>

     
  );

}

export default MediaPlayer01