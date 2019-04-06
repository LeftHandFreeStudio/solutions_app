import React from 'react';
import { Dashboard } from './Dashboard';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import '../../setupTests';
const routerWrappedComp = (
  <MemoryRouter>
    <Dashboard />
  </MemoryRouter>
);

function setup() {
  return shallow(routerWrappedComp);
}

describe('Dashboard', () => {
  beforeEach(() => {});
  it('renders without crashing', () => {
    setup();
  });

  it("should't show add solution button if not logged in ", () => {
    const wrapper = setup();
    const newSolutionButton = wrapper.find('.new-solution-button');
    expect(newSolutionButton.length).toBe(0);
  });
});
