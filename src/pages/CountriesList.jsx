import React, { useEffect, useState } from 'react';
import { Main } from '../components/Main.jsx';
import Controls from '../components/Controls.jsx';
import { AllCountriesList } from '../components/AllCountriesList.jsx';
import { Card } from '../components/Card';
import Loader from 'react-js-loader';

function CountriesList({
  countries,
  setCountries,
  fetchCountries,
  countriesIsLoad,
  countriesLoadError,
}) {
  const [filteredCountries, setFilteredCountries] = useState([]);
  const filterCountries = (search, select) => {
    let data = [...countries];
    if (search) {
      data = data.filter((i) => i.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (select) {
      data = data.filter((i) => i.region.includes(select));
    }
    setFilteredCountries(data);
    console.log('Push');
  };
  useEffect(() => setFilteredCountries([...countries]), [countries]);
  useEffect(() => console.log(filteredCountries), [filteredCountries]);
  return (
    <Main>
      <Controls filterCountries={filterCountries} />
      <AllCountriesList countriesIsLoad={countriesIsLoad}>
        {countriesIsLoad ? (
          filteredCountries.map((i) => {
            let countryInfo = {
              img: i.flags.png,
              name: i.name,
              // TODO записать этот кусок кода в полезные кейсы. Используеться массив, потому что данных может быть сколько угодно
              info: [
                { title: 'Population', description: i.population.toLocaleString() },
                { title: 'Capital', description: i.capital ? i.capital : '-' },
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
  );
}

export default CountriesList;
