import React from 'react';
import ReactDOM from 'react-dom';
import AddSolutionForm from './AddSolutionForm';
import { shallow } from 'enzyme';
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

  it('should have text field for tags', () => {
    const wrapper = shallow(<AddSolutionForm />);
    const tagsTextField = wrapper.find('.tags');
    expect(tagsTextField.length).toBe(1);
  });

  it('should have text field for description', () => {
    const wrapper = shallow(<AddSolutionForm />);
    const descriptionTextField = wrapper.find('.description');
    expect(descriptionTextField.length).toBe(1);
  });
  it('description field shoul be multiline', () => {
    const wrapper = shallow(<AddSolutionForm />);
    const descriptionTextField = wrapper.find('.description');
    expect(descriptionTextField.first().props().multiline).toBe(true);
  });

  it('should save value input into title in variable titleInputValue', () => {
    const wrapper = shallow(<AddSolutionForm />);
    const tilteTextField = wrapper.find('.title');
    tilteTextField.first().simulate('change', { target: { value: 'test' } });
    expect(wrapper.state().titleInputValue).toBe('test');
  });

  it('should have back button', () => {
    const wrapper = shallow(<AddSolutionForm />);
    const backButton = wrapper.find('.back-button');
    expect(backButton.length).toBe(1);
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
      description: '',
      tags: ''
    });
  });
});
