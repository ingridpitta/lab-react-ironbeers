import React, { Component } from 'react';
import CardSection from '../../molecules/CardSection/CardSection';
import './homeContent.css';

class HomeContent extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          img: '../../../assets/images/allBeers.jpg',
          alt: 'All Beers',
          title: 'All Beers',
          description: 'Lorem ipsum',
          url: '/beers'
        },

        {
          img: '../../../assets/images/randomBeer.jpg',
          alt: 'Random Beer',
          title: 'Random Beer',
          description: 'Lorem ipsum',
          url: '/random-beer'
        },

        {
          img: '../../../assets/images/newBeer.jpg',
          alt: 'New Beer',
          title: 'New Beer',
          description: 'Lorem ipsum',
          url: '/new-beer'
        }
      ]
    };
  }

  render() {
    const { sections } = this.state;
    return (
      <div className="homeContent--container">
        {sections.map((section, index) => (
          <CardSection key={`${index + 1}--card`} section={section} />
        ))}
      </div>
    );
  }
}

export default HomeContent;
