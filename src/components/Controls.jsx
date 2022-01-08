import React, { useState } from 'react';
import styled from 'styled-components';
import { Search } from './Search.jsx';
import { CustomSelect } from './CustomSelect.jsx';

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europa', label: 'Europa' },
  { value: 'Oceania', label: 'Oceania' },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    & > * {
      width: 100%;
    }
  }
`;
const Controls = () => {
  const [search, setSearch] = useState('');
  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by region"
        isClearable={true}
        isSearchable={false}
      />
    </Wrapper>
  );
};

export default Controls;
