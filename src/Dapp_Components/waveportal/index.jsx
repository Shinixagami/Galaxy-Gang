
import React from 'react'

import  WavePortalUI01_BoxOne  from './box-one';
// <WavePortalUI01_BoxOne/>


import  WavePortalUI01_BoxTwo from './box-two';
// <WavePortalUI01_BoxTwo/>


/*css ToDoList -for gradients*/
// import './ToDoList.css';  

import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


import {

  MainWave_Container,
  MainWave_Footer,
  MainWave_Div
  
} from './wave-bg' 


//import box one and two
const WavePortalUI01_Main = () => {

  return (

    <>
  
    <ToastContainer position="bottom-left" autoClose={3100}/>
      
      <MainWave_Container>

        <WavePortalUI01_BoxOne/>

        <MainWave_Div/>

        <WavePortalUI01_BoxTwo/>
        
        
      </MainWave_Container>

      <MainWave_Footer>
      All Rights Reserved.
      </MainWave_Footer>


    </>
  )
      

}


export default WavePortalUI01_Main

