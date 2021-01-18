import React from 'react';
import renderer from 'react-test-renderer';
import Display from './Display';

test('Display Component for displaying the calculations', () => {
  const display = renderer.create(<Display result="222" />).toJSON();

  expect(display).toMatchSnapshot();
});
