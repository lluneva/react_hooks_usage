import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Fascinate+Inline|Open+Sans&display=swap');
body{
  background: #553055;
    padding: 0;
    margin: 0;
    font-family: ${props => props.theme.bodyFont};
    width: 100%;
   box-sizing: border-box;
}
`;
