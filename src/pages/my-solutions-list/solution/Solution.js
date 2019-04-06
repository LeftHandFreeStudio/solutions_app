import React, { Component } from 'react';
import './Solution.css';

class Solution extends Component {
  render() {
    const solution = this.props.solution;
    return (
      <div className="solution-wrapper">
        <p className="title-info">{solution.title}</p>
        <p className="description-content">{solution.description}</p>
        <p className="tags-info">{solution.tags}</p>
      </div>
    );
  }
}
export default Solution;
