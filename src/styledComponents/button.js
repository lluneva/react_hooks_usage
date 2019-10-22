import styled from "styled-components";

export default styled.input`
  width: 49%;
  box-sizing: border-box;
  background-color: ${props => (props.primary ? "#eee" : "rgba(220,2,74)")};
  display: block;
  padding: 6px 20px;
  border: 0;
  :hover {
    background-color: ${props => (props.primary ? "rgba(100,2,74)" : "#eee6")};
    color: ${props => (props.primary ? "white" : "yellow")};

  }
`;
