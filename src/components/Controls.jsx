import React, { useState } from 'react';
import styled from "styled-components";
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
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
const MyComponent = () => {
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

export default MyComponent;
