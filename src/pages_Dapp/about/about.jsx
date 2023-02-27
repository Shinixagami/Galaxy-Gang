import React from "react";



/*NEED TO CHANGE MENU*/
import Icon01 from '../../bubble_menu/testing';
//  <Icon01 /> 

import '../../styles/Text.css';  

import { AboutBG } from './AboutElements'


const AboutPage01 = () => { 

  return(

    <AboutBG>

      <Icon01 /> 
    
        <div className="text-container">
  
          <div className="text-center">
            About Page

            <div className="text-4-marker">
            
              Under development.
            </div>
            
          </div>

        </div>

    </AboutBG>

  )

}

export default AboutPage01;