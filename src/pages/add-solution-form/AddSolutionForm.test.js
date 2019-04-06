import React from 'react';
import { AddSolutionForm } from './AddSolutionForm';
import { shallow } from 'enzyme';
import '../../setupTests';

function setup() {
  return shallow(<AddSolutionForm />);
}

describe('AddSolutionForm', () => {
  let defaultProps;
  beforeEach(() => {
    defaultProps = {};
  });

  it('renders without crashing even without props', () => {
    setup();
  });

  it('should have text field for solution title', () => {
    const wrapper = setup();
    const tilteTextField = wrapper.find('TextField.title');
    expect(tilteTextField.length).toBe(1);
  });

  it('should have text field for tags', () => {
    const wrapper = setup();
    const tagsTextField = wrapper.find('TextField.tags');
    expect(tagsTextField.length).toBe(1);
  });

  it('should have text field for description', () => {
    const wrapper = setup();
    const descriptionTextField = wrapper.find('TextField.description');
    expect(descriptionTextField.length).toBe(1);
  });

  it('description field should be multiline', () => {
    const wrapper = setup();
    const descriptionTextField = wrapper.find('TextField.description');
    expect(descriptionTextField.first().props().multiline).toBe(true);
  });

  it('should have back button', () => {
    const wrapper = setup();
    const backButton = wrapper.find('.back-button');
    expect(backButton.length).toBe(1);
  });
});
