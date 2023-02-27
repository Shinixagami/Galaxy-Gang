/*usesState for action triggers*/
import React, { useEffect, useState } from 'react'

import { CModal } from './modal';



import { ManageBG, Manage_Footer } from './ManageElements'

const ManagePage = () => {

  //logic here
  
  return(

    <>
    <ManageBG>
      
      <ConnectSection/>

        <Manage_Footer>
          All Rights Reserved. Under Development.
        </Manage_Footer>

    </ManageBG>
    </>

  )
}

export default ManagePage;