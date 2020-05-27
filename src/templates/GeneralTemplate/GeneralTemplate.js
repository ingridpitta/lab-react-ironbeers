import React, { Component } from 'react';
import Header from '../../components/molecules/Header/Header';
import './generalTemplate.css';

class GeneralTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  getLocation = () => {
    const { location, children } = this.props;

    if (location === '/') return children;

    return (
      <React.Fragment>
        <Header /> {children}
      </React.Fragment>
    );
  };

  render() {
    return (
      <div className="generalTemplate--container">{this.getLocation()}</div>
    );
  }
}
export default GeneralTemplate;
