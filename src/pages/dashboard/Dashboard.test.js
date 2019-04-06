import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import { shallow } from 'enzyme';
import '../setupTests';

describe('Dashboard', () => {
  beforeEach(() => {});
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dashboard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should't show add solution button if not logged in ", () => {
    const wrapper = shallow(<Dashboard />);
    const newSolutionButton = wrapper.find('.new-solution-button');
    expect(newSolutionButton.length).toBe(0);
  });
});