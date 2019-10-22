import React from "react";
import BookContextProvider from "./contexts/BookContext";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import styled, { ThemeProvider } from "styled-components";
const theme = {
  font: "Hack",
  fontFam: "sans-serif"
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper className='App'>
        <BookContextProvider>
          <Navbar />
          <BookList />
          <BookForm />
        </BookContextProvider>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

export const Wrapper = styled.div`
  background: #4c2a4c;
  margin: 20px auto;
  width: 90%;
  max-width: 700px;
  color: #eee;
  font-family: ${props => props.theme.fontFam};
`;
