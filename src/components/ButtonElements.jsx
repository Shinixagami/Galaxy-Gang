import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button1 = styled(Link)`

background: ${({primary}) => (primary ? '#01BF71' : '#010606')}

white-space: nowrap;
padding: ${({big}) => (big ? '14px 48p' : '12px 30px')};
color ${({dark}) => (dark ? '#010606' : '#fff')};

font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};

border-radius: 50px; 

outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s eas-in-out;

&:hover{

    transition: all 0.4s eas-in-out;

    background: ${({primary}) => (primary ? '#fff' : '#01BF71')};

    }

`
