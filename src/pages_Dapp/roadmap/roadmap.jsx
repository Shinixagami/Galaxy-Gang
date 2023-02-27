import React from "react";



import Icon01 from '../../bubble_menu/roadmap';
//  <Icon01 /> 

import '../../styles/Text.css';  


import { RoadmapBG } from './RoadmapElements';

const Roadmap01 = () => { 

  return(


    <RoadmapBG>

      <Icon01 /> 
    
        <div className="text-container">
  
          <div className="text-center">
            Roadmap under development

            <div className="text-4-marker-nopad">
            Come Back Next Time! 
            </div>


            <div className="text-center">


            <div className="text-4-marker-med">
            Utilities
            </div>
              <li> You can login using Google or a wallet</li>

              <li>Able to buy an NFT to enable GIFs/ Pics</li>
              <li>Mint an NFT for higher tiers on the site and let users change their banner </li>
              <li>Mint an NFT to let users autoplay a song on their pfp or animations</li>
              <li>all users with wallets will be able to use their NFTs on chain (cronos) as their PFP
</li>
        
              <div className="text-4-marker-med">
              Advance Utilities
              </div>

            <li>can send users crypto on DMs and you can play mini games to bet against each other and win your staked coins </li>
        

              
            
            </div>


              
            
          </div>

        </div>

    </RoadmapBG>

  )

}

export default Roadmap01;