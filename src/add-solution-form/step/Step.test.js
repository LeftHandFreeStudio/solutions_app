import React from 'react';
import ReactDOM from 'react-dom';
import Step from './Step';
import { shallow } from 'enzyme';
import '../../setupTests';

describe('Step', () => {
  beforeEach(() => {});
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Step />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it(' should have text field for description', () => {
    const wrapper = shallow(<Step />);
    const textField = wrapper.find('.step-desc');
    expect(textField.length).toBe(1);
  });

  it('should save value input into step description in state currentValue', () => {
    const wrapper = shallow(<Step />);
    const stepDescriptionField = wrapper.find('.step-desc');
    stepDescriptionField
      .first()
      .simulate('change', { target: { value: 'test' } });
    expect(wrapper.state().currentValue).toBe('test');
  });
});
