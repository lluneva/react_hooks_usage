import React, { useContext } from 'react';
import styled from 'styled-components';
import { ClickContext } from '../../contexts/ClickContext';

const ClicksResult = () => {
  const { counter } = useContext(ClickContext);

  return (
    <TitleText id="title">
      Clicks result: <span>{counter}</span>
    </TitleText>
  );
};

export default ClicksResult;

export const TitleText = styled.p`
  @import url('https://fonts.googleapis.com/css?family=Turret+Road&display=swap');
  background: #3d3d3d;
  text-align: center;
  line-height: 1;
  padding: 15px 0;
  box-shadow: inset 0 0 10px #000000;
  border-radius: 5px;
  font-family: 'Turret Road', cursive;
  font-size: 1.5rem;

  span {
    color: limegreen;
  }
`;
