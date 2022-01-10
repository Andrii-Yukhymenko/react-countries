import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Search } from './Search.jsx';
import { CustomSelect } from './CustomSelect.jsx';

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'Americas', label: 'Americas' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
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
const Controls = ({filterCountries}) => {
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('');
  useEffect(() => filterCountries(search, select), [search, select]);

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by region"
        isClearable={false}
        isSearchable={false}
        onChange={(e) => setSelect(e.value)}
      />
    </Wrapper>
  );
};

export default Controls;
