import React, { Component } from 'react';
import './Step.css';
import TextField from '@material-ui/core/TextField';

class Step extends Component {
  constructor(props) {
    super(props);

    this.state = { currentValue: '' };
  }

  render() {
    return (
      <div>
        <div>Step {' ' + this.props.index}</div>
        <TextField
          className="step-desc"
          placeholder="Add step description..."
          multiline
          margin="normal"
          onChange={e => this.setState({ currentValue: e.target.value })}
        />
      </div>
    );
  }
}

export default Step;
