import React from 'react';
import ReactDOM from 'react-dom';
import Solution from './Solution';

describe('Solution', () => {
  beforeEach(() => {
    props = {
      solution: undefined,
      index: undefined
    };
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Solution />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
