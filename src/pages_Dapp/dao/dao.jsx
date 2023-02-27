import React from "react";

import Icon01 from '../../bubble_menu/testing';
//  <Icon01 /> 

import  DaoMainPage  from '../../Dapp_Components/dao';
// <DaoMainPage/>


import { DaoBG, Dao_Footer } from './DaoElements'

const DAOPage01 = () => { 

  return(

    <DaoBG>
      
        <DaoMainPage/>


        <Dao_Footer>
        All Rights Resevered. Under Development.
        </Dao_Footer>

    </DaoBG>

    

  )

}

export default DAOPage01;