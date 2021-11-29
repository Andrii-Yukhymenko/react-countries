import React from 'react';
import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

const InputContainer = styled.label`
  //background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  width: 100%;

  border-radius: var(--radii);
  box-shadow: var(--shadow);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    width: 280px;
  }
`;
const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})`
  margin-left: 2rem;
  border: none;
  background-color: var(--colors-bg);
  color: var(--colors-text);
`;

export const Search = (search, setSearch) => {
  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={(e) => setSearch(e.target.value)} value={search} />
    </InputContainer>
  );
};
