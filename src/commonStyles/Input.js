import styled from 'styled-components';

export const InputButton = styled.input`
  flex: 1;
  :first-of-type {
    margin: 10px 5px 10px 0;
  }
  :last-of-type {
    margin: 10px 0 10px 5px;
  }
  box-sizing: border-box;
  background-color: ${props => (props.primary ? '#eee' :
    (props.active ? "limegreen" : 'rgba(220,2,74)'))};
  
  color: ${props => (props.primary ? 'rgba(220,2,74)' : (props.active ? "#eee" : 'limegreen'))};
  padding: 6px 20px;
  border: 0;
  white-space: pre-line;
  border-radius: 5px;
  :hover {
    background-color: ${props => (props.primary ? 'rgba(100,2,74)' : '#eee6')};
    color: ${props => (props.primary ? 'white' : 'yellow')};
  }
`;

export const InputText = styled.input.attrs(props => ({
  type: 'text',
}))`
  width: 100%;
  line-height:2;
  box-sizing: border-box;
  margin: 6px 0;
  padding-left:5px;
  background: #3c1f3c;
  color: white;
  border: 0;
`;
