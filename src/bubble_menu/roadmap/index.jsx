import React from 'react'

import '../bubble.css';  



import { FcCancel } from "react-icons/fc"
import { FcAbout } from "react-icons/fc"
import { FcDoughnutChart } from "react-icons/fc"
import { FcPrevious } from "react-icons/fc"
import { FcHome } from "react-icons/fc"
import { FcBullish } from "react-icons/fc"
import { FcDiploma2 } from "react-icons/fc"
import { FcGlobe } from "react-icons/fc"
import { FcWorkflow } from "react-icons/fc"
import { FcTodoList } from "react-icons/fc"

/*
OLD DO NOT USE 

   <a href="#" class="menu-item blue">  <FcAbout />  </a>
   <a href="#" class="menu-item green"> <FcAbout /> </a>
   <a href="#" class="menu-item red">  <FcAbout />  </a>
   <a href="#" class="menu-item purple">  <FcAbout />  </a>
   <a href="#" class="menu-item orange">  <FcAbout />  </a>
   <a href="#" class="menu-item lightblue">  <FcAbout /> </a>
*/

const Icon01 = () => {

  return(

<div class="menu-container">
  
<nav class="menu-wrapper">
  
  <nav class="menu">
  
  <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open" />
   <label class="menu-open-button" htmlFor="menu-open">
    <span class="lines line-1"></span>
    <span class="lines line-2"></span>
    <span class="lines line-3"></span>
  </label>

  <a href="https://app.shinixagami.net"  target="_blank" class="menu-item blue"  alt="1st element">  <FcTodoList />  </a>
  
   <a href="#" class="menu-item green"> <FcAbout /> </a>
   <a href="#" class="menu-item red">  <FcAbout /> </a>
  
   <a href="https://landing.shinixagami.net" target="_blank" class="menu-item purple"  alt="4th element">  <FcAbout />  </a>

   <a href="https://app.shinixagami.net" target="_blank"  class="menu-item orange"  alt="3rd element">  <FcDiploma2 />  </a>

   <a href="https://app.shinixagami.net" target="_blank" class="menu-item lightblue"   alt="2dth element">  <FcPrevious /> </a>
  
  </nav>
    
</nav>

</div>
    
  );
}

export default Icon01