import React from 'react';
import ReactDOM from 'react-dom';
import MySolutionsList from './MySolutionsList';
import { shallow } from 'enzyme';
import Solution from './solution/Solution';
import '../../setupTests';

describe('MySolutionsList', () => {
  const solution1 = {
    id: 1,
    tags: 'test tag 1',
    description: 'test descritpion 1'
  };
  const solution2 = {
    id: 2,
    tags: 'test tag 2',
    description: 'test descritpion 2'
  };
  const testSolutions = [solution1, solution2];
  let defaultProps;
  beforeEach(() => {
    defaultProps = {
      solutionsList: testSolutions
    };
  });
  it('renders without crashing even without props', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MySolutionsList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render correct number of solutions', () => {
    const wrapper = shallow(
      <MySolutionsList solutionsList={defaultProps.solutionsList} />
    );
    const solutions = wrapper.find(Solution);
    expect(solutions.length).toBe(2);
  });

  it('should not render user name info when solutions list empy', () => {
    const wrapper = shallow(<MySolutionsList solutionsList={[]} />);
    const userInfoParagraph = wrapper.find('.user-info');
    expect(userInfoParagraph.text()).toBe('');
  });

  it('should render user info when solutions list not empty', () => {
    defaultProps.solutionsList[0].user = 'max';
    const wrapper = shallow(
      <MySolutionsList solutionsList={defaultProps.solutionsList} />
    );
    const userInfoParagraph = wrapper.find('.user-info');
    expect(userInfoParagraph.length).toBe(1);
    expect(userInfoParagraph.text()).toBe('Solutions from user : max');
  });
});
