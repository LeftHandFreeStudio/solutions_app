import React, { Component } from 'react';
import './AddSolutionForm.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Step from './step/Step';
import cloneDeep from 'lodash/cloneDeep';

class AddSolutionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleInputValue: '',
      tagsInputValue: '',
      steps: []
    };
  }
  render() {
    const steps = this.state.steps;
    return (
      <div>
        <Button
          className="new-step-button"
          color="primary"
          onClick={this.handleNewStepClick}
        >
          New Step
        </Button>
        <TextField
          className="title"
          label="Title"
          margin="normal"
          variant="outlined"
          onChange={e => this.setState({ titleInputValue: e.target.value })}
        />
        {steps.map((step, index) => {
          return <Step key={index} index={index + 1} ref={this.assignRef} />;
        })}
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
      </div>
    );
  }

  assignRef = ref => {
    if (ref === null) {
      return;
    }
    const newSteps = cloneDeep(this.state.steps);
    newSteps[ref.props.index - 1] = ref;
    this.setState({ steps: newSteps });
  };

  handleNewStepClick = () => {
    if (this.state.steps.length >= 10) {
      return;
    }
    this.setState({ steps: this.state.steps.concat(['x']) });
  };

  handleSaveClick = () => {
    const stepsToSend = this.state.steps.map(step => step.state.currentValue);
    const newSolution = {
      title: this.state.titleInputValue,
      steps: stepsToSend,
      tags: this.state.tagsInputValue
    };
    this.props.saveSolution(newSolution);
  };
}

export default AddSolutionForm;
