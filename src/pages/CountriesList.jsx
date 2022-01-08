import React, { useState, useEffect } from 'react';
import { Main } from '../components/Main.jsx';
import Controls from '../components/Controls.jsx';
import { AllCountriesList } from '../components/AllCountriesList.jsx';
import { Card } from '../components/Card';
import Loader from 'react-js-loader';

function CountriesList({countries, setCountries, fetchCountries, countriesIsLoad, countriesLoadError}) {
  return (
    <>
      <Main>
        <Controls />
        <AllCountriesList countriesIsLoad={countriesIsLoad}>
          {countriesIsLoad  ? (
            countries.map((i) => {
              let countryInfo = {
                img: i.flags.png,
                name: i.name,
                // TODO записать этот кусок кода в полезные кейсы. Используеться массив, потому что данных может быть сколько угодно
                info: [
                  { title: 'Population', description: i.population.toLocaleString() },
                  { title: 'Capital', description: i.capital },
                  { title: 'Region', description: i.region },
                ],
              };
              return <Card key={i.name} {...countryInfo} />;
            })
          ) : (
            <Loader type="rectangular-ping" bgColor={'#0d7b92'} size={100} />
          )}
        </AllCountriesList>
      </Main>
    </>
  );
}

export default CountriesList;
