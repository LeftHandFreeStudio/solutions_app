import React, { Component } from 'react';
import './AddSolutionForm.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
import { postSolution } from '../../modules/solutionsActions';
import { connect } from 'react-redux';

class AddSolutionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleInputValue: '',
      descriptionInputValue: '',
      tagsInputValue: ''
    };
  }
  render() {
    return (
      <div className="wrapper">
        <TextField
          className="title"
          label="Title"
          margin="normal"
          variant="outlined"
          onChange={this.handleTitleChange}
        />
        <TextField
          className="description"
          label="Description"
          margin="normal"
          variant="outlined"
          rows="10"
          multiline
          onChange={e =>
            this.setState({ descriptionInputValue: e.target.value })
          }
        />
        <TextField
          className="tags"
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
        <Link to="/">
          <Button className="back-button" variant="contained" color="primary">
            <Icon>arrow_back_ios</Icon>
          </Button>
        </Link>
      </div>
    );
  }

  handleTitleChange = e => {
    this.setState({ titleInputValue: e.target.value });
  };

  handleSaveClick = () => {
    const newSolution = {
      title: this.state.titleInputValue,
      description: this.state.descriptionInputValue,
      tags: this.state.tagsInputValue
    };
    newSolution.user = this.props.user.username;
    this.props.dispatch(postSolution(newSolution));
  };
}

const mapStateToProps = function(state) {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(AddSolutionForm);
