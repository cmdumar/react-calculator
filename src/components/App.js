import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

function App() {
  const [data, setData] = useState({ total: null, next: null, operation: null });

  const handleClick = buttonName => {
    const { total, next, operation } = data;
    setData(calculate({ total, next, operation }, buttonName));
  };

  const { total, next } = data;
  return (
    <>
      <Display result={next || total || 0} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
}

export default App;
