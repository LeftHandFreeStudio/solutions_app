import React, { Component } from 'react';
import './Solution.css';

class Solution extends Component {
  render() {
    const solution = this.props.solution;
    const steps = solution.steps ? solution.steps : [];
    const index = this.props.index + 1;
    const renderedSteps = steps.map((step, i) => (
      <div key={i}>
        <p>Step {' ' + index}</p>
        <p className="step">{step}</p>
      </div>
    ));
    return (
      <div>
        <p>{index}</p>
        <p className="tags-info">{solution.tags}</p>
        <div>{renderedSteps}</div>
        <p className="description">{solution.description}</p>
      </div>
    );
  }
}
export default Solution;
