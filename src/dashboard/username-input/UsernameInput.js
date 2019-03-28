import React, { Component } from 'react';
import './UsernameInput.css';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

class UsernameInput extends Component {
  constructor(props) {
    super(props);

    this.state = { currentUsername: props.user };
  }
  inputValue = '';
  render() {
    const userName = this.state.currentUsername
      ? this.state.currentUsername
      : '';
    return (
      <div className="input-container">
        <form>
          <TextField
            id="outlined-name"
            label="Username"
            margin="normal"
            variant="outlined"
            value={userName}
            onInput={e => {
              this.inputValue = e.target.value;
              this.setState({ currentUsername: this.inputValue });
            }}
          />
        </form>
        <div className="send-button-container">
          <Fab
            className="send-button"
            color="primary"
            aria-label="Add"
            onClick={this.handleSendClick}
          >
            <Icon>send</Icon>
          </Fab>
        </div>
      </div>
    );
  }

  handleSendClick = () => {
    this.inputValue =
      this.inputValue === '' ? this.state.currentUsername : this.inputValue;
    this.props.onClick(this.inputValue);
  };
}

export default UsernameInput;
