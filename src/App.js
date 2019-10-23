import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./theme/globalStyle"
import ClicksCounterSection from "./components/ClicksCounterSection"
import BookListSection from "./components/BookListSection"
import ShoppingSection from "./components/ShoppingSection"
const theme = {
  headerFont: "Fascinate Inline",
  bodyFont: "Open Sans"
}
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
  )
}

export default App

export const Wrapper = styled.div`
  background: #4c2a4c;
  margin: 20px auto;
  width: 90%;
  max-width: 700px;
  color: #eee;
  /* font-family: ${(props) => props.theme.fontFam}; */
`
export const SectionWrapper = styled.section`
  margin: 2rem auto;
  padding: 1rem;
  border-radius: 5px;
  :nth-of-type(2n + 1) {
    background: teal;
  }

  :nth-of-type(2n) {
    background: orangered;
  }
`
