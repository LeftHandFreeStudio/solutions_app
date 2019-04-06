import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import '../setupTests';

it('renders without crashing', () => {
  shallow(<App />);
});
