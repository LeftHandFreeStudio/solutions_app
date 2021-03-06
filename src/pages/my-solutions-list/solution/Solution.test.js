import React from 'react';
import ReactDOM from 'react-dom';
import Solution from './Solution';
import { shallow } from 'enzyme';
import '../../../setupTests';

describe('Solution', () => {
  let testSolution = {
    tags: 'java, angular',
    description: 'test description'
  };
  let defaultProps;
  beforeEach(() => {
    defaultProps = {
      solution: testSolution,
      index: 1
    };
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Solution solution={defaultProps.solution} index={defaultProps.index} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it(' should show solution description ', () => {
    const wrapper = shallow(
      <Solution solution={defaultProps.solution} index={defaultProps.index} />
    );
    const description = wrapper.find('.description');
    expect(description.length).toBe(1);
  });

  it(' increments received solution index by one ', () => {
    defaultProps.index = 2;
    const wrapper = shallow(
      <Solution solution={defaultProps.solution} index={defaultProps.index} />
    );
    const indexParagraph = wrapper
      .find('div')
      .children()
      .first();
    expect(indexParagraph.text()).toBe('3');
  });

  it(' displays correct info about solution ', () => {
    defaultProps.solution.tags = 'angular rocks';
    defaultProps.solution.description = 'test description';
    const wrapper = shallow(
      <Solution solution={defaultProps.solution} index={defaultProps.index} />
    );
    const tagsParagraph = wrapper.find('.tags-info');
    expect(tagsParagraph.length).toBe(1);
    expect(tagsParagraph.text()).toBe('angular rocks');

    const descriptionParagraph = wrapper.find('.description');
    expect(descriptionParagraph.length).toBe(1);
    expect(descriptionParagraph.text()).toBe('test description');
  });
});
