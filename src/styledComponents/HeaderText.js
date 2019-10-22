import styled from "styled-components";

export default styled.h1`
  margin: 10px 0;
  font-family: ${props => (props.font ? props.theme.font : "Arial")};
`;
