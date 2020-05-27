import React, { Component } from 'react';
import BeersCard from '../../molecules/BeersCard/BeersCard';
import './beersContent.css';

class BeersContent extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { beers } = this.props;
    return (
      <div className="beersContent--container">
        {beers.map((beer, index) => (
          <BeersCard key={`${index + 1}-beer`} beer={beer} />
        ))}
      </div>
    );
  }
}

export default BeersContent;
