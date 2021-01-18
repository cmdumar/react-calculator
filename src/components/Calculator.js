import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

function Calculator() {
  const [data, setData] = useState({ total: null, next: null, operation: null });

  const handleClick = buttonName => {
    const { total, next, operation } = data;
    setData(calculate({ total, next, operation }, buttonName));
  };

  const { total, next } = data;
  return (
    <div className="container">
      <Display result={`${next}` || `${total}` || '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
}

export default Calculator;
