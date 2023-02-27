import styled from 'styled-components'

export const Text_Container = styled.div`

  display: flex; /*added*/
  flex-direction: column; /*added*/
  font-family: 'VT323', monospace;


  /* center align text */
  text-align: center;


  padding-bottom: 5%;


`



export const Text_Wrapper = styled.div`

  display: flex; /*added*/
  flex-direction: column; /*added*/

`


  
export const Heading_1 = styled.div`

  padding-top: 5%;

  font-size: 28px;
  font-family: 'Cabin';
  font-weight: bold;

  background: -webkit-linear-gradient(left, #46abe6, #2ad1b5, #46abe6);
  background-size: 200% 200%;
  
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
`




export const Text_1 = styled.div`

  display: block;
  color: white;

  font-size: 20px;
  font-family: 'VT323', monospace;
  text-align: center;

  text-shadow: 2px 4px 3px rgba(1,1,1,6);

`


export const Spaced_Text = styled.div`

  font-size: 20px;
  font-family: 'VT323', monospace;
  text-align: center;
  padding-right: 35px;
  
  padding-left: 35px;
  padding-bottom: 4%;

`
export const Spaced_Text2 = styled.div`

  padding-bottom: 5%;

`


export const Text_Break = styled.div`

  display: block;
  font-size: 20px;
  padding-top: 1px; 

`

export const Text_Bold_Gradient = styled.div`

  color: whitesmoke;
  text-shadow: 2px 4px 3px rgba(1,1,1,6);


  padding-top: 1px; 

  font-family: 'VT323', monospace;
  
  font-size: 200%;
  
  font-weight: bold;

  
`



export const Text_Image = styled.div`

  text-align: center;
  padding-bottom: 2%;
  padding-top: 2%;

`
