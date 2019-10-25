import React from 'react';
import ClicksResult from './ClicksResult';
import ClickMe from './ClickMe';
import ClickContextProvider from '../contexts/ClickContext';
import { SectionWrapper } from '../styledComponents/SectionWrapper';
import HeaderText from '../styledComponents/HeaderText';

const ClicksCounterSection = () => (
  <SectionWrapper>
    <ClickContextProvider>
      <HeaderText>Clicks counter</HeaderText>
      <ClicksResult />
      <ClickMe />
    </ClickContextProvider>
  </SectionWrapper>
);

export default ClicksCounterSection;
