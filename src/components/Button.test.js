import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

test('Renders button on the page', () => {
  const btn = renderer.create(<Button name="23" clickHandler={() => 'something'} />);

  expect(btn).toMatchSnapshot();
});
