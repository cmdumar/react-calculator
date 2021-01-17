import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

test('App Component', () => {
  const app = renderer.create(<App />).toJSON();

  expect(app).toMatchSnapshot();
});
