import React, { Component } from 'react';
import GeneralTemplate from '../../templates/GeneralTemplate/GeneralTemplate';
import HomeContent from '../../components/organisms/HomeContent/HomeContent';
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <GeneralTemplate location={this.props.location.pathname}>
        <HomeContent />
      </GeneralTemplate>
    );
  }
}

export default Home;
