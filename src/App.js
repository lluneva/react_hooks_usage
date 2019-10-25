import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/globalStyle';
import ClicksCounterSection from './components/ClicksCounterSection';
import BookListSection from './components/BookListSection';
import ShoppingSection from './components/ShoppingSection';

const theme = {
  headerFont: 'Fascinate Inline',
  bodyFont: 'Open Sans',
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper className="App">
        <BookListSection />
        <ClicksCounterSection />
        <ShoppingSection />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

export const Wrapper = styled.div`
  background: #4c2a4c;
  padding: 20px;
  color: #eee;
  display: flex;
justify-content: center;
flex-wrap: wrap;
section{ width:30%;
min-width: 400px;
margin: 10px;}
  
  /* font-family: ${props => props.theme.fontFam}; */
`;


