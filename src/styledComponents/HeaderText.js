import styled from "styled-components";

export default styled.h1`
  margin: 10px 0;
  font-family: ${props => (props.theme.headerFont ? props.theme.headerFont : "Arial")};
  font-size: 2.5rem;
  text-align: center;
 
`;
