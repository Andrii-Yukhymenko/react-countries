import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CountriesList from './pages/CountriesList';
import NotFound from './pages/NotFound';
import Country from './pages/Country';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route path="/:countryId" element={<Country />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
