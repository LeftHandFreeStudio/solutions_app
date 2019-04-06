import React, { Component } from 'react';
import './Dashboard.css';
import UsernameInput from './username-input/UsernameInput';
import axios from 'axios';
import MySolutionsList from '../my-solutions-list/MySolutionsList';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { store } from '../../store';
import { fetchSolutions } from '../../modules/solutionsActions';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      solutions: [],
      user: '',
      areSolutionsFetched: true
    };
  }

  render() {
    const newSolutionButton =
      this.state.user === '' ? (
        ''
      ) : (
        <Link to="/add">
          <Fab
            className="new-solution-button"
            variant="extended"
            size="small"
            color="primary"
            aria-label="Add"
          >
            <NavigationIcon />
            Add New Solution
          </Fab>
        </Link>
      );
    return (
      <div>
        <div className="dashboard">{'Das Dashboard'}</div>
        {!this.state.shouldShowNewSolutionForm ? (
          <div>
            <UsernameInput user={this.state.user} onClick={this.handleLogin} />
          </div>
        ) : null}
        {newSolutionButton}
        {this.props.areSolutionsFetched && <CircularProgress />}
        <MySolutionsList solutionsList={this.props.solutions} />
      </div>
    );
  }

  handleNewSolutionSave = newSolution => {
    newSolution.user = this.state.user;
    axios
      .post(
        'https://elkkfnoggi.execute-api.us-east-1.amazonaws.com/default/mka_todos',
        newSolution
      )
      .then(response => {
        console.log('trying to create solution with status ' + response.status);
      });
  };

  handleLogin = username => {
    username = username === '' ? this.state.user : username;
    this.setState({
      user: username,
      areSolutionsFetched: false
    });
    store.dispatch(fetchSolutions(username));
  };
}

const mapStateToProps = state => {
  return {
    solutions: state.userSolutions.items,
    areSolutionsFetched: state.userSolutions.isFetching
  };
};

export default connect(mapStateToProps)(Dashboard);
