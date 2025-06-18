import { useState } from 'react';

import './App.css';
import Header from './components/Header';

function App() {
  const [lang, setLang] = useState('LAT');

  return (
    <>
      <Header lang={lang} setLang={setLang} />
    </>
  );
}

export default App;
