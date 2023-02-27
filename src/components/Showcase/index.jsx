import React from 'react'

import styled from 'styled-components'

import { motion } from 'framer-motion'

import {
  ShowcaseImage,
  CenterItem,
  ImageBorder,

  Image_Container

} from './ShowcaseElements' 


//image imports
import Green from  '../../images/Alphabots/Green.png'
import Gold from  '../../images/Alphabots/Gold.png'
import Blue from  '../../images/Alphabots/Blue.png'
import Milize from  '../../images/Anime/Milize.jpg'

const Showcase01 = () => {

  return(

   <CenterItem>

    <Image_Container>
     
  
    <ImageBorder>

      <motion.div
        animate={{
          scale: [1, 1.5, 1.5, 1, 1],
          rotate: [0, 0, 25,0,0],
          }}
           transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 15
              }}
        >   
        
          <ShowcaseImage src={Milize} alt= 'Check it' />
        
        </motion.div>
      
      </ImageBorder>

    </Image_Container>

    
     
   </CenterItem>

  );

}

export default Showcase01





