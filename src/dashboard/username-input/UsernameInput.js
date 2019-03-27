import React, { Component } from 'react';
import './UsernameInput.css';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

class UsernameInput extends Component {
  inputValue = '';
  render() {
    return (
      <div className="input-container">
        <form>
          <TextField
            id="outlined-name"
            label="Username"
            margin="normal"
            variant="outlined"
            onInput={e => (this.inputValue = e.target.value)}
          />
        </form>
        <div className="send-button-container">
          <Fab color="primary" aria-label="Add" onClick={this.handleSendClick}>
            <Icon>send</Icon>
          </Fab>
        </div>
      </div>
    );
  }

  handleSendClick = () => {
    this.props.onClick(this.inputValue);
  };
}

export default UsernameInput;
