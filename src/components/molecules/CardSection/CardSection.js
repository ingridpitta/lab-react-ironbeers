import React from 'react';
import {Link} from "react-router-dom";
import Title from '../../atoms/Title/Title';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import './cardSection.css';

const CardSection = ({ section }) => {
  return (
      <Link to={section.url}>
    <div className="cardSection--container">
      <img src={section.img} alt={section.alt} />
      <Title text={section.title} />
      <Paragraph text={section.description} />
    </div>
    </Link>
  );
};

export default CardSection;
