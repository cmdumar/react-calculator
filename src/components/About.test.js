import React from 'react';
import renderer from 'react-test-renderer';
import About from './About';

test('About Page', () => {
  const tree = renderer.create(<About />).toJSON();
  expect(tree).toMatchSnapshot();
});
