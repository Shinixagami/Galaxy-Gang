import React from "react";




/* update this to be independent from regular menu*/
import Icon01_2  from '../../bubble_menu/mint';
//  <Icon01 /> 

import '../../styles/Text.css';  


import { MintBG, Mint_Footer } from './MintElements'


const Mint01 = () => { 

  return(

    <MintBG>

      <Icon01_2 /> 
    
        <div className="text-container">
          <div className="text-center">
            Mint Page Under Development 

  
              <div className="text-4-marker">
              Come Back Next Time!
              </div>


          </div>
        </div>


      <Mint_Footer>
      Mint Page Under Development.
      </Mint_Footer>

      
      

    </MintBG>

    

  )

}

export default Mint01;