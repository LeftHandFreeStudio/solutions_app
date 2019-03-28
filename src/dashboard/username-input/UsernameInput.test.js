import React from 'react';
import ReactDOM from 'react-dom';
import UsernameInput from './UsernameInput';
import { shallow } from 'enzyme';
import { TextField } from '@material-ui/core';
import '../../setupTests';

describe('UsernameInput', () => {
  let defaultProps;
  beforeEach(() => {
    defaultProps = {};
  });
  it('renders without crashing even without props', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UsernameInput />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render user name text field with correct input', () => {
    const wrapper = shallow(<UsernameInput user={'max'} />);
    const textField = wrapper.find(TextField);
    expect(textField.length).toBe(1);
    expect(textField.props().value).toBe('max');
  });

  it('should call onClick from props with input field value', () => {
    const onClickStub = jest.fn();
    const wrapper = shallow(
      <UsernameInput user={'max'} onClick={onClickStub} />
    );
    const sendButton = wrapper.find('.send-button');
    sendButton.first().simulate('click');
    expect(onClickStub).toHaveBeenCalledWith('max');
  });
});
