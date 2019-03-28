import React, { Component } from 'react';
import './AddSolutionForm.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

class AddSolutionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleInputValue: '',
      tagsInputValue: '',
      descriptionInputValue: '',
      steps: []
    };
  }
  render() {
    return (
      <div>
        <Button className="new-step-button" color="primary">
          New Step
        </Button>
        <TextField
          className="title"
          label="Title"
          margin="normal"
          variant="outlined"
          onChange={e => this.setState({ titleInputValue: e.target.value })}
        />
        <TextField
          label="Description"
          margin="normal"
          rows="5"
          variant="outlined"
          onInput={e =>
            this.setState({ descriptionInputValue: e.target.value })
          }
        />
        <TextField
          label="Tags"
          margin="normal"
          variant="outlined"
          onInput={e => this.setState({ tagsInputValue: e.target.value })}
        />
        <Button
          className="save-button"
          variant="contained"
          color="primary"
          onClick={this.handleSaveClick}
        >
          Send
          <Icon>send</Icon>
        </Button>
      </div>
    );
  }

  handleSaveClick = () => {
    const newSolution = {
      title: this.state.titleInputValue,
      description: this.state.descriptionInputValue,
      tags: this.state.tagsInputValue
    };
    this.props.saveSolution(newSolution);
  };
}

export default AddSolutionForm;
