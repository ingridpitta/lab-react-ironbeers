import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../atoms/Title/Title';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import './beersCard.css';

const BeersCard = ({ beer }) => {
  return (
    <Link to={`/beers/:${beer._id}`}>
      <div className="beersCard--container">
        <img src={beer.image} alt={beer.name} />
        <Title text={beer.name} />
        <Paragraph text={beer.tagline} />
        <h3>{`Created by: ${beer.contributed_by}`}</h3>
      </div>
    </Link>
  );
};

export default BeersCard;
