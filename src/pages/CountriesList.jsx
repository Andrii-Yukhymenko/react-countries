import React, { useState, useEffect } from 'react';
import { Main } from '../components/Main.jsx';
import Controls from '../components/Controls.jsx';
import RCServices from '../services';
import { AllCountriesList } from '../components/AllCountriesList.jsx';
import { Card } from '../components/Card';
import { useFetching } from '../hooks/useFetching';
import Loader from 'react-js-loader';

const services = new RCServices();

function CountriesList() {
  const [countries, setCountries] = useState([]);
  const [fetchCountries, countriesIsLoad, countriesLoadError] = useFetching(() => {
    services.getAllCountries().then((response) => setCountries(response));
  });

  useEffect(() => {
    fetchCountries();
  }, []);

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
