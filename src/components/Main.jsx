import React from 'react';
import styled from 'styled-components';
import { Container } from './Container.jsx';
import { Search } from './Search';
import {CustomSelect} from "./CustomSelect";

const Wrapper = styled.main`
  padding: 2rem 0;

  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`;

export const Main = () => {
  return (
    <Wrapper>
      <Container>
        <Search />
        <CustomSelect/>
        {/*{children}*/}
      </Container>
    </Wrapper>
  );
};
