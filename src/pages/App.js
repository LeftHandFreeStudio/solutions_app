import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import AddSolutionForm from './add-solution-form/AddSolutionForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={Dashboard} />
          <Route path="/add" component={AddSolutionForm} />
        </div>
      </Router>
    );
  }
}

export default App;
