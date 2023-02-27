import React from 'react'
import ReactDOM from 'react-dom'
import './styles/App.css'
import App from './App'

const appId = "Noyxf1718roalvWTaJjCvPSTeeJX6tK7WEhon2Kb"
const serverUrl = "https://3tilbikvvtox.usemoralis.com:2053/server"


//How to fix moralis 
//Link https://github.com/MoralisWeb3/react-moralis/issues/229

/* npm i --save-dev events    */

import { MoralisProvider } from "react-moralis";

ReactDOM.render(

  <React.StrictMode>
    
    <MoralisProvider appId= {appId} serverUrl= {serverUrl} >
      <App />
    </MoralisProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
)
