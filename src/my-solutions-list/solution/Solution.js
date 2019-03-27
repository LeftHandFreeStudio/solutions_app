import React, { Component } from 'react';
import './Solution.css';

class Solution extends Component {
  render() {
    const solution = this.props.solution;
    const index = this.props.index + 1;
    return (
      <div>
        <p>{index}</p>
        <p>{solution.tags}</p>
        <p>{solution.description}</p>
      </div>
    );
  }
}

export default Solution;
