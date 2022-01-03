import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Main } from '../components/Main';
import { IoArrowBackOutline } from 'react-icons/io5';
import RCServices from '../services';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import Loader from 'react-js-loader';

const S_BackButton = styled.button``;
const S_Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const S_CountryFlag = styled.img`
  width: 50%;
  padding-right: 50px;
`;
const S_CountryInfo = styled.div`
  width: 50%;
  padding-left: 50px;
`;
const S_CountryName = styled.h1`
  margin-bottom: 20px;
`;
const S_InfoList = styled.ul`
  margin-bottom: 50px;
`;
const S_InfoItem = styled.li`
  padding: 5px 0;
`;
const S_BorderCountries = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const S_BorderCountriesTitle = styled.p`
  margin-right: 10px;
`;
const S_BorderCountriesList = styled.ul`
  display: flex;
  align-items: center;
  padding: 5px;
  background-color: #0d9256;
  border-radius: 3px;
`;
const S_BorderCountriesItem = styled.li`
  background-color: #d72424;
  padding: 5px 10px;
  border-radius: 3px;
  margin-right: 5px;
  &:nth-child(1) {
    margin-left: 5px;
  }
`;

function Country() {
  let [country, setCountry] = useState({ name: 'sss' });
  const { countryId } = useParams();
  console.log(countryId);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const Services = new RCServices();
  let [fetchCountry, countryIsLoad, countryLoadError] = useFetching(async () => {
    let response = await Services.getCountry(countryId);
    const [res] = response;
    setCountry(res);
  });
  useEffect(() => {
    fetchCountry();
  }, []);
  const {
    flags,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    name,
    languages,
    borders,
  } = country;

  return (
    <Main>
      <S_BackButton onClick={() => goBack()}>
        <IoArrowBackOutline /> Back
      </S_BackButton>
      {countryIsLoad === true ? (
        <S_Content>
          <S_CountryFlag src={flags.png} />
          <S_CountryInfo>
            <S_CountryName>{name}</S_CountryName>
            <S_InfoList>
              <S_InfoItem>
                <b>Native Name: </b>
                <span>{nativeName}</span>
              </S_InfoItem>
              <S_InfoItem>
                <b>Population: </b>
                <span>{population}</span>
              </S_InfoItem>
              <S_InfoItem>
                <b>Region: </b>
                <span>{region}</span>
              </S_InfoItem>
              <S_InfoItem>
                <b>Sub Region: </b>
                <span>{subregion}</span>
              </S_InfoItem>
              <S_InfoItem>
                <b>Capital: </b>
                <span>{capital}</span>
              </S_InfoItem>
            </S_InfoList>
            <S_InfoList>
              <S_InfoItem>
                <b>Top Level Domain: </b>
                {topLevelDomain.map((i) => (
                  <span key={i}>{i}</span>
                ))}
              </S_InfoItem>
              <S_InfoItem>
                <b>Currencies: </b>
                {currencies.map((i) => (
                  <span key={i.name}>{i.name}</span>
                ))}
              </S_InfoItem>
              <S_InfoItem>
                <b>Language: </b>
                {languages.map((i) => (
                  <span key={i.name}>{i.name}</span>
                ))}
              </S_InfoItem>
            </S_InfoList>
            <S_BorderCountries>
              <S_BorderCountriesTitle>Border Countries:</S_BorderCountriesTitle>
              <S_BorderCountriesList>
                {borders.map((i) => (
                  <S_BorderCountriesItem key={i}>{<Link to="/">{i}</Link>}</S_BorderCountriesItem>
                ))}
              </S_BorderCountriesList>
            </S_BorderCountries>
          </S_CountryInfo>
        </S_Content>
      ) : (
        <Loader type="rectangular-ping" bgColor={'#0d7b92'} size={100} />
      )}
    </Main>
  );
}

export default Country;
