import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import { Main } from './components/Main.jsx';
import Controls from './components/Controls.jsx';
import { RCServices } from './services';
import { CountriesList } from './components/CountriesList';
import { Card } from './components/Card';

const services = new RCServices();

function App() {
  const [countries, setCountries] = useState([]);
  console.log(countries);
  useEffect(() => {
    services.getAllCountries().then((response) => setCountries(response));
  }, []);
  return (
    <>
      <Header />
      <Main>
        <Controls />
        <CountriesList>
          {countries.map((i) => {
            let countryInfo = {
              img: i.flags.png,
              name: i.name,
              info: [
                { title: 'Population', description: i.population.toLocaleString() },
                { title: 'Capital', description: i.capital },
                { title: 'Region', description: i.region },
              ],
            };
            return <Card key={i.name} {...countryInfo} />;
          })}
        </CountriesList>
      </Main>
    </>
  );
}

export default App;
