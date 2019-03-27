import React, { Component } from 'react';
import './Dashboard.css';
import UsernameInput from './username-input/UsernameInput';
import axios from 'axios';
import MySolutionsList from '../my-solutions-list/MySolutionsList';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      solutions: []
    };
  }

  render() {
    return (
      <div>
        <div className="dashboard">{'Das Dashboard'}</div>
        <UsernameInput onClick={this.handleLogin} />
        <MySolutionsList solutionsList={this.state.solutions} />
      </div>
    );
  }

  handleLogin = value => {
    axios
      .get(
        'https://elkkfnoggi.execute-api.us-east-1.amazonaws.com/default/mka_todos'
      )
      .then(response => {
        const responseData = response.data.filter(solution => {
          return solution.user === value;
        });
        this.setState({ solutions: responseData });
      });
  };
}

export default Dashboard;
