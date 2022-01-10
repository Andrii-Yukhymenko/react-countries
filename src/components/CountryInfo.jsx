import React from 'react';
import BorderCountries from './BorderCountries';
import styled from "styled-components";

const S_Wrapper = styled.div`
  width: 50%;
  margin-left: 5em;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 70%;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;
const S_CountryName = styled.h1`
  margin-bottom: 1.5em;
  font-size: 20px;
  font-weight: bold;
`;
const S_Lists = styled.div`
  display: flex;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;
const S_List = styled.ul`
  margin-bottom: 50px;
  margin-right: 50px;
  &:nth-last-child(1) {
    margin-right: 0;
  }
`;
const S_Item = styled.li`
  padding: 5px 0;
`;

function CountryInfo({borders, fullBorders, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages}) {
  return (
    <S_Wrapper>
      <S_CountryName>{name}</S_CountryName>
      <S_Lists>
        <S_List>
          <S_Item>
            <b>Native Name: </b>
            <span>{nativeName}</span>
          </S_Item>
          <S_Item>
            <b>Population: </b>
            <span>{population}</span>
          </S_Item>
          <S_Item>
            <b>Region: </b>
            <span>{region}</span>
          </S_Item>
          <S_Item>
            <b>Sub Region: </b>
            <span>{subregion}</span>
          </S_Item>
          <S_Item>
            <b>Capital: </b>
            <span>{capital}</span>
          </S_Item>
        </S_List>
        <S_List>
          <S_Item>
            <b>Top Level Domain: </b>
            <span>{topLevelDomain.map((i) => i).join(', ')}</span>
          </S_Item>
          <S_Item>
            <b>Currencies: </b>
            <span>{currencies.map((i) => i.name).join(', ')}</span>
          </S_Item>
          <S_Item>
            <b>Language: </b>
            <span>{languages.map((i) => i.name).join(', ')}</span>
          </S_Item>
        </S_List>
      </S_Lists>
      <BorderCountries borders={borders} fullBorders={fullBorders} />
    </S_Wrapper>
  );
}

export default CountryInfo;
