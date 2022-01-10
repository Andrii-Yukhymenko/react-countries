import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Main } from '../components/Main';
import { IoArrowBackOutline } from 'react-icons/io5';
import RCServices from '../services';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import Loader from 'react-js-loader';
import MyButton from '../components/MyButton';
import '../styles/variables.scss';
import CountryInfo from '../components/CountryInfo';

const S_Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const S_CountryFlag = styled.img`
  width: 50%;
  margin-right: 5em;

  @media (max-width: 768px) {
    margin-right: 0;
    width: 70%;
    margin-bottom: 40px;
  }

  @media (max-width: 425px) {
    width: 100%;
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
    setFullBorders(response);
  });
  useEffect(async () => {
    await fetchCountry();
  }, []);
  useEffect(async () => {
    await fetchFullBorders();
  }, [country]);

  const { flags , borders } = country;

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
          <CountryInfo borders={borders} fullBorders={fullBorders} {...country} />
        </S_Content>
      ) : (
        <Loader type="rectangular-ping" bgColor={'#0d7b92'} size={100} />
      )}
    </Main>
  );
}

export default Country;
