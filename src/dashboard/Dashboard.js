import React, { Component } from 'react';
import './Dashboard.css';
import UsernameInput from './username-input/UsernameInput';
import axios from 'axios';
import MySolutionsList from '../my-solutions-list/MySolutionsList';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import AddSolutionForm from '../add-solution-form/AddSolutionForm';
import CircularProgress from '@material-ui/core/CircularProgress';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      solutions: [],
      shouldShowNewSolutionForm: false,
      user: '',
      areSolutionsFetched: true
    };
  }

  render() {
    return (
      <div>
        <div className="dashboard">{'Das Dashboard'}</div>
        {!this.state.shouldShowNewSolutionForm ? (
          <div>
            <UsernameInput user={this.state.user} onClick={this.handleLogin} />
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
        {this.state.areSolutionsFetched ? null : <CircularProgress />}
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
    value = value === '' ? this.state.user : value;
    this.setState({
      user: value,
      areSolutionsFetched: false
    });
    axios
      .get(
        'https://elkkfnoggi.execute-api.us-east-1.amazonaws.com/default/mka_todos'
      )
      .then(response => {
        console.log('resposne');
        console.log(response);
        const responseData = response.data.filter(solution => {
          return solution.user === value;
        });
        this.setState({
          solutions: responseData,
          user: value,
          areSolutionsFetched: true
        });
      });
  };
}

export default Dashboard;
