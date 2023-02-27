import React from 'react'


//framer motion
import { motion } from 'framer-motion'

//css imports
import './DropDown.css';  


//this is where it gets its name 
const DropDownMenu01 = ({children, onClick}) => {

  return(

    <motion.div
      className="backdrop"
      onClick={onClick}
      intial={{ opacity:0 }}
      animate={{opacity:1 }}
      animate={{opacity:0 }}
    >
      {children}

      
    </motion.div>
  

  );

}

export default DropDownMenu01