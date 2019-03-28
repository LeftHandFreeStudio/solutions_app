import React from 'react';
import ReactDOM from 'react-dom';
import AddSolutionForm from './AddSolutionForm';
import { shallow } from 'enzyme';
import { TextField } from '@material-ui/core';
import '../setupTests';

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

  it('should have button for adding new step', () => {
    const wrapper = shallow(<AddSolutionForm />);
    const newStepButton = wrapper.find('.new-step-button');
    expect(newStepButton.length).toBe(1);
  });

  it('should save value input into title in variable titleInputValue', () => {
    const wrapper = shallow(<AddSolutionForm />);
    const tilteTextField = wrapper.find('.title');
    tilteTextField.first().simulate('change', { target: { value: 'test' } });
    expect(wrapper.state().titleInputValue).toBe('test');
  });

  it('renders without crashing even without props', () => {
    const saveSolutionStub = jest.fn();
    const wrapper = shallow(
      <AddSolutionForm saveSolution={saveSolutionStub} />
    );
    const saveButton = wrapper.find('.save-button');
    saveButton.first().simulate('click');
    expect(saveSolutionStub).toHaveBeenCalledWith({
      title: '',
      description: '',
      tags: ''
    });
  });
});
