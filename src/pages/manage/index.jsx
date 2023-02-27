/*usesState for action triggers*/
import React, { useEffect, useState } from 'react'

import { CModal } from './modal';

//connect btn for testing
import ConnectSection from '../../components/ConnectSection/';

import { 
  
  ManageBG, 
  Manage_Footer,

  NavbarSpacer
       
       
} from './ManageElements'

const ManagePage = () => {

  //logic here
  
  return(

    <>
    <ManageBG>

      <NavbarSpacer/>
      
      <ConnectSection/>

        <Manage_Footer>
          All Rights Reserved. Under Development.
        </Manage_Footer>

    </ManageBG>
    </>

  )
}

export default ManagePage;