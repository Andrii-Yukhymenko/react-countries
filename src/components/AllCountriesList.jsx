import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 2rem 0;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width: 425px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    padding: 2.5rem 0;
  }

  @media (min-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 2.5rem 0;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
  }
`;

export const AllCountriesList = ({ children, countriesIsLoad }) => {
  return (
    <Wrapper style={countriesIsLoad ? { display: 'grid' } : { display: 'block' }}>
      {children}
    </Wrapper>
  );
};
