/*usesState for action triggers*/
import React, { useEffect, useState } from 'react'

import { CModal } from './modal';

const CaylaPage = () => {

  


  const [showModal, setShowModal] = useState(true);



    const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      display: 'block',
      position: 'fixed',
      zIndex: '1000',
      transform: 'translate(-50%, -50%)',
    },
  };



  const [modalIsOpen, setmodalIsOpen] = React.useState(false);

  

  return(

    <>

    <h1>Modal Login</h1>

        <CModal/>


        <CModal showModal={showModal} setShowModal={setShowModal} />
      
      
    <h1>Check check</h1>
    </>


 
  )
    
}

export default CaylaPage;