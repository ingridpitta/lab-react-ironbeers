import React, { Component } from 'react';
import GeneralTemplate from '../../templates/GeneralTemplate/GeneralTemplate';
import BeersContent from '../../components/organisms/BeersContent/BeersContent';
import './beers.css';

class Beers extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { location, beers } = this.props;
    return (
      <GeneralTemplate location={location.pathname}>
        <BeersContent beers={beers} />
      </GeneralTemplate>
    );
  }
}

export default Beers;
