import React, { Component } from 'react';
import './MySolutionsList.css';
import Solution from './solution/Solution';

class MySolutionsList extends Component {
  render() {
    const solutionsList = this.props.solutionsList;
    const userInfo = solutionsList[0]
      ? 'Solutions from user : ' + solutionsList[0].user
      : '';
    return (
      <div>
        <p>{userInfo}</p>
        {this.props.solutionsList.map((solution, index) => {
          return (
            <Solution key={solution.id} index={index} solution={solution} />
          );
        })}
      </div>
    );
  }
}

export default MySolutionsList;
