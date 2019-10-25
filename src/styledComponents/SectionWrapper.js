import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 1rem;
  border-radius: 5psx;
  :nth-of-type(2n + 1) {
    background: teal;
  }

  :nth-of-type(2n) {
    background: orangered;
  }
`;
