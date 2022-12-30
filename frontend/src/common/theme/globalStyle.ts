import { createGlobalStyle } from 'styled-components';

/* CSS prevalence order
1. Component
2. GlobalStyle
3. Other CSS
*/

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.white };
    font-size: 14px;
    color: ${props => props.theme.colors.black};
    font-family: Helvetica Neue,Helvetica,Roboto,sans-serif;
  }
`;