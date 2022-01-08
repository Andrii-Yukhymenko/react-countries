import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CountriesList from './pages/CountriesList';
import NotFound from './pages/NotFound';
import Country from './pages/Country';
import Header from './components/Header';
import RCServices from './services';
import { useFetching } from './hooks/useFetching';

const services = new RCServices();

function App() {
  const [countries, setCountries] = useState([]);
  const [fetchCountries, countriesIsLoad, countriesLoadError] = useFetching(() => {
    services.getAllCountries().then((response) => setCountries(response));
  });

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <CountriesList
              countries={countries}
              setCountries={setCountries}
              fetchCountries={fetchCountries}
              countriesIsLoad={countriesIsLoad}
              countriesLoadError={countriesIsLoad}
            />
          }
        />
        <Route path="/:countryId" element={<Country />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
