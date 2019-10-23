import React, { useContext } from "react"
import styled from "styled-components"
import { ClickContext } from "../contexts/ClickContext"
import ButtonsWrapper from "../styledComponents/ButtonsWrapper"

const ClickMe = () => {
  const counter = 0;
  const { dispatch } = useContext(ClickContext)
  return (
    <React.Fragment>
      <ButtonsWrapper>
        <ClickButton onClick={() => dispatch({ type: "ADD_CLICK", counter })}>
          click me to +1
      </ClickButton>
        <ClickButton onClick={() => dispatch({ type: "REMOVE_CLICK", counter })}>
          click me to  -1
      </ClickButton>
      </ButtonsWrapper>
      <ClickButton onClick={() => dispatch({ type: "CLEAR_RESULT", counter })}>clear result</ClickButton>
    </React.Fragment>

  )
}

export default ClickMe

export const ClickButton = styled.button`
  flex: 1;
  :first-of-type {
    margin: 1rem 5px 1rem 0;
  }
  :last-of-type {
    margin: 1rem 0 1rem 5px;
  }
  box-sizing: border-box;
  background-color: rgba(220, 2, 74);
  color: white;
  padding: 6px 20px;
  border: 0;
  white-space: pre-line;
  border-radius: 5px;
  :hover {
    background-color: wheat;
    color: rgba(220, 2, 74);
  }
`