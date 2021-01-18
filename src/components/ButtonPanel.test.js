import React from 'react';
import renderer from 'react-test-renderer';
import ButtonPanel from './ButtonPanel';

test('Renders the buttonPanel on the Page', () => {
  const btnPanel = renderer.create(<ButtonPanel clickHandler={() => 'something'} />).toJSON();

  expect(btnPanel).toMatchSnapshot();
});
