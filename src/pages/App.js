import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import AddSolutionForm from './add-solution-form/AddSolutionForm';
import { Provider } from 'react-redux';
import { store } from '../store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <Route exact path="/" component={Dashboard} />
            <Route path="/add" component={AddSolutionForm} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
