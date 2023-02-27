import React from 'react'


//framer motion
import { motion } from 'framer-motion'

//componenet import
import DropDownMenu01 from './DropDown';  

//css import
import './modal.css';  

const dropIn = {

  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    trasition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
      
    },
    
  },
  exit:{
    y: "100vh",
    opacity: 0,
    
  },
  
}



//this is where it gets its name 
const Modal = ({ handleClose, test}) => {
  
  return(

    <DropDownMenu01 onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"

        variants={dropIn}

        intial="hidden"
        animate="visible"
        exit="exit"
      >

      </motion.div>

    </DropDownMenu01>

  );

}
export default Modal;