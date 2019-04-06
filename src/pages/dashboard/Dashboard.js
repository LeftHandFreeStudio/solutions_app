import React, { Component } from 'react';
import './Dashboard.css';
import UsernameInput from './username-input/UsernameInput';
import MySolutionsList from '../my-solutions-list/MySolutionsList';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSolutions } from '../../modules/solutionsActions';
import { setUserData } from '../../modules/userActions';

export class Dashboard extends Component {
  render() {
    const newSolutionButton =
      this.props.user.username === '' ? (
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
        {this.props.user.username === '' && (
          <div>
            <UsernameInput
              user={this.props.user.username}
              onClick={this.handleLogin}
            />
          </div>
        )}
        {newSolutionButton}
        {this.props.areSolutionsFetched && <CircularProgress />}
        <MySolutionsList solutionsList={this.props.solutions} />
      </div>
    );
  }

  handleLogin = username => {
    this.props.dispatch(setUserData({ username: username }));
    this.props.dispatch(fetchSolutions(username));
  };
}

const mapStateToProps = state => {
  return {
    solutions: state.userSolutions.items,
    areSolutionsFetched: state.userSolutions.isFetching,
    user: state.user
  };
};

export default connect(mapStateToProps)(Dashboard);
