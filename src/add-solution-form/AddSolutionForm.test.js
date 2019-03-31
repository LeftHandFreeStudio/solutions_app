import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import AddSolutionForm from './AddSolutionForm';
import { shallow, mount, render } from 'enzyme';
import '../setupTests';

const routerWrappedComp = (
  <MemoryRouter>
    <AddSolutionForm />
  </MemoryRouter>
);

describe('AddSolutionForm', () => {
  let defaultProps;
  beforeEach(() => {
    defaultProps = {};
  });

  it('renders without crashing even without props', () => {
    const div = document.createElement('div');
    ReactDOM.render(routerWrappedComp, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should have text field for solution title', () => {
    const wrapper = mount(routerWrappedComp);
    const tilteTextField = wrapper.find('TextField.title');
    expect(tilteTextField.length).toBe(1);
  });

  it('should have text field for tags', () => {
    const wrapper = mount(routerWrappedComp);
    const tagsTextField = wrapper.find('TextField.tags');
    expect(tagsTextField.length).toBe(1);
  });

  it('should have text field for description', () => {
    const wrapper = mount(routerWrappedComp);
    const descriptionTextField = wrapper.find('TextField.description');
    expect(descriptionTextField.length).toBe(1);
  });
  it('description field shoul be multiline', () => {
    const wrapper = mount(routerWrappedComp);
    const descriptionTextField = wrapper.find('TextField.description');
    expect(descriptionTextField.first().props().multiline).toBe(true);
  });

  it('should save value input into title in variable titleInputValue', () => {
    const wrapper = mount(routerWrappedComp);
    const comp = wrapper.find('AddSolutionForm');
    const tilteTextField = comp.find('TextField.title');

    tilteTextField.props().onChange({ target: { value: 'test' } });
    expect(comp.first().state().titleInputValue).toBe('test');
  });

  it('should have back button', () => {
    const wrapper = mount(routerWrappedComp);
    const backButton = wrapper.find('Button.back-button');
    expect(backButton.length).toBe(1);
  });

  it('should send form data to callback function', () => {
    const saveSolutionStub = jest.fn();
    const wrapper = mount(
      <MemoryRouter>
        <AddSolutionForm saveSolution={saveSolutionStub} />
      </MemoryRouter>
    );
    const saveButton = wrapper.find('Button.save-button');
    saveButton.first().simulate('click');
    expect(saveSolutionStub).toHaveBeenCalledWith({
      title: '',
      description: '',
      tags: ''
    });
  });
});
