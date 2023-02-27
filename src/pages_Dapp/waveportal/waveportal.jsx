import React from "react";



//remember to use camel casing as they do not like componenets with lowercase. 

import  WavePortalUI01_Main  from '../../Dapp_Components/waveportal';
// <WavePortalUI01_Main/>

import Icon01_4 from '../../bubble_menu/waveportal';
//  <Icon01 /> 

import '../../styles/Text.css';  


import { WavePortalBG } from './WavePortalElements'


//ONLY IMPORT  WavePortalUI01_Main 
const WavePortal01 = () => { 

  return(
    
    <WavePortalBG>


        <WavePortalUI01_Main/>
      
          
    </WavePortalBG>

    
  )

}

export default WavePortal01;