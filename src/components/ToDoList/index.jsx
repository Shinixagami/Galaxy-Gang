import React from 'react'


import {
  Text_Container,
  Text_Wrapper,
  Heading_1,
  Text_1,
  Spaced_Text,
  Spaced_Text2,
  Text_Break,
  Text_Bold_Gradient,
  Text_Image
  
} from './ToDoListElements' 


/*css ToDoList -for gradients*/
import './ToDoList.css';  

const ToDoList01 = ({isOpen, toggle}) => {

  return (

    <div>

      <Text_Container>
        <Text_Wrapper>
          
          <Heading_1>
          </Heading_1>

          <Text_Bold_Gradient>
           To Do List: 
          </Text_Bold_Gradient>


          <Text_1>
          🌎 Build Post Page
          </Text_1>


          <Text_1>
          🌎 Build Mint Page
          </Text_1>
          

          <Text_1>
          🔊 +User Interface Sounds
          </Text_1>
          
          <Text_1>
          🔥 +Modal Pop-Up
          </Text_1>

           <Text_1>
          ⏏️ +Button / Hook Development page
          </Text_1>

           <Text_1>
           💿 +ABI / Smart Contract Connection
          </Text_1>

          <Text_1>
          👁️‍🗨️ +Data Scraping on Chain (Cronos EVM)
          </Text_1>

          <Text_1>
          🧪 +Smart Contract Testing
          </Text_1>

          <Spaced_Text2>
          </Spaced_Text2>
          <Text_1>
              Implement new UI updates: 
          </Text_1>

           <Text_1>
              https://www.npmjs.com/package/react-toastify
          </Text_1>

          <Text_1>
              https://www.npmjs.com/package/react-pure-modal
          </Text_1>


           <Text_1>
              Figma for styling!
          </Text_1>


          


          <Spaced_Text>
          </Spaced_Text>
          <h2>
           Created with React⚛️ Vite⚡ & Ethers🌐
          </h2>


     
        </Text_Wrapper>
      </Text_Container>

      
    </div>


     )

}


export default ToDoList01

