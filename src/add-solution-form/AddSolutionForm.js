import React, { Component } from 'react';
import './AddSolutionForm.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

class AddSolutionForm extends Component {
  titleInputValue = '';
  tagsInputValue = '';
  descriptionInputValue = '';
  render() {
    return (
      <div>
        <TextField
          label="Title"
          margin="normal"
          variant="outlined"
          onInput={e => (this.titleInputValue = e.target.value)}
        />
        <TextField
          label="Description"
          margin="normal"
          rows="5"
          variant="outlined"
          onInput={e => (this.descriptionInputValue = e.target.value)}
        />
        <TextField
          label="Tags"
          margin="normal"
          variant="outlined"
          onInput={e => (this.tagsInputValue = e.target.value)}
        />
        <Button
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
      title: this.titleInputValue,
      description: this.descriptionInputValue,
      tags: this.tagsInputValue,
      user: this.props.user
    };
    this.props.saveSolution(newSolution);
  };
}

export default AddSolutionForm;
