import React from 'react';
import ReactDOM from 'react-dom';
import AddSolutionForm from './AddSolutionForm';
import { shallow } from 'enzyme';
import '../setupTests';
import { wrap } from 'module';
import Step from './step/Step';

describe('AddSolutionForm', () => {
  let defaultProps;
  beforeEach(() => {
    defaultProps = {};
  });

  it('renders without crashing even without props', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddSolutionForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should have text field for solution title', () => {
    const wrapper = shallow(<AddSolutionForm />);
    const tilteTextField = wrapper.find('.title');
    expect(tilteTextField.length).toBe(1);
  });

  it('should have text field for tags', () => {
    const wrapper = shallow(<AddSolutionForm />);
    const tagsTextField = wrapper.find('.tags');
    expect(tagsTextField.length).toBe(1);
  });

  it('should have button for adding new step', () => {
    const wrapper = shallow(<AddSolutionForm />);
    const newStepButton = wrapper.find('.new-step-button');
    expect(newStepButton.length).toBe(1);
  });

  it('should new step button should push step to steps in state', () => {
    const wrapper = shallow(<AddSolutionForm />);
    const newStepButton = wrapper.find('.new-step-button');
    const cachedStepSize = wrapper.state().steps.length;
    newStepButton.first().simulate('click');

    expect(wrapper.state().steps.length).toBe(cachedStepSize + 1);
  });

  it('shouldnt allow more than 10 steps', () => {
    const wrapper = shallow(<AddSolutionForm />);
    wrapper.setState({
      steps: ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
    });
    const newStepButton = wrapper.find('.new-step-button');
    const cachedStepSize = wrapper.state().steps.length;
    newStepButton.first().simulate('click');

    expect(wrapper.state().steps.length).toBe(cachedStepSize);
  });

  it('should render steps according to number of steps', () => {
    const wrapper = shallow(<AddSolutionForm />);
    wrapper.setState({ steps: ['x', 'x', 'x'] });
    const steps = wrapper.find(Step);
    expect(steps.length).toBe(3);
  });

  it('should save value input into title in variable titleInputValue', () => {
    const wrapper = shallow(<AddSolutionForm />);
    const tilteTextField = wrapper.find('.title');
    tilteTextField.first().simulate('change', { target: { value: 'test' } });
    expect(wrapper.state().titleInputValue).toBe('test');
  });

  it('should send form data to callback function', () => {
    const saveSolutionStub = jest.fn();
    const wrapper = shallow(
      <AddSolutionForm saveSolution={saveSolutionStub} />
    );
    const saveButton = wrapper.find('.save-button');
    saveButton.first().simulate('click');
    expect(saveSolutionStub).toHaveBeenCalledWith({
      title: '',
      steps: [],
      tags: ''
    });
  });
});
