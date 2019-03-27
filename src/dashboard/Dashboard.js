import React, { Component } from 'react';
import './Dashboard.css';
import UsernameInput from './username-input/UsernameInput';
import axios from 'axios';
import MySolutionsList from '../my-solutions-list/MySolutionsList';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import AddSolutionForm from '../add-solution-form/AddSolutionForm';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      solutions: [],
      shouldShowNewSolutionForm: false,
      user: ''
    };
  }

  render() {
    return (
      <div>
        <div className="dashboard">{'Das Dashboard'}</div>
        {!this.state.shouldShowNewSolutionForm ? (
          <div>
            <UsernameInput onClick={this.handleLogin} />
          </div>
        ) : null}
        <Fab
          variant="extended"
          size="small"
          color="primary"
          aria-label="Add"
          onClick={this.handleAddNewSolutionIntent}
        >
          <NavigationIcon />
          Add New Solution
        </Fab>
        {!this.state.shouldShowNewSolutionForm ? (
          <div>
            <MySolutionsList solutionsList={this.state.solutions} />
          </div>
        ) : (
          <AddSolutionForm
            user={this.state.user}
            saveSolution={this.handleNewSolutionSave}
          />
        )}
      </div>
    );
  }

  handleAddNewSolutionIntent = () => {
    this.setState({
      solutions: this.state.solutions,
      shouldShowNewSolutionForm: !this.state.shouldShowNewSolutionForm
    });
  };

  handleNewSolutionSave = newSolution => {
    axios
      .post(
        'https://elkkfnoggi.execute-api.us-east-1.amazonaws.com/default/mka_todos',
        newSolution
      )
      .then(response => {
        console.log('trying to create solution with status ' + response.status);
      });
  };

  handleLogin = value => {
    axios
      .get(
        'https://elkkfnoggi.execute-api.us-east-1.amazonaws.com/default/mka_todos'
      )
      .then(response => {
        const responseData = response.data.filter(solution => {
          return solution.user === value;
        });
        this.setState({ solutions: responseData, user: value });
      });
  };
}

export default Dashboard;
