import React from 'react';
import Header from './components/Header.jsx';
import { Main } from './components/Main.jsx';
import Controls from './components/Controls.jsx';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Controls />
      </Main>
    </>
  );
}

export default App;
