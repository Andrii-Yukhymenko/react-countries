import React, { useState, useEffect } from 'react';
import { Main } from '../components/Main.jsx';
import Controls from '../components/Controls.jsx';
import RCServices from '../services';
import { AllCountriesList } from '../components/AllCountriesList.jsx';
import { Card } from '../components/Card';

const services = new RCServices();

function CountriesList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    services
      .getAllCountries()
      .then((response) => setCountries(response))
      .then(() => console.log(countries));
  }, []);

  return (
    <>
      <Main>
        <Controls />
        <AllCountriesList>
          {console.log('Компонент обновлен')}
          {countries.map((i) => {
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
          })}
        </AllCountriesList>
      </Main>
    </>
  );
}

export default CountriesList;
