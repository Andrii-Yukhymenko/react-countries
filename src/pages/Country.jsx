import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Main } from '../components/Main';
import { IoArrowBackOutline } from 'react-icons/io5';
import RCServices from '../services';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import Loader from 'react-js-loader';
import MyButton from '../components/MyButton';
import '../styles/variables.scss';

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
const S_InfoLists = styled.div`
  display: flex;
`;
const S_InfoList = styled.ul`
  margin-bottom: 50px;
  margin-right: 50px;
  &:nth-last-child(1) {
    margin-right: 0;
  }
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
  background-color: rgba(34, 60, 80, 0.6);
  border-radius: 3px;
`;
const S_BorderCountriesItem = styled.li`
  background-color: var(--colors-ui-base);
  padding: 5px 10px;
  border-radius: 3px;
  margin-right: 5px;
  &:nth-child(1) {
    margin-left: 5px;
  }
`;

function Country() {
  let [country, setCountry] = useState({});
  let [fullBorders, setFullBorders] = useState([]);
  const { countryId } = useParams();

  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const Services = new RCServices();
  let [fetchCountry, countryIsLoad, countryLoadError] = useFetching(async () => {
    let response = await Services.getCountry(countryId);
    const [res] = response;
    setCountry(res);
  });
  let [fetchFullBorders, fullBordersIsLoad, fullBordersLoadError] = useFetching(async () => {
    let response = await Services.getByCodes(borders);
    console.log(response);
    setFullBorders(response);
  });
  useEffect(async () => {
    await fetchCountry();
  }, []);
  useEffect(async () => {
    await fetchFullBorders();
    console.log('fullBorders: ' + fullBorders);
  }, [country]);

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
      <MyButton
        style={{
          marginBottom: 50,
          borderRadius: 'var(--radii)',
          backgroundColor: 'var(--colors-ui-base)',
          boxShadow: 'var(--shadow)',
        }}
        callBack={goBack}>
        <IoArrowBackOutline style={{ marginRight: 7 }} /> Back
      </MyButton>
      {countryIsLoad && fullBordersIsLoad ? (
        <S_Content>
          <S_CountryFlag src={flags.png} />
          <S_CountryInfo>
            <S_CountryName>{name}</S_CountryName>
            <S_InfoLists>
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
            </S_InfoLists>
            <S_BorderCountries>
              <S_BorderCountriesTitle>Border Countries:</S_BorderCountriesTitle>
              <S_BorderCountriesList>
                {borders.length !== 0 ? (
                  fullBorders.map((i) => (
                    <a key={i.name} href={'/' + i.name}>
                      <S_BorderCountriesItem>{i.alpha3Code}</S_BorderCountriesItem>
                    </a>
                  ))
                ) : (
                  <S_BorderCountriesItem>None</S_BorderCountriesItem>
                )}
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
